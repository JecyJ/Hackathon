import Button from "./Button";
// import {CgMenuRight} from 'react-icons/cg'
import MobileMenu from "./MobileMenu";
import {Link} from 'react-router-dom'


const Navbar = () => {
  return (
    <section className='w-full h-full p-4 border-b border-gray-700'>
      <div className='flex items-center justify-between max-w-[400px] sm:max-w-[600px] md:max-w-[1100px] m-auto'>
        <div>
          <Link to={'/'}>
            <h1 className='text-white text-3xl font-semibold'>get<span className='text-purple'>linked</span></h1>
          </Link>
        </div>     
        <div className='hidden sm:flex items-center text-lg justify-center space-x-10 text-white'>
          <h2>Timeline</h2>
          <h2>Overview</h2>
          <h2>FAQs</h2>
          <Link to={'/contact'}>
            <h2>Contact</h2>
          </Link>
          <div>
            <Link to={'/register'}>
              <Button text='Register' />
            </Link>
          </div>
        </div>
        <div  className="flex sm:hidden" >
        <MobileMenu />       
        </div>
      </div>
    </section>
  )
}

export default Navbar;