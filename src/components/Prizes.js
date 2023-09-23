import trophy from '../images/trophy.png'
import medals from '../images/medals.png'

const Prizes = () => {
  return (
    <section className='w-full h-full mt-20 space-y-4'>
        <div className='flex flex-col items-center md:items-end'>
            <div className='max-w-[400px]'>
                <h1 className='text-4xl font-bold'>Prizes and</h1>
                <h1 className='text-4xl text-purple font-bold'>Rewards</h1>
                <p className='text-center md:text-left'>Highlight of the prizes or rewards for winners and for participants.</p>
            </div>
            </div>
        <div className='grid md:grid-cols-12 space-y-14 md:space-y-[170px]'>
        <img className='col-span-6 w-[600px]' src={trophy} alt="/" loading="eager" />
        <img className='col-span-6 w-[600px]' src={medals} alt="/" loading="eager" />
        </div>
    </section>
  )
}

export default Prizes;