import React from 'react'
import { Link } from 'react-router-dom'

const navbar = () => {
  return (
    <div className='flex justify-around h-[10vh] items-center'>
        <div className='font-extrabold text-2xl'>Navbar</div>
        <div className='flex justify-around items-center h-[50%] w-[30vw]  rounded-4xl shadow-xl'>
          <Link to={'/home'}><div>home</div></Link>
          <Link to={'/about'}><div>about</div></Link>
          <Link to={'/game'}><div>game</div></Link>
        </div>
        <div className='h-[50%]'>
          <button className='bg-black text-white items-center h-[100%] w-25 rounded-4xl'>Get started</button>
        </div>

    </div>
)
}

export default navbar