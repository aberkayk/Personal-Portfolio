import Head from 'next/head'
import Main from '@/components/Main'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Navbar from '@/components/Navbar'


export default function Home() {
  return (
    <div>
      <Head>
        <title>ABK | Front-End Developer</title>
        <meta name="description" content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences. I use HTML, CSS, Javascript, Typescript, React JS, Next Js, Tailwind and Bootstrap for my projects." />
        <link rel="icon" href="/fav.png" />
      </Head>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}
