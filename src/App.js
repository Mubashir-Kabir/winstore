import Carousel from "./components/carousel/Carousel";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
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
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
