import featured1 from '../imgs/featured1.jpg'
import featured2 from '../imgs/featured2.jpg'
import featured3 from '../imgs/featured3.jpg'

export default function Featured() {
  return (
    <section>
      <div className="flex flex-col justify-center items-center gap-2">
        <h2 className="text-[42px] tracking-widest">
          Dunder Mifflin x Salah Yudin
        </h2>
        <p className="text-[20px] tracking-widest text-gray-600">
          Dunder Mifflin'in ikonik çalışmaları ve renkli görselleri Salah
          Yudin'in eğlenceli dünyasıyla buluştu.
        </p>
      </div>
      <div className="flex justify-center items-center gap-8 mt-16">
        <img src={featured1} alt="half naked man" className="object-cover w-[500px] h-[700px]"/>
        <img src={featured2} alt="men socks" className="object-cover w-[500px] h-[700px]"/>
        <img src={featured3} alt="sitting women" className="object-cover w-[500px] max-h-[700px]"/>
      </div>
    </section>
  );
}
