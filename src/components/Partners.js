import partners from '../images/partners.png'

const Partners = () => {
  return (
    <section className='w-full h-full mt-20 space-y-10'>
        <div className='text-center sm:max-w-[500px] mx-auto space-y-3'>
            <h1 className='text-3xl sm:text-4xl font-bold'>Partners and Sponsors</h1>
            <p className='text-lg'>Getlinked Hackathon 1.0 is honored to have the following major companies as its partners and sponsors</p>
        </div>
        <div className='md:max-w-[800px] mx-auto'>
            <img src={partners} alt="/" />
        </div>
    </section>
  )
}

export default Partners