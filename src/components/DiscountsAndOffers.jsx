import Image from "next/image";
import DiscountOffers from "@/assets/bookingDetails/discount-offers.svg";

export default function DiscountsAndOffers() {
  return (
    <div className="w-[300px] rounded-md border border-gray-200  shadow-xl">
      <div className="bg-[#154880] px-2 py-2 flex items-center w-full">
        <Image src={DiscountOffers} alt="discount-offers" width={40} />
        <div className="text-white ml-2 text-xl font-medium">
          Discounts/Offers
        </div>
      </div>
      <div className="py-5 pl-5 text-[#FF9F43] text-base">
        No offers available at this time
      </div>
    </div>
  );
}
