import Image from 'next/image'
import React from 'react'
import {water} from '../../assets'
const LoginForm = () => {
  return (
    <div className='flex justify-center items-center h-[100vh] w-full bg-slate-800'>
        
      
      <div className='bg-white shadow-lg w-96 h-72 rounded-md p-2'>
      <div className='flex justify-center items-center relative '>
      <Image className='w-40 h-40 rounded-full absolute' src={water}/>
      </div>
      <form className='flex flex-col justify-end items-center p-4 gap-4 w-full h-full'>
        
        <div className='w-full flex flex-col justify-center items-start'>
            <label > Correo:  </label>
            <input type="text" name="" id="" placeholder='Email' className='ring-1 ring-slate-400 rounded-md p-1 outline-none w-full' />
          </div>
          
          <div className='w-full flex flex-col justify-center items-start'>
            <label > Contraseña:  </label>
            <input type="text" name="" id="" placeholder='Email' className='ring-1 ring-slate-400 rounded-md p-1 outline-none w-full' />
          </div>

          <div className=' w-full'>
          <button className='bg-slate-800 px-2 py-1 text-white rounded-md'>
          Login
        </button>
          </div>
  
        </form>

       
      </div>


    </div>
  )
}

export default LoginForm