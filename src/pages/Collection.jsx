import { useParams } from "react-router-dom"
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import { products } from "../mock"
import ItemList from "../components/ItemList";

export default function Collection() {
    const { collectionId } = useParams();
    const selectedCategory = products.filter(product => product.category === collectionId)
    return (
        <>
        <Header/>
        <main className="container mx-auto mb-7 px-7">
        <h2 className="my-7 text-[35px] text-center tracking-wider font-light first-letter:uppercase">
          {collectionId}
        </h2>
        </main>
        <ItemList category={selectedCategory}/>
        <Footer position={'fixed bottom-0'}/>
        </>
    )
}