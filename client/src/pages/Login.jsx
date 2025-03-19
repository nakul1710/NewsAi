import React from 'react';
import {motion} from 'motion/react';

function Login(){
    return(
    <>
        <div className='bg-gray-100 h-screen flex justify-center items-center'>

        <motion.div
         intial= {{opacity: 0, scale:0.9}}
         animate= {{opacity: 0,scale: 1}}
           transition={{duration: .5}}
           className='max-w-md bg-white rounded-xl p-4 shadow-md'>
             <h1>Welcome Back</h1>
             <form>
                 <div className="flex gap-2">
                       <Mail className="text-grey-500" />
                       <input type='email' className='focus:outline-none border-b border-gray-200' placeholder='Enter Email ....'/>
                 </div>
             </form>
           </motion.div>
        </div>
    </>
       )
    }


export default Login