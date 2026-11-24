import ChristmasList from './ChristmasList';
import About from "./About/About"
import Contact from "./Contact/Contact"
import Home from "./Home"
import ProductDetail from "./ProductDetail"
import Staff from "./Staff"
import Topic from "./Topic"
import WishList from "./WishList"
import NotFound from "./NotFound"
import { Routes, Route } from "react-router-dom"

const Main = () => {
  return <main>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/christmaslist" element={<ChristmasList />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/product/:id" element={<ProductDetail />}></Route>
      <Route path="/staff" element={<Staff />}></Route>
      <Route path="/topic" element={<Topic />}></Route>
      <Route path="/wishlist" element={<WishList />}></Route>
      <Route path="/*" element={<NotFound />}></Route>
    </Routes>


  </main>;
};

export default Main;
