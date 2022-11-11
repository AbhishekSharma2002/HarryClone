import React from 'react'
const Tailwindcss = new URL("./Tailwindcss.webp", import.meta.url)
const Nextjs = new URL("./Next.webp", import.meta.url)
const Reactjss = new URL("./Reactjss.webp", import.meta.url)
const logo = new URL("./logo-blue.webp", import.meta.url)

export default function Newsection1() {
  return (
    <>
      <div className='flex justify-evenly mt-8 '>
        <div className='drop-shadow-md bg-white'>
          <img className='rounded-lg' src={Tailwindcss} alt=''></img>
          <div className='p-3'>
            <p className='text-slate-500'>Free Course</p>
            <p className='text-xl font-semibold'>Tailwind Course In Hindi</p>
            <p className='mt-3'>Complete Tailwind CSS Course by</p>
            <p>CodeWithHarry in Hindi - Learn Tailwind CSS</p>
            <p>from scratch for free!</p>
            <button className='bg-purple-800 hover:bg-purple-600 text-white text-sm rounded-2xl p-2 mt-16'>Start watching</button>
          </div>
        </div>
        <div className='drop-shadow-md bg-white'>
          <img className='rounded-lg' src={Nextjs} alt=''></img>
          <div className='p-3'>
            <p className='text-slate-500'>Free Course</p>
            <p className='text-xl font-semibold'>Next.js Tutorials For Beginners</p>
            <p className='mt-3'>Complete Next.js Course by CodeWithHarry in</p>
            <p>Hindi - Learn Next.js from Scratch.</p>
            <button className='bg-purple-800 text-white hover:bg-purple-600 text-sm rounded-2xl p-2 mt-24 '>Start watching</button>
          </div>
        </div>
        <div className='drop-shadow-md bg-white'>
          <img className='rounded-lg' src={Reactjss} alt=''></img>
          <div className='p-3'>
            <p className='text-slate-500'>Free Course</p>
            <p className='text-xl font-semibold'>React Js Tutorials For Beginners</p>
            <p className='w-80 mt-3'>React is a free and open-source front-end JavaScript library. This series will cover React from starting to the end. We will learn react from the ground up!</p>
            <button className='bg-purple-800 text-white hover:bg-purple-600 text-sm rounded-2xl p-2 mt-11'>Start watching</button>
          </div>
        </div>
      </div>
      {/* Testimonials */}
      <div>
        <p className='text-center text-4xl mt-10'>Testimonials</p>
      </div>
      <div className='grid grid-cols-2 gap-10 mt-8'>
        <div className='bg-slate-200 p-8 ml-8 rounded-xl'>
          <p >I don't have words to thank this man, I'm really grateful to have this channel and website in my daily routine. If you're a mere beginner, then you can trust this guy and can put your time into his content. I can assure you that it'll be worth it.</p>
          <p className='font-bold mt-4'>Mohit kumar</p>
          <p>web developer</p>
        </div>
        <div className='bg-slate-200 p-8 mr-8 rounded-xl'>
          <p className=''>For everyone who wants to level up their #Coding and #Dev skills - seriously, this channel is for you! Both basic and advanced stacks are covered on this channel, and one can learn according to his skill levels. And the icing on the cake is, everything is available for free.</p>
          <p className='font-bold mt-4'>Rakesh Shetty</p>
          <p>web developer</p>
        </div>
      </div>
      {/* Footer */}
      <footer className='mt-8 flex ml-7 '>
        <img src={logo} alt=''></img>
        <p className='text-xl mt-1 ml-2'>CodeWithHarry</p>
        <p className='text-4xl ml-4 text-slate-300'>|</p>
        <p className='mt-3 ml-4 text-slate-400'>Copyright © 2022 CodeWithHarry.com</p>
      </footer>
    </>
  )
}
