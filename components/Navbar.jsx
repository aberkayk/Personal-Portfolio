import Link from 'next/link';
import React, { useState, useEffect } from 'react'
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { BsPersonLinesFill, BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'
import { useRouter } from 'next/router';
import ContactInfo from './ContactInfo';

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [shadow, setShadow] = useState(false)
  const [navBg, setNavBg] = useState("#ecf0f3")
  const [linkColor, setLinkColor] = useState("#1f2937")
  const [openInfo, setOpenInfo] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (
      router.asPath === "/github" ||
      router.asPath === "/rockPaperScissors" ||
      router.asPath === "/serviceFinder" ||
      router.asPath === "/library"
    ) {
      setNavBg("transparent")
      setLinkColor("#ecf0f3")
    } else {
      setNavBg("#ecf0f3")
      setLinkColor("#1f2937")
    }
  }, [router])

  const handleNav = () => {
    setNav(!nav)
  }

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true)
      } else {
        setShadow(false)
      }
    }
    window.addEventListener('scroll', handleShadow)
  }, [])

  return (
    <div id='navbar' style={{ backgroundColor: `${navBg}` }} className={shadow ? "fixed w-full h-16 shadow-xl z-[100]" : "fixed w-full h-20 z-[100]"}>
      <ContactInfo openInfo={openInfo} setOpenInfo={setOpenInfo} />
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16 relative">
        <div className='w-full flex sm:justify-start md:justify-center'>
          <ul style={{ color: `${linkColor}` }} className='hidden md:flex'>
            <Link scroll={false} href='/#home'>
              <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
            </Link>
            <Link scroll={false} href='/#about'>
              <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
            </Link>
            <Link scroll={false} href='/#skills'>
              <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
            </Link>
            <Link scroll={false} href='/#projects'>
              <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
            </Link>
            <Link scroll={false} href='/#contact'>
              <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
            </Link>
          </ul>
          {/* <button className='p-2 absolute right-[2%] bottom-[50%] translate-y-[50%] rounded-full' onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "light" ? <BsFillMoonFill size={20} /> : <BsFillSunFill size={20} />}
          </button> */}
          {/* Hamburger Icon Start */}
          <div onClick={handleNav} className='ml-2 md:hidden'>
            <AiOutlineMenu size={25} />
          </div>
          {/* Hamburger Icon Start */}
        </div>
      </div>

      {/* Mobile Menu Start */}
      <div className={!nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
        <div className={!nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] p-10 h-screen bg-[#ecf0f3] ease-in duration-500'
          : 'fixed left-[-100%] top-0 w-[75%] sm:w-[60%] md:w-[45%] p-10 h-screen bg-[#ecf0f3] ease-in duration-500'}>
          <div>
            <div className='flex w-full items-center justify-end'>
              <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer mb-10'>
                <AiOutlineClose />
              </div>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase w-[60%]'>
              <Link scroll={false} href='/#home'>
                <li onClick={() => setNav(!nav)} className='py-4 text-sm'>Home</li>
              </Link>
              <Link scroll={false} href='/#about'>
                <li onClick={() => setNav(!nav)} className='py-4 text-sm'>About</li>
              </Link>
              <Link scroll={false} href='/#skills'>
                <li onClick={() => setNav(!nav)} className='py-4 text-sm'>Skills</li>
              </Link>
              <Link scroll={false} href='/#projects'>
                <li onClick={() => setNav(!nav)} className='py-4 text-sm'>Projects</li>
              </Link>
              <Link scroll={false} href='/#contact'>
                <li onClick={() => setNav(!nav)} className='py-4 text-sm'>Contact</li>
              </Link>
            </ul>
            <div className='pt-40'>
              <p className='uppercase tracking-widest text-[#5651e5]'>Let's Connect</p>
              <div className='flex justify-between items-center my-4 w-full sm:w-[80%]'>
                <Link target='_blank' href="https://www.linkedin.com/in/ahmetberkaykocak/">
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaLinkedinIn />
                  </div>
                </Link>
                <Link target='_blank' href="https://github.com/aberkayk">
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaGithub />
                  </div>
                </Link>
                <Link scroll={false} href="/#contact">
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300' onClick={() => setNav(!nav)}>
                    <AiOutlineMail />
                  </div>
                </Link>
                <button onClick={() => { setOpenInfo(true), setNav(!nav) }}>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <BsPersonLinesFill />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Menu End */}
    </div >
  );
}

export default Navbar