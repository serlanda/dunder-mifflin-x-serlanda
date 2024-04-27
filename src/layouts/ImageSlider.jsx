import { useState } from "react";
import sale1 from "../imgs/sale.jpg";
import sale2 from "../imgs/sale2.jpg";
import sale3 from "../imgs/sale3.jpg";

const images = [sale1, sale2, sale3];

export default function ImageSlider() {
  const [imageIndex, setImageIndex] = useState(0);

  const showNextImage = () => {
    setImageIndex((index) => {
      if (index === images.length - 1) return 0;
      return index + 1;
    });
  };

  const showPrevImage = () => {
    setImageIndex((index) => {
      if (index === 0) return images.length - 1;
      return index - 1;
    });
  };

  return (
    <div className="relative mb-7">
      <img src={images[imageIndex]} className="object-contain w-[100%] block"/>
      <button
        onClick={showPrevImage}
        className="block absolute top-0 bottom-0 left-0 p-4 transition-colors hover:bg-[#3333]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.8}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <button
        onClick={showNextImage}
        className="block absolute top-0 bottom-0 right-0 p-4 transition-colors hover:bg-[#3333]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.8}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
}
