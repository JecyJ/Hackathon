import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Page from "./pages/Page";
import Transition from "./components/Transition";
import { AnimatePresence } from "framer-motion";
// import Hero from "./components/Hero";




function App() {
  return (
    <div className="App">
    <AnimatePresence mode="wait">
      <BrowserRouter>
        <Transition />
        <Navbar />
        <Page />
      </BrowserRouter>
    </AnimatePresence>
    </div>
  );
}

export default App;
