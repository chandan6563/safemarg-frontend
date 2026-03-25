import Image from "next/image";
import Ancillary from "@/assets/bookingDetails/ancillary.svg";

export default function TravelAndInsurance() {
  return (
    <div className="rounded-md border border-gray-200  shadow-xl w-full">
      <div className="bg-[#154880] px-2 py-2 flex items-center rounded-t-md">
        <Image src={Ancillary} alt="discount-offers" width={30} />
        <div className="text-white ml-2 text-xl font-medium">
          Discounts/Offers
        </div>
      </div>
      <div className="py-5 pl-5 text-[#00BBF2] text-xs font-normal underline cursor-pointer">
        Free Travel Insurance included in this booking, Click here for details.
      </div>
    </div>
  );
}
