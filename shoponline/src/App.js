import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Fade from "react-reveal/Fade";

function App() {
  return (
    <div className="App">
      <Fade top>
        <Header />
      </Fade>
      <Home />
      <Footer />
    </div>
  );
}

export default App;
