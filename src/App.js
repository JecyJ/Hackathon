import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Page from "./pages/Page";
import Transition from "./components/Transition";
import { AnimatePresence } from "framer-motion";
import Footer from "./components/Footer";




function App() {
  return (
    <div className="App">
    <AnimatePresence mode="wait">
      <BrowserRouter>
        <Transition />
        <Navbar />
        <Page />
        <Footer />
      </BrowserRouter>
    </AnimatePresence>
    </div>
  );
}

export default App;