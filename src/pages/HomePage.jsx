import ImageSlider from "../layouts/ImageSlider";
import ItemList from "../components/ItemList";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import { products } from "../mock"
import ImageCard from "../layouts/ImageCard";
import Featured from "../layouts/Featured";

export default function HomePage() {

    return (
      <>
      <Header/>
      <ImageSlider/>
      <ItemList products={products}/>
      <ImageCard/>
      <Featured/>
      <Footer/>
      </>
    )
  }