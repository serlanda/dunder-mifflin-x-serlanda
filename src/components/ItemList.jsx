import { useState } from "react";
import SingleItem from "./SingleItem";
import ShowMore from "./ShowMore";
// import { products } from "../mock";

export default function ItemList({ products, category }) {
  const [noOfItems, setNoOfItems] = useState(8);

  return (
    <>
      <main className="container mx-auto px-7 mb-7">
        {products && (
        <h2 className="my-7 lg:text-[25px] text-[21px] text-[#7856ff] text-left tracking-wider font-semibold">
          Yeni Koleksiyon!
        </h2>
        )}
        <section className="flex justify-center items-center flex-wrap gap-6">
          {products?.slice(0, noOfItems).map((item, index) => (
            <div>
              <SingleItem item={item} key={index} />
            </div>
          ))}
          {category?.slice(0, 4).map((ctg, index) => (
            <div>
              <SingleItem item={ctg} key={index} />
            </div>
          ))}
        </section>
      </main>
      {products && (
        <ShowMore noOfItems={noOfItems} setNoOfItems={setNoOfItems} />
      )}
    </>
  );
}
