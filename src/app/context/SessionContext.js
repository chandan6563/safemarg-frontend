"use client";
import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { MdAccessTime } from "react-icons/md";
const SESSION_TIMEOUT = 30 *60* 1000; 

export const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const router = useRouter();
  const [sessionExpired, setSessionExpired] = useState(false);
  const [countdown, setCountdown] = useState(SESSION_TIMEOUT / 1000); 
  const [amount, setAmount] = useState(null);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSessionExpired(true);
      sessionStorage.clear();
      window.history.replaceState({}, document.title, window.location.pathname);
    }, SESSION_TIMEOUT);

    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);

  const handleBackToHome = () => router.push("/");

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, "0");
    const s = Math.floor(seconds % 60).toString().padStart(2, "0");
    return `${m}m ${s}s`;
  };

  return (
    <SessionContext.Provider value={{ sessionExpired, countdown, amount,setAmount, formatTime, handleBackToHome }}>
      {children}
      {/* Session Modal */}
      {sessionExpired && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-8 w-[400px] text-center animate-fadeIn">
            <div className="flex flex-col items-center">
              <div className="bg-red-100 text-red-400 rounded-full p-3 mb-4 flex items-center justify-center">
               <MdAccessTime className="text-red-400" size={50} />
              </div>
              <h2 className="text-2xl font-semibold text-red-600 mb-2">Session Expired</h2>
              <p className="text-gray-600 mb-8 text-sm leading-relaxed">
                Your session has expired. Prices may change if you continue. Please go back to
                home and try again.
              </p>
            </div>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleBackToHome}
                className="px-5 py-2 rounded-lg bg-gray-500 text-white font-medium hover:bg-blue-600 transition-all"
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
      )}
    </SessionContext.Provider>
  );
};
