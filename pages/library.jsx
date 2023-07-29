import Image from 'next/image'
import React from 'react'
import { RiRadioButtonFill } from 'react-icons/ri'
import libraryImg from '../public/assets/projects/library.png'
import Link from 'next/link'

const library = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/90 z-10' />
        <Image className='absolute z-1 object-cover' fill src={libraryImg} alt='/' />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-0 translate-y-[-50%] text-white z-10 p-4 ml-4'>
          <h2 className='py-2 '>Service Finder</h2>
          <h3>React JS | Redux | Json-Server</h3>
        </div>
      </div>
      <div className='w-screen mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 ml-4'>
        <div className='col-span-4 '>
          <p className='text-xl tracking-widest uppercase text-[#5651e5] my-2'>Project</p>
          <h2 className='my-3 tracking-wider '>Overview</h2>
          <p className='text-justify'>The Library app is a web application built with React and Redux that allows users to manage their book collections. With its intuitive interface, users can add new books, edit existing ones, delete books, search for books using various filters, and create new categories for their books.Additionally, the app includes a login feature, allowing users to securely access their personal book collections. The app also features a theme change button, allowing users to switch between light and dark themes, depending on their preference. This feature provides a customizable user experience and enhances the app's overall aesthetic. The app's use of Redux for state management ensures that all changes to the book collection and categories are tracked and saved, providing a seamless user experience. The search feature makes it easy for users to find the books they need quickly and efficiently, while the ability to create new categories adds an extra layer of organization to their collections.
          </p>
          <Link target='_blank' href="https://github.com/aberkayk/Library-App">
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
                <RiRadioButtonFill className='pr-1' /> React JS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Bootstrap
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Redux
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React-Redux
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default library