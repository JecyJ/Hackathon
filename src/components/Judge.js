import innovative from '../images/innovative.png'
import Button2 from './Button2'
import star3 from '../images/star-3.png'
import starpu from '../images/starpu.png'

const Judge = () => {
  return (
    <div className="grid md:grid-cols-12 space-y-4 md:space-y-0 mt-8 items-center">
        <div className='relative col-span-6 w-full'>
          <img className='w-full h-full' src={innovative} alt='/' />
          <img className='absolute top-3' src={star3} alt='/' />
        </div>
        <div className='relative col-span-6 flex flex-col justify-center space-y-3 md:max-w-[500px]'>
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
  )
}

export default Judge;