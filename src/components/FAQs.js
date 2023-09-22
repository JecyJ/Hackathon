import { useDispatch, useSelector } from 'react-redux';
import { toggleFaqVisibility } from '../components/stores/FaqSlice';
import { AiOutlinePlus } from 'react-icons/ai';
import question from '../images/question.png';
import star3 from '../images/star-3.png';
import starpu from '../images/starpu.png';
import mark from '../images/mark.png';
import mark2 from '../images/mark2.png';

function FAQs() {
  const dispatch = useDispatch();
  const faqVisibility = useSelector((state) => state.faq.faqVisibility);

  const toggleArrow = (index) => {
    dispatch(toggleFaqVisibility({ index }));
  };

  const faqItems = [
    {
      question: "Can I work on a project I started before the hackathon?",
      answer: "Very secure",
    },
    {
      question: "What happens if I need help during the hackathon?",
      answer: "Very secure",
    },
    {
      question: "What happens if I don't have an idea for a project?",
      answer: "Very secure",
    },
    {
      question: "Can I join a team or do I have to come with one?",
      answer: "Very secure",
    },
    {
      question: "What happens after the hackathon ends?",
      answer: "Very secure",
    },
    {
      question: "Can I work on a project I started before the hackathon?",
      answer: "Very secure",
    },
  ];

  return (
    <div className="grid md:grid-cols-12 space-y-20 md:space-y-0 mt-28 items-center">
      <div className='relative col-span-6 flex flex-col justify-center space-y-3 md:max-w-[500px]'>
        <img className='absolute top-12 right-4 md:top-40 md:right-10' src={starpu} alt='/' width={25} />
        <h1 className='text-4xl font-bold'>Frequently Ask</h1>
        <h1 className='text-4xl text-purple font-bold'>Questions</h1>
        <p className=''>We got answers to the questions that you might want to ask about getlinked Hackathon 1.0</p>
        <div className='pt-4'>
          {faqItems.map((item, index) => (
            <div key={index} onClick={() => toggleArrow(index)}>
              <h3 className='flex items-center justify-between py-4 font-semibold border-t border-purple'>
                {item.question} <AiOutlinePlus className={`fill-purple ${faqVisibility[index] ? 'rotate-45' : ''}`} size={20} />
              </h3>
              <p className={`py-3 text-gray-700 ease-in-out duration-700 ${faqVisibility[index] ? '' : 'hidden'}`}>
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className='relative col-span-6 w-full'>
        <img className='w-full h-full' src={question} alt='/' />
        <img className='absolute -top-14 right-56 md:right-64 w-10 h-15' src={mark} alt='/' />
        <img className='absolute -top-8 right-[300px] md:right-[340px] w-8 h-12' src={mark2} alt='/' />
        <img className='absolute -top-8 right-[150px] md:right-[170px] w-8 h-12' src={mark2} alt='/' />
        <img className='absolute top-3' src={star3} alt='/' />
      </div>
    </div>
  );
}

export default FAQs;