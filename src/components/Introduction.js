import idea from '../images/big-idea.png'
import starpu from '../images/starpu.png'
import woman from '../images/woman.png'
import star3 from '../images/star-3.png'
import arrow from '../images/arrow.png'
import innovative from '../images/innovative.png'
import Button2 from './Button2'

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


      <div className="grid md:grid-cols-12 space-y-4 md:space-y-0">
        <div className='relative col-span-6 flex order-2 md:order-1 flex-col justify-center space-y-3'>
          <img className='absolute top-12 right-4 md:top-40 md:right-10' src={starpu} alt='/' width={25} />
          <h1 className='text-4xl font-bold'>Rules and</h1>
          <h1 className='text-4xl text-purple font-bold'>Guidlines</h1>
          <p className='text-lg'>Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!</p>
        </div>
        <div className='col-span-6 w-full order-1 md:order-2'>
          <img src={woman} alt='/' />
        </div>
      </div>

      <div className="grid md:grid-cols-12 space-y-4 md:space-y-0 mt-3">
        <div className='relative col-span-6 w-full'>
          <img src={innovative} alt='/' />
          <img className='absolute top-3' src={star3} alt='/' />
        </div>
        <div className='relative col-span-6 flex flex-col justify-center space-y-3'>
          <img className='absolute top-12 right-4 md:top-40 md:right-10' src={starpu} alt='/' width={25} />
          <h1 className='text-4xl font-bold'>Judging Criteria</h1>
          <h1 className='text-4xl text-purple font-bold'>Key Attributes</h1>
          <p className=''><span className='text-primarytwo'>Innovation and Creativity:</span> Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.</p>
          <p className=''><span className='text-primarytwo'>Functionality:</span> Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.</p>
          <p className=''><span className='text-primarytwo'>Impact and Relevance:</span> Determine the potential impact of the solution 
          in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.</p>
          <p className=''><span className='text-primarytwo'>Technical Complexity:</span> Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.</p>
          <p className=''><span className='text-primarytwo'>Adherence to Hackathon Rules:</span> Judges will Ensure that the team adhered 
          to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.</p>
          <Button2 text='Read More' />
        </div>
      </div>
    </section>
  )
}

export default Introduction;