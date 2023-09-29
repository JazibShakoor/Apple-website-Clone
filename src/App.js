import "/node_modules/bootstrap/dist/js/bootstrap.bundle";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Header from "./UserInterface/Header/Header";
import Home from "./Components/Home/Home";
import PopWindow from "./Components/PopWindow/PopWindow";
import PopWindow1 from "./Components/PopWindow/PopWindow1";
import PopWindow2 from "./Components/PopWindow/PopWindow2";
import VerticalScrool from "./Components/VerticalScrool/VerticalScrool";
import VerticalScrool1 from "./Components/VerticalScrool/VerticalScrool1";
import Footer from "./UserInterface/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
      <PopWindow />
      <PopWindow1 />
      <PopWindow2 />
      <VerticalScrool />
      <VerticalScrool1 />
    </div>
  );
}

export default App;
