import { useParams } from "react-router-dom";
import { products } from "../mock";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

export default function Product() {
  const { productId } = useParams();

  const product = products.find(
    (product) => product.id === parseInt(productId)
  );

  return (
    <>
      <Header />
      <main>
        <div className="flex justify-evenly 2xl:flex-row flex-col items-center">
          <img
            src={product.image}
            className="object-contain max-w-[700px] min-w-[500px] 2xl:h-[1073px] h-[700px] m-5 border-[#7856ff]"
          />
          <section className="flex flex-col items-center w-[800px] border">
            <div className="bg-[#fff] p-[75px] h-[600px] overflow-hidden">
              <span className="text-[#7856ff] px-1.5 py-0.5 border rounded-md border-[#7856ff] text-[17px]">
                YENİ
              </span>
              <h2 className="mt-3 text-left text-[30px] font-semibold">
                {product.title}
              </h2>
              <p className="text-[24px] my-7">
                {product.description.substring(0, 300)}
              </p>
              <div className="flex gap-1 items-center">
                {[...Array(product.rating.star)].map((star) => {
                  return (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      strokeWidth={1}
                      stroke="currentColor"
                      className="w-8 h-8 fill-[#ffbe0b] mb-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                  );
                })}
                <span className="text-[26px] ml-2">{product.rating.rate}</span>
              </div>
              <p className="text-[18px] ml-1">
                {product.rating.count} Değerlendirme
              </p>
            </div>
            <div className="flex w-[100%] h-[60px]">
              <span className="w-[50%] bg-[#e6e7df] flex items-center justify-center text-[#000] text-[22px]">
                {product.price} TL
              </span>
              <button className="w-[50%] bg-[#7856ff] hover:bg-[#6c4de6] transition-colors text-[#fff] text-[22px]">
                Sepete Ekle
              </button>
            </div>
          </section>
        </div>
      </main>
      <Footer position={"2xl:fixed bottom-0"} />
    </>
  );
}

{
  /* <svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
strokeWidth={1.5}
stroke="currentColor"
className="w-8 h-8 fill-[#ffbe0b]"
>
<path
  strokeLinecap="round"
  strokeLinejoin="round"
  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
  />
</svg> */
}
