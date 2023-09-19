import {motion} from 'framer-motion'

const Button = ({text, onClick}) => {
  return (
    <motion.section
        initial={{opacity: 0}}
        animate={{opacity:1, transition:{duration:1.5}}}
        whileTap={{scale:0.8}}
    >
        <button onClick={onClick} className='text-white border w-32 h-10 bg-gradient-to-r from-primarytwo to-primaryone'>{text}</button>
    </motion.section>
  )
}

export default Button;