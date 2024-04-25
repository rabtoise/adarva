import React from 'react'

const UnderConstruction = () => {
  return (
     <div className='flex flex-col items-center justify-center w-[100%] h-[100vh] '>
       <div className='top-0 absolute bottom-0 left-0 right-0 -z-10 bg-gradient-under-development '></div>
        <div><img src="/logo.png" alt="logo..." className='w-[150px]' /></div>
         <div className='text-[30px] md:text-[40px] lg:text-[50px] font-bold  text-center text-white'>Under Development</div>
     </div>
  )
}

export default UnderConstruction