import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import ContactInfo from './ContactInfo'

const Main = () => {
  const [openInfo, setOpenInfo] = useState(false)


  return (
    <div id='home' className='w-full h-screen text-center'>
      <ContactInfo openInfo={openInfo} setOpenInfo={setOpenInfo} />
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>
            Let's build something legendary together!
          </p>
          <h2 className='py-4 text-gray-600'>Hi, I'm <span className='text-[#5651e5]'>Ahmet Berkay</span></h2>
          <h2 className='py-2 text-gray-600'>A Front-End Web Developer</h2>
          <p className='py-4 text-gray-600 max-w-[70%] m-auto'>I specialize in creating visually appealing and user-friendly websites that are easy to navigate and interact with as a Front-End Developer. I work with various web technologies, including HTML, CSS, JavaScript, and React, to bring designs to life and create seamless user experiences.</p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <Link target='_blank' href="https://www.linkedin.com/in/ahmetberkaykocak/">
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </Link>
            <Link target='_blank' href="https://github.com/aberkayk">
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                <FaGithub />
              </div>
            </Link>
            <Link scroll={false} href="/#contact">
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </Link>
            <button onClick={() => setOpenInfo(true)}>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                <BsFillPersonLinesFill />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main