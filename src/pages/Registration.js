import { useSelector, useDispatch } from 'react-redux';
import {
  updateFormData,
  toggleAgreement,
  setSubmissionStatus,
  resetForm,
  fetchCategories
} from '../components/stores/RegistrationSlice';
import Transition from '../components/Transition';
import Button3 from '../components/Button3';
import designer from '../images/graphic-designer.png'
import { useEffect } from 'react';

const baseUrl = 'https://backend.getlinked.ai';

function Registration() {
    const formData = useSelector((state) => state.registration.formData);
    const policy = useSelector((state) => state.registration.policy);
    const submissionStatus = useSelector((state) => state.registration.submissionStatus);
    const categories = useSelector((state) => state.registration.categories);
  
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
        const response = await fetch(`${baseUrl}/hackathon/registration-form`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          console.log('Registration data submitted successfully.');
          dispatch(setSubmissionStatus('Submitted'));
          dispatch(resetForm());
  
          setTimeout(() => {
            dispatch(setSubmissionStatus(null));
          }, 3000);
        } else {
          console.error('Registration data submission failed.');
          dispatch(setSubmissionStatus('Submission Failed'));
        }
      } catch (error) {
        console.error('An error occurred while submitting the registration data:', error);
        dispatch(setSubmissionStatus('Submission Error'));
      }
    };
  

  return (
    <section className='w-full h-full my-20 max-w-[400px] sm:max-w-[600px] md:max-w-[1100px] m-auto md:px-3'>
      <Transition />
      <div className='grid md:grid-cols-12'>

        <div className='col-span-5 space-y-4'>
            <h2 className='md:hidden text-purple text-center text-2xl font-semibold'>Registration Form</h2>
            <img className='mx-auto h-[300px] md:h-[500px]' src={designer} alt='/' />
        </div>

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
                        Select a category
                    </option>
                    {categories.map((category) => (
                        <option key={category.id} value={category}>
                        {category}
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
            {submissionStatus === 'Submitted' && (
              <p className="text-green-500 text-center mt-2">Submitted</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Registration;







// <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2">
//                 I agree to the Event Terms and Conditions
//               </label>
//               <input
//                 type="checkbox"
//                 id="agreedToTerms"
//                 name="agreedToTerms"
//                 checked={agreedToTerms}
//                 onChange={handleTermsCheckboxChange}
//                 className="mr-2"
//               />
//               <span className="text-gray-600">I agree</span>
//             </div>









// import React, { useState } from 'react';
// import Transition from '../components/Transition';
// import Button2 from '../components/Button2';

// const baseUrl = 'https://backend.getlinked.ai';

// function Registration() {
//   const [formData, setFormData] = useState({
//     team_name: '',
//     phone_number: '',
//     email: '',
//     project_topic: '',
//     category: '',
//     group_size: '',
//   });

//   const [submissionStatus, setSubmissionStatus] = useState(null); // Initially, no submission

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch(`${baseUrl}/hackathon/registration-form`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         console.log('Registration data submitted successfully.');
//         setSubmissionStatus('Submitted'); // Update submission status
//         setFormData({
//           team_name: '',
//           phone_number: '',
//           email: '',
//           project_topic: '',
//           category: '',
//           group_size: '',
//         });

//         setTimeout(() => {
//           setSubmissionStatus(null);
//         }, 3000);
//       } else {
//         console.error('Registration data submission failed.');
//         setSubmissionStatus('Submission Failed'); // Update submission status
//       }
//     } catch (error) {
//       console.error('An error occurred while submitting the registration data:', error);
//       setSubmissionStatus('Submission Error'); // Update submission status
//     }
//   };

//   return (
//     <section className='w-full h-full my-20 max-w-[400px] sm:max-w-[600px] md:max-w-[1100px] m-auto md:px-3'>
//       <Transition />
//       <div className='grid md:grid-cols-12'>
//         {/* ... (Existing code for contact information and social media icons) */}
//         <div className='w-full h-full col-span-6 border-2 border-primaryone bg-black/20 rounded-xl border-solid p-10 md:p-20 space-y-3'>
//           <h2 className='text-purple text-2xl font-semibold'>Registration Form</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label htmlFor="team_name" className="block text-gray-700 text-sm font-bold mb-2">
//                 Team Name
//               </label>
//               <input
//                 type="text"
//                 id="team_name"
//                 name="team_name"
//                 value={formData.team_name}
//                 onChange={handleChange}
//                 placeholder="Team Name"
//                 className="w-full px-3 py-2 border rounded-lg border-gray-300 focus:outline-none focus:border-indigo-500 bg-dark text-white"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="phone_number" className="block text-gray-700 text-sm font-bold mb-2">
//                 Phone Number
//               </label>
//               <input
//                 type="tel"
//                 id="phone_number"
//                 name="phone_number"
//                 value={formData.phone_number}
//                 onChange={handleChange}
//                 placeholder="Phone Number"
//                 className="w-full px-3 py-2 border rounded-lg border-gray-300 focus:outline-none focus:border-indigo-500 bg-dark text-white"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Email Address"
//                 className="w-full px-3 py-2 border rounded-lg border-gray-300 focus:outline-none focus:border-indigo-500 bg-dark text-white"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="project_topic" className="block text-gray-700 text-sm font-bold mb-2">
//                 Project Topic
//               </label>
//               <input
//                 type="text"
//                 id="project_topic"
//                 name="project_topic"
//                 value={formData.project_topic}
//                 onChange={handleChange}
//                 placeholder="Project Topic"
//                 className="w-full px-3 py-2 border rounded-lg border-gray-300 focus:outline-none focus:border-indigo-500 bg-dark text-white"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="category" className="block text-gray-700 text-sm font-bold mb-2">
//                 Category
//               </label>
//               <input
//                 type="text"
//                 id="category"
//                 name="category"
//                 value={formData.category}
//                 onChange={handleChange}
//                 placeholder="Category"
//                 className="w-full px-3 py-2 border rounded-lg border-gray-300 focus:outline-none focus:border-indigo-500 bg-dark text-white"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="group_size" className="block text-gray-700 text-sm font-bold mb-2">
//                 Group Size
//               </label>
//               <input
//                 type="number"
//                 id="group_size"
//                 name="group_size"
//                 value={formData.group_size}
//                 onChange={handleChange}
//                 placeholder="Group Size"
//                 className="w-full px-3 py-2 border rounded-lg border-gray-300 focus:outline-none focus:border-indigo-500 bg-dark text-white"
//                 required
//               />
//             </div>
//             <div className="text-center">
//               <Button2 text='Register Now' />
//             </div>
//             {submissionStatus === 'Submitted' && (
//               <p className="text-green-500 text-center mt-2">Submitted</p>
//             )}
//           </form>
//           {/* ... (Existing code for social media icons and background images) */}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Registration;
















// import React, { useState, useEffect } from 'react';
// import Transition from '../components/Transition';
// import Button2 from '../components/Button2';

// const baseUrl = 'https://backend.getlinked.ai';

// function Registration() {
//   const [formData, setFormData] = useState({
//     team_name: '',
//     phone_number: '',
//     email: '',
//     project_topic: '',
//     category: '', // Updated to store the selected category
//     group_size: '',
//   });

//   const [categories, setCategories] = useState([]); // State variable for categories

//   const [submissionStatus, setSubmissionStatus] = useState(null);

//   useEffect(() => {
//     // Fetch categories list when the component mounts
//     const fetchCategories = async () => {
//       try {
//         const response = await fetch(`${baseUrl}/hackathon/categories-list`);
//         if (response.ok) {
//           const data = await response.json();
//           setCategories(data.categories); // Assuming the response contains a 'categories' array
//         } else {
//           console.error('Failed to fetch categories.');
//         }
//       } catch (error) {
//         console.error('An error occurred while fetching categories:', error);
//       }
//     };

//     fetchCategories();
//   }, []); // Empty dependency array ensures the fetch occurs once on mount

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // Handle form submission here, e.g., sending data to the server
//     try {
//       const response = await fetch(`${baseUrl}/hackathon/registration-form`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         console.log('Registration data submitted successfully.');
//         setSubmissionStatus('Submitted'); // Update submission status
//         setFormData({
//           team_name: '',
//           phone_number: '',
//           email: '',
//           project_topic: '',
//           category: '',
//           group_size: '',
//         });

//         setTimeout(() => {
//           setSubmissionStatus(null);
//         }, 3000);
//       } else {
//         console.error('Registration data submission failed.');
//         setSubmissionStatus('Submission Failed'); // Update submission status
//       }
//     } catch (error) {
//       console.error('An error occurred while submitting the registration data:', error);
//       setSubmissionStatus('Submission Error'); // Update submission status
//     }
//   };

//   return (
//     <section className='w-full h-full my-20 max-w-[400px] sm:max-w-[600px] md:max-w-[1100px] m-auto md:px-3'>
//       <Transition />
//       <div className='grid md:grid-cols-12'>
//         {/* ... (Existing code for contact information and social media icons) */}
//         <div className='w-full h-full col-span-6 border-2 border-primaryone bg-black/20 rounded-xl border-solid p-10 md:p-20 space-y-3'>
//           <h2 className='text-purple text-2xl font-semibold'>Registration Form</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label htmlFor="team_name" className="block text-gray-700 text-sm font-bold mb-2">
//                 Team Name
//               </label>
//               <input
//                 type="text"
//                 id="team_name"
//                 name="team_name"
//                 value={formData.team_name}
//                 onChange={handleChange}
//                 placeholder="Team Name"
//                 className="w-full px-3 py-2 border rounded-lg border-gray-300 focus:outline-none focus:border-indigo-500 bg-dark text-white"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="phone_number" className="block text-gray-700 text-sm font-bold mb-2">
//                 Phone Number
//               </label>
//               <input
//                 type="tel"
//                 id="phone_number"
//                 name="phone_number"
//                 value={formData.phone_number}
//                 onChange={handleChange}
//                 placeholder="Phone Number"
//                 className="w-full px-3 py-2 border rounded-lg border-gray-300 focus:outline-none focus:border-indigo-500 bg-dark text-white"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Email Address"
//                 className="w-full px-3 py-2 border rounded-lg border-gray-300 focus:outline-none focus:border-indigo-500 bg-dark text-white"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="project_topic" className="block text-gray-700 text-sm font-bold mb-2">
//                 Project Topic
//               </label>
//               <input
//                 type="text"
//                 id="project_topic"
//                 name="project_topic"
//                 value={formData.project_topic}
//                 onChange={handleChange}
//                 placeholder="Project Topic"
//                 className="w-full px-3 py-2 border rounded-lg border-gray-300 focus:outline-none focus:border-indigo-500 bg-dark text-white"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="category" className="block text-gray-700 text-sm font-bold mb-2">
//                 Category
//               </label>
//               <select
//                 id="category"
//                 name="category"
//                 value={formData.category}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border rounded-lg border-gray-300 focus:outline-none focus:border-indigo-500 bg-dark text-white"
//                 required
//               >
//                 <option value="">Select a category</option>
//                 {categories.map((cat) => (
//                   <option key={cat.id} value={cat.name}>
//                     {cat.name}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <div className="mb-4">
//               <label htmlFor="group_size" className="block text-gray-700 text-sm font-bold mb-2">
//                 Group Size
//               </label>
//               <input
//                 type="number"
//                 id="group_size"
//                 name="group_size"
//                 value={formData.group_size}
//                 onChange={handleChange}
//                 placeholder="Group Size"
//                 className="w-full px-3 py-2 border rounded-lg border-gray-300 focus:outline-none focus:border-indigo-500 bg-dark text-white"
//                 required
//               />
//             </div>
//             <div className="text-center">
//               <Button2 text='Submit' />
//             </div>
//             {submissionStatus === 'Submitted' && (
//               <p className="text-green-500 text-center mt-2">Submitted</p>
//             )}
//           </form>
//           {/* ... (Existing code for social media icons and background images) */}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Registration;
