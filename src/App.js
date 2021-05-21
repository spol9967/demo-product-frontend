
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Banner />
        <Content />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
