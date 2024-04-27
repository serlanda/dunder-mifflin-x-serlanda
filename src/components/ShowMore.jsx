export default function ShowMore({ noOfItems, setNoOfItems }) {
  return (
    <div className="mb-[5px] text-[#FFFF] ">
      {noOfItems >= 20 ? (
        <button
          className="relative bottom-0 left-[50%] -translate-x-2/4 bg-[#7856ff] rounded-lg px-8 h-10 mt-7  hover:bg-[#6c4de6] transition-colors"
          onClick={() => setNoOfItems(noOfItems - 16)}
        >
          Daha Az Göster
        </button>
      ) : (
        <button
          className="relative bottom-0 left-[50%] -translate-x-2/4 bg-[#7856ff] rounded-lg px-8 h-10 mt-7 hover:bg-[#6c4de6] transition-colors"
          onClick={() => setNoOfItems(noOfItems + 8)}
        >
          Daha Fazla Göster
        </button>
      )}
    </div>
  );
}
