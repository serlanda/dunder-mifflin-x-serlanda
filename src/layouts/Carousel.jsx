export default function Carousel() {
  // const rows = [];

  // for (let i = 0; i < 10; i++) {
  //   rows.push(
  //     <span className="mx-[150px] tracking-wider">
  //       İlk Siparişe Özel "DUNDER10" Kodu ile %10 İndirim! Şimdi Alışverişe
  //       Başla!
  //     </span>
  //   );
  // }

  return (
      <div className="overflow-hidden whitespace-nowrap bg-[#7856ff] text-[#fff] lg:py-[3.5px] text-lg tracking-wide border-b-[1.5px] border-black">
        <div className="inline-block animate-loop-scroll">
          {[...Array(10)].map(announcement => {
            return (
              <span className="mx-[150px] tracking-wider"> İlk Siparişe Özel "DUNDER10" Kodu ile %10 İndirim! Şimdi Alışverişe Başla! </span>
            )
          })}
          </div>
      </div>
  );
}
 