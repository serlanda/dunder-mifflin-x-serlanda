import { Link } from "react-router-dom";

export default function SingleItem({ item }) {
  return (
    <Link
      key={item.id}
      to={`/products/${item.id}`}
      className="relative lg:w-[350px] lg:h-[450px] w-[340px] h-[225px] lg:hover:border-inherit hover:border-[#7856ff] rounded-2xl bg-[#FFFF] flex flex-col justify-evenly items-start border transition-colors cursor-pointer overflow-hidden"
    >
      <div className="lg:flex gap-1 items-center ml-3 z-10 absolute top-2 hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          strokeWidth={1.2}
          stroke="currentColor"
          className="w-6 h-6 fill-[#ffbe0b]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
          />
        </svg>
        <span className="text-[20px]">{item.rating.rate}</span>
      </div>
      <img
        src={item.image}
        className="lg:max-w-[225px] max-w-[110px] mx-auto lg:min-h-[250px] min-h-[150px] lg:max-h-[200px] max-h-[110px] object-contain"
      />
      <div className="px-4">
        <p className="opacity-70 text-sm text-left hidden lg:block">
          {item.category.toUpperCase()}
        </p>
        <h3 className="text-center lg:text-xl text-base font-bold">
          {item.title.substring(0, 27)}...
        </h3>
        <span className="font-normal text-left lg:text-lg">
          {item.price} TL
        </span>
      </div>
      <button className="mx-auto border border-[#000] px-[109px] h-10 hidden lg:block lg:opacity-100 opacity-0 hover:bg-[#e6e7df] transition-colors">
        SEPETE EKLE
      </button>
    </Link>
  );
}

// hover:border-[#7856ff]
