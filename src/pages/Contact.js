import question from '../images/question.png'
import star3 from '../images/star-3.png'
import starpu from '../images/starpu.png'
import mark from '../images/mark.png'
import mark2 from '../images/mark2.png'
import Transition from '../components/Transition';
import {RiTwitterXFill} from 'react-icons/ri'
import {AiOutlineInstagram} from 'react-icons/ai'
import {BiLogoLinkedin} from 'react-icons/bi'
import {FaFacebookF} from 'react-icons/fa'
import { useState } from 'react'
import Button2 from '../components/Button2'
import blur3 from '../images/blur3.png'
import blur4 from '../images/blur4.png'

function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your form submission logic here
    console.log(formData);
  };


    return (
      <section className='w-full h-full my-20 max-w-[400px] sm:max-w-[600px] md:max-w-[1100px] m-auto'>
        <Transition />
        <div className='grid md:grid-cols-12'>        
          <div className='hidden md:grid col-span-6 text-white space-y-4 max-h-[400px]'>
            <div className='space-y-3'>
              <h1 className='text-3xl text-purple font-bold'>Get in touch</h1>
              <p>Contact <br />Information</p>
              <p>27, Alara Street <br />Yaba 100012 <br />Lagos State</p>
              <p>Call Us: 07067981819</p>
              <p>We are open from Monday-Friday <br />08:00am - 05:00pm</p>
            </div>
            <div className='space-y-2'>
              <p className="text-purple">Share on</p>
              <div className="flex space-x-3">
                <AiOutlineInstagram size={20} />
                <RiTwitterXFill size={20} />
                <FaFacebookF size={20} />
                <BiLogoLinkedin size={20} />
              </div>
            </div>
          </div>

          <img className='absolute z-[-2] -left-14 -top-16 md:-left-32 lg:left-5 md:-top-20' src={blur3} alt='/' />

          <img className='absolute z-[-2] left-[69px] top-38 md:left-[454px] lg:left-[956px] md:top-20' src={blur4} alt='/' />


          <div className='w-full h-full col-span-6 border-2 border-primaryone bg-black/20 rounded-xl border-solid p-10 md:p-20 space-y-3'>
            <h2 className='text-purple text-2xl font-semibold'>Questions or need assistance? Let us know  about it!</h2>
            <p className='md:hidden text-white mt-2'>Email us below to any question related to our event</p>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-3 py-2 border rounded-lg border-gray-300 focus:outline-none focus:border-indigo-500 bg-dark"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full px-3 py-2 border rounded-lg border-gray-300 focus:outline-none focus:border-indigo-500 bg-dark"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="4"
                  className="w-full px-3 py-2 border rounded-lg border-gray-300 focus:outline-none focus:border-indigo-500 bg-dark"
                  required
                />
              </div>
              <div className="text-center">
                <Button2 text='Submit' />
              </div>

              <div className='md:hidden space-y-2 text-center text-white mt-10'>
                <p className="text-purple">Share on</p>
                <div className="flex justify-center space-x-3">
                  <AiOutlineInstagram size={20} />
                  <RiTwitterXFill size={20} />
                  <FaFacebookF size={20} />
                  <BiLogoLinkedin size={20} />
                </div>
              </div>
            </form>
            
          </div>
        </div>
      </section>
    )
}

export default Contact;

<div className=" w-full h-full  mt-28 items-center ">
<Transition />

<div className='relative col-span-6 w-full'>
            <img className='w-full h-full' src={question} alt='/' />
            <img className='absolute -top-14 right-56 md:right-64 w-10 h-15' src={mark} alt='/' />
            <img className='absolute -top-8 right-[300px] md:right-[340px] w-8 h-12' src={mark2} alt='/' />
            <img className='absolute -top-8 right-[150px] md:right-[170px] w-8 h-12' src={mark2} alt='/' />
            <img className='absolute top-3' src={star3} alt='/' />
          </div>


</div>