// import Hero from "../components/Hero";
import Introduction from "../components/Introduction";
import Transition from "../components/Transition";


const Home = () => {
  return (
    <section className='max-w-[400px] sm:max-w-[600px] md:max-w-[1100px] m-auto'>
      <Transition />
      <Introduction />     
    </section>
  )
}

export default Home;
// <Hero />