import { useSelector, useDispatch } from 'react-redux';
import {
  updateFormData,
  toggleAgreement,
  resetForm,
  fetchCategories
} from '../components/stores/RegistrationSlice';
import Transition from '../components/Transition';
import Button3 from '../components/Button3';
import designer from '../images/graphic-designer.png'
import { useEffect, useState } from 'react';
import success from '../images/success.png'
import boy from '../images/happyboy.png'
import blur3 from '../images/blur3.png'
import blur4 from '../images/blur4.png'
import star3 from '../images/star-3.png'
import star2 from '../images/star-2.png'

const baseUrl = 'https://backend.getlinked.ai';

function Registration() {
    const formData = useSelector((state) => state.registration.formData);
    const policy = useSelector((state) => state.registration.policy);
    const categories = useSelector((state) => state.registration.categories);
    const [showSubmittedCard, setShowSubmittedCard] = useState(false);
  
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch(updateFormData({ fieldName: name, fieldValue: value }));
    };

    const handlePolicyCheckbox = () => {
        dispatch(toggleAgreement('policy'));
    };

    useEffect(() => {
        dispatch(fetchCategories());
      }, [dispatch]);



  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!policy) {
      console.error('Please agree to both Terms and Conditions and Privacy Policy.');
      return;
    }

    try {
        const response = await fetch(`${baseUrl}/hackathon/registration`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          console.log('Registration data submitted successfully.');
          dispatch(resetForm());

          setShowSubmittedCard(true);
        } else {
          console.error('Registration data submission failed.');
        }
      } catch (error) {
        console.error('An error occurred while submitting the registration data:', error);
      }
    };

    const handleGoBack = () => {
      setShowSubmittedCard(false);
    }
  

  return (
    <section className='w-full h-full my-20 max-w-[400px] sm:max-w-[600px] md:max-w-[1100px] m-auto md:px-3'>
      <Transition />
      <div className='grid md:grid-cols-12'>

        <div className='col-span-5 space-y-4'>
            <h2 className='md:hidden text-purple text-center text-2xl font-semibold'>Registration Form</h2>
            <img className='mx-auto h-[300px] md:h-[500px]' src={designer} alt='/' />
        </div>

        <img className='absolute z-[-2] -left-14 -top-16 md:-left-32 lg:left-5 md:-top-20' src={blur3} alt='/' />

          <img className='absolute z-[-2] left-[69px] top-38 md:left-[454px] lg:left-[956px] md:top-20' src={blur4} alt='/' />

        <div className='w-full h-full col-span-7 border-2 border-primaryone bg-black/20 rounded-xl border-solid p-10 md:p-20 space-y-3'>
          <h2 className='hidden md:block text-purple text-2xl font-semibold'>Registration Form</h2>
          <form onSubmit={handleSubmit}>
            <div className='flex justify-between space-x-3 md:space-x-6'>            
                <div className="mb-4">
                <label htmlFor="team_name" className="block text-gray-700 text-sm font-bold mb-2">
                    Team Name
                </label>
                <input
                    type="text"
                    id="team_name"
                    name="team_name"
                    value={formData.team_name}
                    onChange={handleChange}
                    placeholder="Team Name"
                    className="w-full px-3 py-2 border rounded-lg border-gray-300 focus:outline-none focus:border-indigo-500 bg-dark text-white"
                    required
                />
                </div>
                <div className="mb-4">
                <label htmlFor="phone_number" className="block text-gray-700 text-sm font-bold mb-2">
                    Phone Number
                </label>
                <input
                    type="tel"
                    id="phone_number"
                    name="phone_number"
                    value={formData.phone_number}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full px-3 py-2 border rounded-lg border-gray-300 focus:outline-none focus:border-indigo-500 bg-dark text-white"
                    required
                />
                </div>
            </div>
            <div className='flex justify-between space-x-3 md:space-x-6'>            
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
                    placeholder="Email Address"
                    className="w-full px-3 py-2 border rounded-lg border-gray-300 focus:outline-none focus:border-indigo-500 bg-dark text-white"
                    required
                />
                </div>
                <div className="mb-4">
                <label htmlFor="project_topic" className="block text-gray-700 text-sm font-bold mb-2">
                    Project Topic
                </label>
                <input
                    type="text"
                    id="project_topic"
                    name="project_topic"
                    value={formData.project_topic}
                    onChange={handleChange}
                    placeholder="Project Topic"
                    className="w-full px-3 py-2 border rounded-lg border-gray-300 focus:outline-none focus:border-indigo-500 bg-dark text-white"
                    required
                />
                </div>
            </div>
            <div className='flex justify-between space-x-3 md:space-x-6'>            
                <div className="mb-4">
                    <label htmlFor="category" className="block text-gray-700 text-sm font-bold mb-2">
                    Category
                    </label>
                    <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg border-gray-300 focus:outline-none focus:border-indigo-500 bg-dark text-white"
                    required
                    >
                    <option value="" disabled>
                        Category
                    </option>
                    {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                        {category.id}
                        </option>
                    ))}
                    </select>
                </div>
                <div className="mb-4">
                <label htmlFor="group_size" className="block text-gray-700 text-sm font-bold mb-2">
                    Group Size
                </label>
                <input
                    type="number"
                    id="group_size"
                    name="group_size"
                    value={formData.group_size}
                    onChange={handleChange}
                    placeholder="Group Size"
                    className="w-full px-3 py-2 border rounded-lg border-gray-300 focus:outline-none focus:border-indigo-500 bg-dark text-white"
                    required
                />
                </div>
            </div>

            <p className='text-sm italic text-purple'>Please review your registration details before submitting.</p>            

            <div className="my-4">
              <input
                type="checkbox"
                id="policy"
                name="policy"
                checked={policy}
                onChange={handlePolicyCheckbox}
                className="mr-2"
              />
              <span className="text-gray-600">I agreed with the event terms and conditions and Privacy Policy</span>
            </div>

            <div className="text-center w-full">
              <Button3 text='Register Now' />
            </div>

            <img className='absolute -bottom-[130px] left-20' src={star3} alt='/' />
              <img className='absolute -bottom-[200px] right-28' src={star2} alt='/' />
              <img className='absolute top-[150px] right-20' src={star3} alt='/' />
              <img className='absolute top-[100px] left-20' src={star2} alt='/' />
          </form>
        </div>
      </div>

      {showSubmittedCard && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="absolute w-full bg-dark p-4 md:p-10 rounded-lg border border-primaryone shadow-md max-w-[380px] md:max-w-[700px] m-auto">
            <div className='flex items-center justify-center'>
              <img className='relative right-6 md:right-12' src={success} alt='/' />
              <img className='absolute top-12 left-20 md:top-20 md:left-[250px]' src={boy} alt='/' />
            </div>
            <div className='space-y-3 mt-6 md:mt-12'>
              <h1 className='text-white text-2xl font-semibold text-center'>Congratulations <br /> you have successfully Registered!</h1>
              <p className="text-sm text-white text-center">Yes, it was easy and you did it! check your mail box for next step</p>
              <Button3 text='Back' onClick={handleGoBack} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Registration;