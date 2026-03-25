export default function SelectDate({ date, price }) {
  return (
    <div className="bg-[#F6F9FC] text-center px-3 py-2 border border-[#737373] rounded-md min-w-[90px] sm:min-w-[100px]">
      <div className="font-semibold text-sm sm:text-base truncate">{date}</div>
      <div className="text-xs sm:text-sm font-medium text-green-500">
        ₹ {price}
      </div>
    </div>
  );
}
