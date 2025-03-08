import React from 'react';
import {motion} from 'motion/react';

function Login(){
    return(
    
        <div className='bg-gray-100 h-screen flex justify-center items-center'>

        <motion.div
         intial= {{opacity: 0, scale:0.9}}
         animate= {{opacity: 0,scale: 1}}
           transition={{duration: .5}}
           className='max-w-md bg-white rounded-xl p-4 shadow-md'>
             <h1>Welcome Back</h1>
             <form>
             
             </form>
           </motion.div>
        </div>
    }
)


export default Login