import star3 from '../images/star-3.png'
import star2 from '../images/star-2.png'
import Transition from '../components/Transition';
import {RiTwitterXFill} from 'react-icons/ri'
import {AiOutlineInstagram} from 'react-icons/ai'
import {BiLogoLinkedin} from 'react-icons/bi'
import {FaFacebookF} from 'react-icons/fa'
import Button2 from '../components/Button2'
import blur3 from '../images/blur3.png'
import blur4 from '../images/blur4.png'
import { useSelector, useDispatch } from 'react-redux';
import { setFormData, setSubmissionStatus } from '../components/stores/ContactSlice'; 


const baseUrl = 'https://backend.getlinked.ai';

function Contact() {
  const formData = useSelector((state) => state.contact.formData);
  const submissionStatus = useSelector((state) => state.contact.submissionStatus);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setFormData({ ...formData, [name]: value }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${baseUrl}/hackathon/contact-form`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form data submitted successfully.');
        setSubmissionStatus('Submitted');
        setFormData({
          first_name: '',
          email: '',
          message: '',
        });

        setTimeout(() => {
          setSubmissionStatus(null);
        }, 3000);
      } else {
        console.error('Form data submission failed.');
        setSubmissionStatus('Submission Failed');
      }
    } catch (error) {
      console.error('An error occurred while submitting the form data:', error);
      setSubmissionStatus('Submission Error');
    }
  };


    return (
      <section className='w-full h-full my-20 max-w-[400px] sm:max-w-[600px] md:max-w-[1100px] m-auto md:px-3'>
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
                  id="first_name"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="w-full px-3 py-2 border rounded-lg border-gray-300 focus:outline-none focus:border-indigo-500 bg-dark text-white"
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
                  className="w-full px-3 py-2 border rounded-lg border-gray-300 focus:outline-none focus:border-indigo-500 bg-dark text-white"
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
                  className="w-full px-3 py-2 border rounded-lg border-gray-300 focus:outline-none focus:border-indigo-500 bg-dark text-white"
                  required
                />
              </div>
              <div className="text-center">
                <Button2 text='Submit' />
              </div>

              {submissionStatus === 'Submitted' && (
                <p className="text-green-500 text-center mt-2">Submitted</p>
              )}

              <div className='md:hidden space-y-2 text-center text-white mt-10'>
                <p className="text-purple">Share on</p>
                <div className="flex justify-center space-x-3">
                  <AiOutlineInstagram size={20} />
                  <RiTwitterXFill size={20} />
                  <FaFacebookF size={20} />
                  <BiLogoLinkedin size={20} />
                </div>
              </div>
              <img className='absolute -bottom-[130px] left-20' src={star3} alt='/' />
              <img className='absolute -bottom-[200px] right-28' src={star2} alt='/' />
              <img className='absolute top-[150px] right-20' src={star3} alt='/' />
              <img className='absolute top-[100px] left-20' src={star2} alt='/' />
            </form>
            
          </div>
        </div>
      </section>
    )
}

export default Contact;