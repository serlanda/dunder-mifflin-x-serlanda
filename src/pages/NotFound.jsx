import Footer from "../layouts/Footer";
import Header from "../layouts/Header";

export default function NotFound() {
  return (
    <>
      <Header />
      <div className="bg-red-200 text-red-600 h-[20vh] flex items-center justify-center">
        Sayfa Bulunamadı!
      </div>
      <Footer position={'fixed bottom-0'}/>
    </>
  );
}
