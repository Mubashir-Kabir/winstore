import { useState } from "react";
import BestDeals from "./components/bestDeals/BestDeals";
import Carousel from "./components/carousel/Carousel";
import Categories from "./components/categories/Categories";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import NewArrival from "./components/newArrival/NewArrival";
import Subnavbar from "./components/subnav/Subnavbar";

function App() {
  const [cart, setCart] = useState(0);
  return (
    <div className="App">
      <div>
        <Navbar cart={cart}></Navbar>
        <Subnavbar></Subnavbar>
      </div>
      <div>
        <Carousel></Carousel>
      </div>
      <div className="my-2">
        <Categories></Categories>
      </div>
      <div className="container">
        <NewArrival setCart={setCart} cart={cart}></NewArrival>
      </div>
      <div>
        <BestDeals setCart={setCart} cart={cart}></BestDeals>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
