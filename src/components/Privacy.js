import privacy from '../images/privacy.png'
import security from '../images/security.png'
import starpu from '../images/starpu.png'
import star2 from '../images/star-2.png'

const Privacy = () => {
  return (
    <div className="grid md:grid-cols-12 space-y-4 md:space-y-0 mt-20 mb-[670px] md:mb-20">
      <div className='relative col-span-6 flex flex-col justify-center space-y-3 lg:max-w-[450px]'>
        <img className='absolute top-12 right-4 md:top-32 lg:top-40 md:right-10' src={starpu} alt='/' width={25} />
        <h1 className='text-4xl font-bold'>Privacy Policy and</h1>
        <h1 className='text-4xl text-purple font-bold'>Terms</h1>
        <p className='text-sm'>Last updated on September 12, 2023</p>
        <p className='text-sm'>Below are our privacy & policy, which outline a lot of goodies. It's our aim to always take of our participant.</p>

        <div className='border border-purple bg-black/20 rounded-2xl p-12 md:p-14 lg:p-16 space-y-4'>
            <p className='text-center'>At getlinked tech Hackathon 1.0, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you participate in our tech hackathon event. By participating in our event, you consent 
            to the practices described in this policy.</p>
            <h3 className='text-purple text-xl'>Licensing Policy</h3>
            <p>Here are terms of our Standard License:</p>
            <ul className='list-disc list-inside'>
                <li>The Standard License grants you a non-exclusive right to navigate and register for our event</li>
                <li>You are licensed to use the item available at any free source sites, for your project developement</li>
            </ul>
        </div>
      </div>
      <div className='relative col-span-6 w-full'>
        <img className='absolute top-12 right-4 md:top-32 lg:top-40 md:right-10' src={star2} alt='/' width={25} />
        <img className='absolute top-12 left-5 md:top-32 lg:top-40 md:right-[300px]' src={star2} alt='/' width={25} />
        <img className='absolute' src={security} alt='/' />
        <img className='absolute top-28' src={privacy} alt='/' />
      </div>
    </div>
  )
}

export default Privacy;