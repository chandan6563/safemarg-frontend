import React from "react";

const History = () => {
  return (
    <div className="max-w-6xl mx-auto py-10">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-5 bg-white rounded-xl border border-gray-200">
        <h2 className="font-semibold text-2xl mb-4">Booking History</h2>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">Booking Ref</th>
              <th scope="col" className="px-6 py-3">Flight Number</th>
              <th scope="col" className="px-6 py-3">From</th>
              <th scope="col" className="px-6 py-3">To</th>
              <th scope="col" className="px-6 py-3">Date</th>
              <th scope="col" className="px-6 py-3">Status</th>
              <th scope="col" className="px-6 py-3">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                HF123456
              </th>
              <td className="px-6 py-4">AI202</td>
              <td className="px-6 py-4">New Delhi (DEL)</td>
              <td className="px-6 py-4">Mumbai (BOM)</td>
              <td className="px-6 py-4">2025-09-20</td>
              <td className="px-6 py-4 text-green-600 font-semibold">Confirmed</td>
              <td className="px-6 py-4">$120</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                HF123457
              </th>
              <td className="px-6 py-4">AI305</td>
              <td className="px-6 py-4">Mumbai (BOM)</td>
              <td className="px-6 py-4">Bengaluru (BLR)</td>
              <td className="px-6 py-4">2025-09-22</td>
              <td className="px-6 py-4 text-yellow-600 font-semibold">Pending</td>
              <td className="px-6 py-4">$80</td>
            </tr>
            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                HF123458
              </th>
              <td className="px-6 py-4">AI410</td>
              <td className="px-6 py-4">Bengaluru (BLR)</td>
              <td className="px-6 py-4">Chennai (MAA)</td>
              <td className="px-6 py-4">2025-09-25</td>
              <td className="px-6 py-4 text-red-600 font-semibold">Cancelled</td>
              <td className="px-6 py-4">$70</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default History;
