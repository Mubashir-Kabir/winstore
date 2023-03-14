import BestDeals from "./components/bestDeals/BestDeals";
import Carousel from "./components/carousel/Carousel";
import Categories from "./components/categories/Categories";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import NewArrival from "./components/newArrival/NewArrival";
import Subnavbar from "./components/subnav/Subnavbar";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar></Navbar>
        <Subnavbar></Subnavbar>
      </div>
      <div>
        <Carousel></Carousel>
      </div>
      <div className="my-2">
        <Categories></Categories>
      </div>
      <div className="container">
        <NewArrival></NewArrival>
      </div>
      <div>
        <BestDeals></BestDeals>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
