import { motion } from 'framer-motion';
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import {CgMenuRight} from 'react-icons/cg'
import Button2 from './Button2';
import { Link } from 'react-router-dom';

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleClose = () => {
        setIsOpen(false);
    };
    
  return (
    <section>
        <div>
        <motion.nav
            initial={isOpen ? 'circle' : 'rectangle'}
            animate={isOpen ? 'rectangle' : 'circle'}
            variants={{
            circle: { borderRadius: '50%', width: '50px', height: '50px', top: '10px', left: '420px' },
            rectangle: {
                borderRadius: '0',
                width: isOpen ? '100%' : '50px',
                height: isOpen ? '100%' : '50px',
                position: 'absolute',
                top: '0',
                left: '0',
            },
            }}
            transition={{ duration: 0.7 }}
            className={`bg-purple dark:bg-milk z-[2] relative flex items-center justify-center`}
        >
            {isOpen ? (
            <div>
                <AiOutlineClose
                onClick={handleToggle}
                className='text-white absolute top-7 left-[420px]'
                size={30}
                />
                <div className=' w-full h-full flex flex-col text-2xl justify-start text-white space-y-6'>
                    <h2>Timeline</h2>
                    <h2>Overview</h2>
                    <h2>FAQs</h2>
                    <Link to={'/contact'} onClick={handleClose}>
                        <h2>Contact</h2>
                    </Link>
                    <div>
                        <Link to={'/register'} onClick={handleClose}>
                            <Button2 text='Register' />
                        </Link>
                    </div>
                </div>
            </div>
            ) : (
            <CgMenuRight onClick={handleToggle} className='text-white' size={25} />
            )}
        </motion.nav>
        </div>
    </section>
  )
}

export default MobileMenu