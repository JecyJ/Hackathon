import { Route, Routes } from "react-router-dom";
import Home from './Home'
import Contact from './Contact'
import Registration from "./Registration";


const Page = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/registeration" element={<Registration />} />
    </Routes>
  )
}

export default Page;