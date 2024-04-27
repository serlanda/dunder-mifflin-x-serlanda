import { Link } from "react-router-dom";

export default function SingleCollection({ collection, key }) {
  return (
    <Link
      key={key}
      to={`/collections/${collection.category}`}
      className="2xl:w-[700px] xl:w-[588px] lg:w-[460px] w-[700px] lg:h-[475px] sm:h-[236px] h-[227px] rounded-2xl bg-[#FFFF] flex border-2 hover:border-[#7856ff] transition-colors cursor-pointer m-2 overflow-hidden"
    >
      <div className="flex justify-center items-center">
        <img
          src={collection.image}
          alt={collection.category}
          className="xl:max-w-[300px] lg:max-w-[270px] max-w-[175px] min-h-[450px] max-h-[450px] object-contain p-7"
        />
        <h2 className="lg:text-[26px] text-xl tracking-widest text-[#ffbe0b] 2xl:ml-14 font-light">
          {collection.category}.
        </h2>
      </div>
    </Link>
  );
}

// 330px 200px 724px 475px 468px 596px 716px 468px
