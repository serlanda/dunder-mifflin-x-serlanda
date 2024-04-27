import CollectionList from "../components/CollectionList";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";

export default function Collections() {
    return (
        <>
        <Header/>
        <CollectionList/>
        <Footer position={'2xl:sticky fixed bottom-0'}/>
        </>
    )
}