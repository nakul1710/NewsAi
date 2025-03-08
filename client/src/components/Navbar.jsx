import React from 'react'
import {Link} from 'react-router-dom';
import {motion } from 'motion/react';
import {Button} from '@mantine/core';
import {X, Menu} from 'lucide-react';
function Navbar() {
  
  const [isOpen, setIsOpen] =useState(false);


  const handleClick = () => {
    setIsOpen(!isOpen)

  }
  return (
    <>
        <nav className='h-16'>

          <div className='flex items-center justify-between mx-auto '>
          
            <motion.h1
              intial= {{opacity:0,y:-10}}
              animate={{opoacity:1,y:0}}
              transition={{duration:0.5}}
              classname="text-2xl font-semibold"
            >
          NEWSAI</motion.h1>
          </div>

          <ul>
            {['Home','Categories', 'channels','About'].map((item)=>(
            <motion.li 
            whileHover={{scale: 1.1}}

            transition={{type:'spring', stiffness:100}}

            key={item}
             ><Link to={`/${item.toLowerCase}`}>{item}</Link></motion.li>
               ))}
          </ul>


       <div className='md:flex space-x-4 item-center justify-center'>
        <link to='/Login' className='hidden md:block'>
        <Button variant="white" >Login</Button>
        </link>
          

        <link to='/register' className='hidden md:block'>
          {' '}
          <Button variant="white">Register</Button>
        </link>  
  
        <button onClick={handleClick} className="md:hidden">
          {isOpen ? <X/> : <Menu/>}
        </button>

        <Button variant="white">Register</Button>
       </div>

       </nav>
    </>
  )
}

export default Navbar
