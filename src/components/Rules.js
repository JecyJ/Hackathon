import woman from '../images/woman.png'
import starpu from '../images/starpu.png'

const Rules = () => {
  return (
    <div className="grid md:grid-cols-12 space-y-4 md:space-y-0 mt-8">
      <div className='relative col-span-6 flex order-2 md:order-1 flex-col justify-center space-y-3'>
        <img className='absolute top-12 right-4 md:top-32 lg:top-40 md:right-10' src={starpu} alt='/' width={25} />
        <h1 className='text-4xl font-bold'>Rules and</h1>
        <h1 className='text-4xl text-purple font-bold'>Guidlines</h1>
        <p className='text-lg'>Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!</p>
      </div>
      <div className='col-span-6 w-full order-1 md:order-2'>
        <img src={woman} alt='/' loading="eager" />
      </div>
    </div>
  )
}

export default Rules;