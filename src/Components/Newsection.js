import React from 'react'
const Back = new URL("./Back.avif", import.meta.url)

export default function Newsection() {
  return (
    <>
      <div className='flex mt-4'>
        <div className='p-20'>
          <div className='text-4xl'>Welcome to <b className='text-purple-700'>CodeWithHarry</b></div>
          <p>Confused on which course to take? I have got you covered. Browse courses and find out the best course for you. Its free! Code With Harry is my attempt to teach basics and those coding techniques to people in short time which took me ages to learn.</p>
          <button className='p-2 bg-slate-900  mt-4 text-white rounded-md' >Free Course</button>
          <button className='p-2 bg-slate-300 ml-4 mt-4 rounded-md'>Explore Blogs</button>
        </div>
        <div className='flex '>
          <div className=''><img className='rounded-tl-full' src={Back} alt=''></img></div>
        </div>
      </div>
      <p className='text-center text-4xl mt-3'>Recommended Courses</p>
    </>
  )
}
