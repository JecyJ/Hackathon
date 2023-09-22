import {useState} from 'react'
import {AiOutlinePlus} from 'react-icons/ai';
import question from '../images/question.png'
import star3 from '../images/star-3.png'
import starpu from '../images/starpu.png'
import mark from '../images/mark.png'
import mark2 from '../images/mark2.png'

function FAQs() {
    const [arrow1, setArrow1] = useState()
    const [arrow2, setArrow2] = useState()
    const [arrow3, setArrow3] = useState()
    const [arrow4, setArrow4] = useState()
    const [arrow5, setArrow5] = useState()
    const [arrow6, setArrow6] = useState()
  
    function Arrow1() {
      return setArrow1(prevArrow1 => !prevArrow1)
    }
    function Arrow2() {
      return setArrow2(prevArrow2 => !prevArrow2)
    }
    function Arrow3() {
      return setArrow3(prevArrow3 => !prevArrow3)
    }
    function Arrow4() {
      return setArrow4(prevArrow4 => !prevArrow4)
    }
    function Arrow5() {
      return setArrow5(prevArrow4 => !prevArrow4)
    }
    function Arrow6() {
      return setArrow6(prevArrow4 => !prevArrow4)
    }


    return (
      <div className="grid md:grid-cols-12 space-y-20 md:space-y-0 mt-28 items-center">
        <div className='relative col-span-6 flex flex-col justify-center space-y-3 md:max-w-[500px]'>
          <img className='absolute top-12 right-4 md:top-40 md:right-10' src={starpu} alt='/' width={25} />
          <h1 className='text-4xl font-bold'>Frequently Ask</h1>
          <h1 className='text-4xl text-purple font-bold'>Questions</h1>
          <p className=''>We got answers to the questions that you might
          want to ask about getlinked Hackathon 1.0</p>
          <div className='pt-4'>
                <div onClick={Arrow1}>
                  <h3 className='flex items-center justify-between py-4 font-semibold border-t border-purple'>Can I work on a project I started before the hackathon? <AiOutlinePlus className='fill-purple' size={20} /></h3>
                  <p className={!arrow1 ? 'fixed hidden py-3 text-gray-700 ease-in-out duration-700': 'py-3 text-gray-700 ease-in-out duration-700'}>Very secure</p>
                </div>
                <div onClick={Arrow2}>
                  <h3 className='flex items-center justify-between py-4 font-semibold border-t border-purple'>What happens if I need help during the hackathon? <AiOutlinePlus className='fill-purple' size={20} /></h3>
                  <p className={!arrow2 ? 'fixed hidden py-3 text-gray-700 ease-in-out duration-700': 'py-3 text-gray-700 ease-in-out duration-700'}>Very secure</p>
                </div>
                <div onClick={Arrow3}>
                  <h3 className='flex items-center justify-between py-4 font-semibold border-t border-purple'>What happens if I don't have an idea for a project? <AiOutlinePlus className='fill-purple' size={20} /></h3>
                  <p className={!arrow3 ? 'fixed hidden py-3 text-gray-700 ease-in-out duration-700': 'py-3 text-gray-700 ease-in-out duration-700'}>Very secure</p>
                </div>
                <div onClick={Arrow4}>
                  <h3 className='flex items-center justify-between py-4 font-semibold border-t border-b border-purple'>Can I join a team or do I have to come with one? <AiOutlinePlus className='fill-purple' size={20} /></h3>
                  <p className={!arrow4 ? 'fixed hidden py-3 text-gray-700 ease-in-out duration-700': 'py-3 text-gray-700 ease-in-out duration-700'}>Very secure</p>
                </div> 
                <div onClick={Arrow5}>
                  <h3 className='flex items-center justify-between py-4 font-semibold border-t border-purple'>What happens after the hackathon ends <AiOutlinePlus className='fill-purple' size={20} /></h3>
                  <p className={!arrow5 ? 'fixed hidden py-3 text-gray-700 ease-in-out duration-700': 'py-3 text-gray-700 ease-in-out duration-700'}>Very secure</p>
                </div>
                <div onClick={Arrow6}>
                  <h3 className='flex items-center justify-between py-4 font-semibold border-t border-b border-purple'>Can I work on a project I started before the hackathon? <AiOutlinePlus className='fill-purple' size={20} /></h3>
                  <p className={!arrow6 ? 'fixed hidden py-3 text-gray-700 ease-in-out duration-700': 'py-3 text-gray-700 ease-in-out duration-700'}>Very secure</p>
                </div>           
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
    )
}

export default FAQs;