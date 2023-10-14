import Catagories from "./Components/Catagories";
import Nav from "./Components/Nav";
import Products from "./Components/Products";
import Slider from "./Components/Slider";
import Footer from "./Components/FooterComp";
import ScrollToTop from "./Components/ScrollToTop";
import { Route, Routes } from "react-router-dom";
import Cart from "./Components/Cart";
import SearchProducts from "./Components/SearchProducts";
import AddToCartAlert from "./Components/AddToCartAlert";
import ProductPage from "./Components/ProductPage";
import TopOfPageScroll from "./Components/TopOfPageScroll";

function App() {
  return (
    <>
      <TopOfPageScroll />
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />
              <Catagories />
              <Products />
              <ScrollToTop />
            </>
          }
        ></Route>
        <Route
          path="/search"
          element={
            <>
              <Slider />
              <Catagories />
              <SearchProducts />
              <ScrollToTop />
            </>
          }
        ></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="product/:id" element={<ProductPage />}></Route>
      </Routes>
      <AddToCartAlert />
      <Footer />
    </>
  );
}

export default App;
