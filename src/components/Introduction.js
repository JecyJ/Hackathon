import idea from '../images/big-idea.png'
import starpu from '../images/starpu.png'
import blur3 from '../images/blur3.png'
import blur4 from '../images/blur4.png'
import star3 from '../images/star-3.png'
import arrow from '../images/arrow.png'
import Judge from './Judge'
import Rules from './Rules'
import FAQs from './FAQs'
import Partners from './Partners'


const Introduction = () => {
  return (
    <section className='w-full h-full mt-[650px] text-white max-w-[400px] sm:max-w-[600px] md:max-w-[1100px] m-auto'>

      <div className="grid md:grid-cols-12 space-y-4 md:space-y-0">
        <div className='relative col-span-6 w-full'>
          <img src={idea} alt='/' />
          <img className='absolute top-3' src={star3} alt='/' />
          <img className='absolute bottom-[1px] w-7 md:w-16 md:bottom-3 left-[150px] md:left-[450px]' src={arrow} alt='/' />
        </div>
        <div className='relative col-span-6 flex flex-col justify-center space-y-3'>
          <img className='absolute top-12 right-4 md:top-40 md:right-10' src={starpu} alt='/' width={25} />
          <h1 className='text-4xl font-bold'>Introduction to getlinked</h1>
          <h1 className='text-4xl text-purple font-bold'>Tech Hackathon 1.0</h1>
          <p className='text-lg'>Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!</p>
        </div>
      </div>

      
      
      <Rules /> 
      
      <img className='absolute z-[-2] -left-14 top-[1800px] md:-left-32 lg:left-5 md:top-[900px] lg:top-[1000px]' src={blur3} alt='/' />

      <img className='absolute z-[-2] left-[69px] top-[1950px] md:left-[428px] lg:left-[956px] md:top-[1000px]' src={blur4} alt='/' />

      <Judge />

      <img className='absolute z-[-2] -left-14 top-[3800px] md:-left-32 lg:left-5 md:top-[1800px] lg:top-[1900px]' src={blur3} alt='/' />

      <img className='absolute z-[-2] left-[69px] top-[3950px] md:left-[428px] lg:left-[956px] md:top-[2200px]' src={blur4} alt='/' />

      <FAQs />
      <Partners />
    </section>
  )
}

export default Introduction;