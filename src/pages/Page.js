import { Route, Routes } from "react-router-dom";
import Home from './Home'
import Contact from './Contact'
import Register from './Register'


const Page = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export default Page;