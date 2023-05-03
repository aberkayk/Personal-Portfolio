import Image from 'next/image'
import React from 'react'
import { RiRadioButtonFill } from 'react-icons/ri'
import githubImg from '../public/assets/projects/githubFinder.png'
import Link from 'next/link'

const github = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/90 z-10' />
        <Image className='absolute z-1 object-cover' fill src={githubImg} alt='/' />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-0 translate-y-[-50%] text-white z-10 p-4 ml-4'>
          <h2 className='py-2 '>Github Finder</h2>
          <h3>JavaScript | HTML | Bootstrap</h3>
        </div>
      </div>
      <div className='w-screen mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 ml-4'>
        <div className='col-span-4 '>
          <p className='text-xl tracking-widest uppercase text-[#5651e5] my-2'>Project</p>
          <h2 className='my-3 tracking-wider '>Overview</h2>
          <p className='text-justify'>The Github Profile Finder is a web application that enables users to search for Github profiles using a username. This app is developed with HTML, CSS, and Javascript, and it utilizes the Github API to retrieve and display user information. It is a user-friendly tool that makes it easy to search for Github users and access their repositories.

            Upon loading the app, users are presented with a simple and clean interface consisting of a search bar and a search button. Users can enter a Github username in the search bar and click the search button to initiate the search. Once the search is complete, the app retrieves and displays the user's profile information, including their name, profile picture, bio, location, number of followers, and repositories. The app also displays a list of the user's repositories, including the repository name, description, and number of stars and forks. Users can click on any repository to access its Github page.
          </p>
          <Link target='_blank' href="https://github.com/aberkayk/Github-Profile-Finder">
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
                <RiRadioButtonFill className='pr-1' /> Bootstrap
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Github API
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default github