"use client";
import PayTmIcon from "@/assets/paymentGateway/paytm.svg";
import RazorpayIcon from "@/assets/paymentGateway/razorpay.svg";
import SafemargIcon from "@/assets/paymentGateway/safemarg.svg";
import HdfcBankIcon from "@/assets/paymentGateway/hdfc.svg";
import SbiBankIcon from "@/assets/paymentGateway/sbi.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

const paymentMethod = [
  { icon: RazorpayIcon, name: "Razorpay" },
  { icon: PayTmIcon, name: "paytm" },
  { icon: SafemargIcon, name: "safemarg" },
  { icon: SbiBankIcon, name: "Sbi bank" },
  { icon: HdfcBankIcon, name: "HDFC bank" },
];
const CreditDebitCards = () => {
  const router = useRouter();
  return (
    <div>
      <div className="grid grid-cols-3 gap-y-10 pt-10 pl-15">
        {paymentMethod.map(({ icon, name }, i) => (
          <div
            key={name}
            className="border border-[#154880] w-60 h-20 flex cursor-pointer hover:bg-gray-200"
          >
            <Image src={icon} alt={name} className="mx-auto" />
          </div>
        ))}
      </div>
      <div className="flex justify-end gap-x-10 mt-10 text-base mr-5 ">
        <button
          className="text-white bg-[#FF9F43] hover:bg-orange-300 px-12  py-1 rounded-sm cursor-pointer"
          onClick={() => router.back()}
        >
          &lt; Back
        </button>
        <button className="bg-[#00BBF2] hover:bg-blue-300 text-white px-6 py-1 rounded-sm cursor-pointer">
          Make Payment
        </button>
      </div>
    </div>
  );
};

export default CreditDebitCards;
