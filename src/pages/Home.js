import Hero from "../components/Hero";
import Introduction from "../components/Introduction";
import Transition from "../components/Transition";


const Home = () => {
  return (
    <section>
      <Transition />
      <Hero />
      <Introduction />     
    </section>
  )
}

export default Home;