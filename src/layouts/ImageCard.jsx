export default function ImageCard() {
    return (
        <section className="flex justify-center items-center gap-4 my-7 text-[#fff]">
            <div className="w-[350px] h-[350px] bg-[#ffbe0b] flex flex-col justify-center items-center p-5">
                <h2 className="mb-[35px] tracking-widest text-[13px] font-bold">DUNDER MİFFLİN</h2>
                <p className="mb-auto text-[37px] text-center leading-[45px] tracking-wider">Sürdürülebilir üretimi ve tüketimi destekliyor.</p>
                <span className="text-[40px] mb-auto">🌎</span>
            </div>
            <div className="w-[350px] h-[350px] bg-[#ff006e] flex flex-col justify-center items-center p-5">
                <h2 className="mb-[35px] tracking-widest text-[13px] font-bold">GELECEĞİMİZİ KORUYALIM</h2>
                <p className="mb-auto text-[37px] text-center leading-[45px] tracking-wider">Tasarımlarımızla nesli tükenmekte olan hayvanlara ilgi çekiyoruz.</p>
                <span className="text-[40px] mb-auto">🐵</span>
            </div>
            <div className="w-[350px] h-[350px] bg-[#7856ff] flex flex-col justify-center items-center p-5">
                <h2 className="mb-[35px] tracking-widest text-[13px] font-bold">TÜM ALIŞVERİŞLERDE</h2>
                <p className="mb-auto text-[37px] text-center leading-[45px] tracking-wider">Kutularımızla hediyeleşmeyi eğlenceye dönüştürün.</p>
                <span className="text-[40px] mb-auto">🎁</span>
            </div>
        </section>
    )
}

// #ffbe0b
// #7856ff