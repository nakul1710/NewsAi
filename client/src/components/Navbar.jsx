import React from 'react'
import {Link} from 'react-router-dom';
import {motion } from 'motion/react';
import {Button} from '@mantine/core';
import {X, Menu} from 'lucide-react';
function Navbar() {
  
  const [isOpen, setIsOpen] =useState(false);

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


      <div className='flex space-x-4 item-center justify-center'>
        <Button variant="white" >Login</Button>
        <Button className="Md:hidden"><X/></Button>
        <Button variant="white">Register</Button>
      </div>

       </nav>
    </>
  )
}

export default Navbar
