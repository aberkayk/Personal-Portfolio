import Image from 'next/image'
import React from 'react'
import { RiRadioButtonFill } from 'react-icons/ri'
import rockPaperScissorsImg from '../public/assets/projects/rockPaperScissors.png'
import Link from 'next/link'

const rockPaperScissors = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/90 z-10' />
        <Image className='absolute z-1 object-cover' fill src={rockPaperScissorsImg} alt='/' />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-0 translate-y-[-50%] text-white z-10 p-4 ml-4'>
          <h2 className='py-2 '>Ropck Paper Scissors</h2>
          <h3>JavaScript | HTML | CSS</h3>
        </div>
      </div>
      <div className='w-screen mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 ml-4'>
        <div className='col-span-4 '>
          <p className='text-xl tracking-widest uppercase text-[#5651e5] my-2'>Project</p>
          <h2 className='my-3 tracking-wider '>Overview</h2>
          <p className='text-justify'>This Rock Paper Scissors game is an exciting and interactive web application built with HTML, CSS, and JavaScript. The game is a classic, easy-to-play game that has been enjoyed by millions of people for decades. The game features a simple and intuitive interface with 3 buttons that allow players to select their preferred move. When a player clicks on a button, the game generates a random selection for the computer opponent, and it then compares the choices and displays the winner.
          </p>
          <Link target='_blank' href="https://github.com/aberkayk/Rock-Paper-Scissors-Game">
            <button className='px-8 py-2 mt-4 mr-4'>CODE</button>
          </Link>
          <Link href="/#home">
            <button className='px-8 py-2 mt-4 mr-4'>HOME</button>
          </Link>
          <Link href="/#projects">
            <button className='px-8 py-2 mt-4'>BACK</button>
          </Link>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <br /><hr /><br />
            <div className='grid grid-cols-1 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> JavaScript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> HTML
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> CSS
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default rockPaperScissors