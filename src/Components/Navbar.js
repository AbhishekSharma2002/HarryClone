import React from 'react'
const Home = new URL("./Home-icon.png", import.meta.url)
const search = new URL("./Search-icon.png", import.meta.url)
export default function index() {
  return (
    <>
      <div className='sticky top-0 bg-white z-10'>
        <div className='flex mt-6 justify-between text-justify '>
          <p className='text-purple-700 font-bold pl-6 text-2xl'>CodeWithHarry</p>
          <div className='flex space-x-4 mr-4 '>

            <p className='hover:cursor-pointer hover:border-b-2 hover:border-purple-700'>Home</p>
            <p className='hover:cursor-pointer hover:border-b-2 hover:border-purple-700'>Courses</p>
            <p className='hover:cursor-pointer hover:border-b-2 hover:border-purple-700'>Tutorial</p>
            <p className='hover:cursor-pointer hover:border-b-2 hover:border-purple-700'>Blogs</p>
            <p className='hover:cursor-pointer hover:border-b-2 hover:border-purple-700'>Notes</p>
            <p className='hover:cursor-pointer hover:border-b-2 hover:border-purple-700'>Contact</p>
            <p className='hover:cursor-pointer hover:border-b-2 hover:border-purple-700'>My Gear</p>
            <p className='hover:cursor-pointer hover:border-b-2 hover:border-purple-700'>Work with us</p>
            {/* <img>icon</img> */}
            <button class="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center mx-1">Login</button>
          </div>
        </div>
        <hr className='mt-4'></hr>
        {/* Navbar second */}
        <div className='flex justify-between text-justify mt-5 shadow-lg h-10'>
          <div className='h-6 w-6 ml-8'><img src={Home} alt=''></img></div>
          <div className='inline-flex space-x-5 text-purple-700 font-bold '>
            <div className='hover:cursor-pointer hover:border-b-2 hover:border-purple-700'>HTML</div>
            <div className='hover:cursor-pointer hover:border-b-2 hover:border-purple-700'>CSS</div>
            <div className='hover:cursor-pointer hover:border-b-2 hover:border-purple-700'>JS</div>
            <div className='hover:cursor-pointer hover:border-b-2 hover:border-purple-700'>C++</div>
            <div className='hover:cursor-pointer hover:border-b-2 hover:border-purple-700'>JAVA</div>
            <div className='hover:cursor-pointer hover:border-b-2 hover:border-purple-700'>PYTHON</div>
            <div className='hover:cursor-pointer hover:border-b-2 hover:border-purple-700'>PHP</div>
          </div>
          <div>
            <img className='w-6 h-6 mr-8' src={search} alt=''></img>
          </div>
        </div>
      </div>
    </>
  )
}
