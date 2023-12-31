import line from '../images/line.png'
import man from '../images/man.png'
import bubble from '../images/bubble.png'
import chain from '../images/chain.png'
import fire from '../images/fire.png'
import bulb from '../images/bulb.png'
import Button2 from './Button2'
import Timer from './Timer'
import Star2 from './stars/Star2'
import Blur from './purpleblur/Blur'
import Star from './stars/Star'

const Hero = () => {
  return (
    <section className="relative w-full">
        <Blur className='absolute z-[-2] -top-5 left-20' />

        <div className='text-center sm:text-right text-xl sm:text-3xl mt-4'>
            <h1 className='text-white relative lg:right-24'>Igniting a Revolution in HR Innovation</h1>
            <img className='absolute right-24 md:right-0 lg:right-24 w-[120px] sm:w-[190px]' src={line} alt="/" />
        </div>

        <div>
            <Star className='absolute w-4 md:w-10 left-40 top-12 md:left-[200px] md:top-14 text-gray-500' />

            <Star2 className='absolute w-4 md:w-10 left-[370px] top-16 md:left-[650px] md:top-24 text-gray-500' />

            <Star2 className='absolute w-4 md:w-10 left-[370px] top-[280px] md:left-[550px] md:top-[380px] text-gray-500' />
        </div>

        

        <div className='sm:absolute lg:left-[150px] text-white text-center sm:text-left mt-9 sm:mt-14 max-w-[370px] sm:max-w-[500px] mx-auto'>
            <img className='relative top-3 left-[270px] lg:left-[350px] w-[30px] md:w-[40px]' src={bulb} alt='/' />
            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold'>
                getlinked Tech
            </h1>
            <h1 className='flex w-full text-4xl sm:text-5xl lg:text-6xl font-bold items-center space-x-1 justify-center sm:justify-start'>
                Hackathon <span className='text-purple'>1.0</span>
                <span>
                <img className='w-[50px] sm:w-[30] lg:w-[400px]' src={chain} alt='/' /></span>
                <span className='w-[50px] sm:w-[30] lg:w-[300px]'>
                <img src={fire} alt='/' />
                </span>
            </h1>
            <p className='mt-4 sm:text-xl'>Participate in getlinked tech Hackathon 2023 stand 
            a chance to win a Big prize</p>
            <div className='mt-4'>
                <Button2 text='Register' />
            </div>
            <Timer />
        </div>
        
        <div className='relative mt-9 sm:mt-12'>
            <img className='absolute left-10 md:left-[350px] lg:left-[690px] w-[410px] h-[410px] lg:w-[550px] lg:h-[550px]' src={bubble} alt='/' loading="eager" />
            <img className='absolute z-[-2] right-0 lg:w-[700px] h-[550px]' src={man} alt='/' loading="eager" />
        </div>
    </section>
  )
}

export default Hero;