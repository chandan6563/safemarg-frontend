"use client";
import BhimIcon from "@/assets/paymentGateway/bhim.svg";
import CardsIcon from "@/assets/paymentGateway/cards.svg";
import WalletsIcon from "@/assets/paymentGateway/wallets.svg";
import NetBankingIcon from "@/assets/paymentGateway/netbanking.svg";
import SafeMargIcon from "@/assets/paymentGateway/safemargSmall.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const paymentMethods = [
  { icon: BhimIcon, name: "BHIM/UPI", href: "/payment-gateway/" },
  {
    icon: SafeMargIcon,
    name: "Safemarg pay",
    href: "/payment-gateway/safemarg-pay",
  },
  {
    icon: CardsIcon,
    name: "Credit / Debit Card",
    href: "/payment-gateway/credit-debit-cards",
  },
  {
    icon: NetBankingIcon,
    name: "Net Banking",
    href: "/payment-gateway/net-banking",
  },
  { icon: WalletsIcon, name: "Wallets", href: "/payment-gateway/wallets" },
];

export default function PaymentMethods() {
  const pathname = usePathname();
  // console.log("pathname : ", pathname);
  return (
    <div className="border border-[#00BBF2] divide-y-1 divide-[#737373] w-full pb-30  ">
      {paymentMethods.map(({ icon, name, href }) => {
        return (
          <Link
            href={`${href}`}
            key={name}
            className={`flex items-center  pl-3 py-2 hover:bg-[#00BBF2] cursor-pointer ${
              pathname == href ? "bg-[#00BBF2]" : "bg-white"
            }`}
          >
            <span>
              <Image src={icon} alt={name} width={23} />
            </span>
            <span className="pl-3 text-black text-lg font-medium">{name}</span>
          </Link>
        );
      })}
    </div>
  );
}
