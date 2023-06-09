import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'
import ContactImg from '../public/assets/others/contact.jpg';
import ContactInfo from './ContactInfo'


const Contact = () => {
  const [openInfo, setOpenInfo] = useState(false)

  return (
    <div id='contact' className='w-full lg:h-screen'>
      <ContactInfo openInfo={openInfo} setOpenInfo={setOpenInfo} />
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
        <p className='text-xl tracking-widest uppercase text-center text-[#5651e5]'>Contact</p>
        <h2 className='py-4 text-center'>Get In Touch</h2>
        <div className='grid lg:grid-cols-6 gap-8'>
          {/* left */}
          <div className='col-span-3 lg:col-span-3 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-4 h-full'>
              <div>
                <Image className='rounded-xl mb-5' src={ContactImg} />
              </div>
              <div>
                <h2 className='py-2'>Ahmet Berkay KOÇAK</h2>
                <p>Front-End Developer</p>
                <p className='py-4 '>I am available for freelance projects. Contact me and let's discuss about details.</p>
              </div>
              <div>
                <p className='uppercase pt-8'>Connect with Me</p>
                <div className='flex items-center justify-between py-4'>
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
                  <button onClick={() => setOpenInfo(true)}>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                      <BsFillPersonLinesFill />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4'>
              <form id='form' action="/api/form" method="post">
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>name</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" required />
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>phone number</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" required />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Email</label>
                  <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" required />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Subject</label>
                  <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Message</label>
                  <textarea className='border-2 rounded-lg p-3 border-gray-300' rows="10" required></textarea>
                </div>
                <button className='w-full p-4 text-gray-100 mt-4'>Send Message</button>
              </form>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12 '>
          <Link scroll={false} href='/#home'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300'>
              <HiOutlineChevronDoubleUp className='text-[#5651e5]' size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Contact