import { useState } from "react";
import { Link } from "react-router-dom";

export default function SingleItem({ item }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      key={item.id}
      to={`/products/${item.id}`}
      className="group relative lg:w-[350px] lg:h-[450px] w-[340px] h-[225px] lg:hover:border-inherit hover:border-[#7856ff] rounded-2xl bg-[#FFFF] flex flex-col justify-evenly items-start transition-colors cursor-pointer overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <div className="flex gap-1 items-center ml-3 z-10 absolute top-0 left-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth={1.2}
            stroke="currentColor"
            className="lg:w-6 lg:h-6 w-4 h-4 fill-[#ffbe0b]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
            />
          </svg>
          <span className="lg:text-[20px] text-[14px]">{item.rating.rate}</span>
        </div>
      )}
      {isHovered && (
        <p className="lg:text-lg text-sm font-semibold absolute top-0 right-6 text-[#ff006e] z-10">
          Hızlı Teslimat
        </p>
      )}
      <img
        src={item.image}
        className="lg:max-w-[225px] max-w-[110px] mx-auto lg:min-h-[250px] min-h-[150px] lg:max-h-[200px] max-h-[110px] object-contain group-hover:scale-110 transition-transform"
      />

      <div className="px-4 mt-4">
        <p className="opacity-70 lg:text-[14px] text-[10px] text-left">
          {item.category.toUpperCase()}
        </p>
        <h3 className="text-left lg:text-xl text-base font-bold hover:text-gray-600 transition-colors">
          {item.title.substring(0, 27)}...
        </h3>
        <p className="font-normal text-left lg:text-lg">
          {item.price} <span className="text-sm">TL</span>
          <span className="lg:text-lg text-sm font-semibold text-[#ffbe0b] ml-12">
            Sepette %10 İndirim 🦩
          </span>
        </p>
      </div>
      {isHovered && (
        <button className="absolute bottom-[122px] left-0 right-0 mx-auto w-[300px] py-2 bg-black text-white tracking-widest text-[13px] font-bold hover:opacity-85 transition-colors">
          SEPETE EKLE
        </button>
      )}
    </Link>
  );
}

// hover:border-[#7856ff]  hidden lg:block

// lg:max-w-[225px] max-w-[110px] mx-auto lg:min-h-[250px] min-h-[150px] lg:max-h-[200px] max-h-[110px] object-contain group-hover:scale-110 transition-transform

// mx-auto border border-[#000] px-[109px] h-10 hidden lg:block lg:opacity-100 opacity-0 hover:bg-[#e6e7df] transition-colors

{
  /* <p className="lg:text-lg text-sm font-semibold absolute lg:bottom-[35px] bottom-[50px] right-10 text-[#ffbe0b] z-10">
Sepette %10 İndirim 🦩
</p>  */
}
