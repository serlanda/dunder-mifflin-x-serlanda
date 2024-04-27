import SingleCollection from "./SingleCollection";
import { categories } from "../mock"

export default function CollectionList() {

  return (
    <>
      <main className="container mx-auto px-7 -mb-5">
        <h2 className="my-[9px] text-[35px] text-center tracking-wider font-light">
          Collections
        </h2>
        <section className="max-w-screen">
          <div className="flex justify-center items-center flex-wrap">
            {categories.map((collection, index) => (
              <SingleCollection collection={collection} key={index}/>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
