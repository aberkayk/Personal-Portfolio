import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import AboutImg from '../public/assets/others/about.jpg';
import SportImg from '../public/assets/others/sport.jpg';
import { FaInstagram } from 'react-icons/fa';

const About = () => {
  return (
    <div id='about' className='w-full p-2 flex flex-col py-16'>
      <p className='uppercase text-xl text-center tracking-widest text-[#5651e5]'>
        About
      </p>
      <h2 className='py-4 text-center'>Who I Am</h2>
      <div className='max-w-[1240px] m-auto lg:grid grid-cols-4 gap-8'>
        <div className='col-span-2 mx-4'>
          <p className='py-2 text-gray-600 text-justify'>
            I specialize in creating responsive and user-friendly websites that are both visually
            appealing and easy to use. I’m passionate about learning new technologies and understand there is more than one way to accomplish a task. Though I am most proficient in building front-end applications using HTML, CSS, Javascript, and React, I am a quick learner and can pick up new tech stacks as needed. I believe that being a great developer is not using one specific language, but choosing the best tool for the job.
          </p>
          <Link scroll={false} href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='col-span-2 mx-4'>
          <p className='py-2 text-gray-600 text-justify'>
            In addition to my love of sports, I'm also passionate about fitness and staying in shape. I enjoy challenging myself physically and mentally through activities like running, weightlifting, and CrossFit. Through my experiences in fitness and CrossFit, I've learned the importance of setting goals, staying focused, and pushing through adversity. These are all qualities such as discipline and commitment that have helped me in my career as a front-end developer as well.
          </p>
          <Link target='_blank' scroll={false} href='https://www.instagram.com/ahmettkocak/'>
            <p className='py-2 text-gray-600 underline cursor-pointer flex items-center'>
              Discover my Instagram page.
            </p>
          </Link>
        </div>
      </div>
      <div className='max-w-[1240px] m-auto'>
        <div className='my-5 shadow-xl shadow-gray-400 rounded-xl p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl sm:max-w-[350px] md:max-w-[450px] h-auto' alt='/' />
        </div>
      </div>
    </div>
  )
}

export default About