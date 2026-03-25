import Image from "next/image";
import Ancillary from "@/assets/bookingDetails/ancillary.svg";

export default function AncillaryServices() {
  return (
    <div className=" rounded-md border border-gray-200 shadow-xl w-full ">
      <div className="bg-[#154880] rounded-t-md pl-3 py-3 flex items-center w-full">
        <Image src={Ancillary} alt="ancillary" width={30} />
        <div className="text-white ml-2 text-xl font-medium">
          Ancillary Services
        </div>
      </div>
      <div className="py-5 px-5  text-base ">
        <table className="table-auto border-collapse border border-gray-400 w-full ">
          <thead>
            <tr className="bg-gray-100 text-base">
              <th className="border border-gray-300 text-start pl-5">
                Passenger
              </th>
              <th className="border border-gray-300 text-start pl-5">
                Journey
              </th>
              <th className="border border-gray-300 text-start pl-5">
                Seat No.
              </th>
              <th className="border border-gray-300 text-start pl-5">Meal</th>
              <th className="border border-gray-300 text-start  pl-5 py-2">
                Baggage
              </th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3].map((item, i) => (
              <tr className="text-sm" key={i}>
                <td className="border border-gray-300 text-start pl-5 py-2 ">
                  Passenger 1
                </td>
                <td className="border border-gray-300 text-start pl-5">
                  HDO - VNS
                </td>
                <td className="border border-gray-300 text-start pl-5">3C</td>
                <td className="border border-gray-300 text-start pl-5">
                  Masala Chai
                </td>
                <td className="border border-gray-300 text-start pl-5">
                  + 15 Kg
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
