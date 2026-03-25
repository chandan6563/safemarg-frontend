// "use client";

// const Feedback = () => {
//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-6 text-center">Feedback</h1>

//       <p>
//         At <strong>SafeMarg</strong>, we value your feedback and continuously strive to improve your flight booking experience. Your suggestions, comments, and concerns help us provide better services and ensure your satisfaction.
//       </p>

//       <h2 className="text-xl font-semibold mt-6 mb-2">How to Share Feedback</h2>
//       <p>
//         You can share your feedback in the following ways:
//       </p>
//       <ul className="list-disc list-inside mt-2">
//         <li>Email us directly at <strong>support@safemarg.com</strong>.</li>
//         <li>Use the feedback form below to submit your comments.</li>
//         <li>Reach out to us on our social media channels.</li>
//       </ul>

//       <h2 className="text-xl font-semibold mt-6 mb-2">What We Appreciate</h2>
//       <ul className="list-disc list-inside mt-2">
//         <li>Suggestions to improve our flight booking process.</li>
//         <li>Comments on website usability and user experience.</li>
//         <li>Reports of any issues or technical difficulties.</li>
//         <li>Feedback on customer service or support interactions.</li>
//       </ul>

//       <h2 className="text-xl font-semibold mt-6 mb-2">Our Commitment</h2>
//       <p>
//         We take all feedback seriously and will review your comments promptly. While we may not be able to respond to every submission individually, your input will help us enhance our services and ensure a better experience for all travelers.
//       </p>

//       <h2 className="text-xl font-semibold mt-6 mb-2">Contact Us</h2>
//       <p>
//         For feedback, suggestions, or complaints, please email us at <strong>support@safemarg.com</strong> or use the contact form on our website. We value your opinion and appreciate your time in helping us improve SafeMarg.
//       </p>
//     </div>
//   );
// };

// export default Feedback;


"use client";
import React, { useState } from 'react';
import { 
  Heart, 
  MessageSquare, 
  Sparkles, 
  Target, 
  Zap, 
  ShieldCheck,
  Star,
  Send,
  ThumbsUp
} from 'lucide-react';

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const emojis = [
    { label: 'Terrible', symbol: '😫' },
    { label: 'Bad', symbol: '🙁' },
    { label: 'Okay', symbol: '😐' },
    { label: 'Good', symbol: '🙂' },
    { label: 'Amazing', symbol: '🤩' },
  ];

  return (
    <div className="min-h-screen bg-gray-50/30 font-[family-name:var(--font-poppins)] overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-400/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-400/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-10 lg:py-16">
        {/* Header Section - Compact */}
        <div className="text-center space-y-3 mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> We Value Your Voice
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight">
            Shape <span className="text-blue-600">SafeMarg</span> Together
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Your insights are the compass that guides our innovation. Tell us about your journey 
            so we can build a better travel experience for everyone.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Form & Interaction Area */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white rounded-[2.5rem] p-6 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <ThumbsUp className="w-6 h-6 text-blue-600" /> Rate Your Experience
              </h3>

              <div className="flex justify-between items-center mb-12 px-2">
                {emojis.map((emoji, idx) => (
                  <button
                    key={idx}
                    onMouseEnter={() => setHoverRating(idx + 1)}
                    onMouseLeave={() => setHoverRating(0)}
                    onClick={() => setRating(idx + 1)}
                    className={`flex flex-col items-center gap-3 transition-all duration-300 transform ${
                      (hoverRating || rating) === idx + 1 ? 'scale-125' : 'scale-100 opacity-40 grayscale-[50%]'
                    }`}
                  >
                    <span className="text-4xl md:text-5xl cursor-pointer">{emoji.symbol}</span>
                    <span className={`text-[10px] font-bold uppercase tracking-tighter ${
                      (hoverRating || rating) === idx + 1 ? 'text-blue-600' : 'text-gray-400'
                    }`}>
                      {emoji.label}
                    </span>
                  </button>
                ))}
              </div>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">What did you love / dislike?</label>
                  <textarea 
                    rows="5" 
                    placeholder="Tell us about the booking process, seat selection, local cabs, etc..." 
                    className="w-full px-6 py-5 rounded-3xl bg-gray-50 border border-transparent focus:bg-white focus:border-blue-400 outline-none transition-all font-medium resize-none shadow-inner"
                  ></textarea>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Email (Optional)</label>
                    <input type="email" placeholder="For follow-ups" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-blue-400 outline-none transition-all font-medium shadow-inner" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Booking ID</label>
                    <input type="text" placeholder="e.g. SM12345" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-blue-400 outline-none transition-all font-medium shadow-inner" />
                  </div>
                </div>

                <button className="w-full bg-blue-600 text-white font-bold py-5 rounded-2xl shadow-xl shadow-blue-200 hover:shadow-blue-300 hover:-translate-y-1 transition-all flex items-center justify-center gap-3 group">
                  Submit Feedback <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>

          {/* Right Pillar - Info & Categories */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-gray-950 text-white rounded-[2.5rem] p-10 overflow-hidden relative group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600 rounded-full blur-[80px] opacity-40 group-hover:opacity-60 transition-opacity"></div>
               <Target className="w-10 h-10 text-blue-500 mb-6" />
               <h3 className="text-2xl font-bold mb-4">Our Commitment</h3>
               <p className="text-gray-400 leading-relaxed mb-8">
                 We don't just collect feedback; we act on it. Every week, our product team reviews 
                 submissions to prioritize features that matter most to you.
               </p>
               <div className="space-y-4">
                 {[
                    { icon: ShieldCheck, text: 'Anonymous unless you share email' },
                    { icon: Zap, text: 'Technical issues resolved in 48h' },
                    { icon: Heart, text: 'Customer-driven development model' }
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-3 text-sm font-medium">
                      <item.icon className="w-4 h-4 text-blue-400" />
                      <span className="text-gray-300">{item.text}</span>
                   </div>
                 ))}
               </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {[
                { title: 'Usability', desc: 'Is the site easy to navigate?', icon: Sparkles },
                { title: 'Booking', desc: 'Any issues during checkout?', icon: MessageSquare },
                { title: 'Support', desc: 'How was your chat experience?', icon: Star }
              ].map((cat, i) => (
                <div key={i} className="bg-white p-6 rounded-3xl border border-gray-100 flex items-center gap-5 hover:border-blue-200 transition-colors shadow-sm">
                   <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                      <cat.icon className="w-6 h-6" />
                   </div>
                   <div>
                      <h4 className="font-bold text-gray-900 uppercase text-[10px] tracking-widest">{cat.title}</h4>
                      <p className="text-sm text-gray-500 leading-tight">{cat.desc}</p>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Closing Quote - Reduced margin */}
        <div className="mt-12 text-center pb-12">
           <p className="text-gray-400 text-sm font-medium italic">"Fly Smart. Travel Safe. Improve Together."</p>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
