import Image from 'next/image'
import React from 'react'
import ProjectItem from './ProjectItem'
import githubFinder from '../public/assets/projects/githubFinder.png'
import libraryApp from '../public/assets/projects/library.png'
import rockPaperScissors from '../public/assets/projects/rockPaperScissors.png'
import serviceFinder from '../public/assets/projects/serviceFinder.png'

const Projects = () => {

  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto py-16'>
        <p className='text-xl tracking-widest uppercase text-center text-[#5651e5]'>Projects</p>
        <h2 className='py-4 text-center'>What I've Built</h2>
        <div className='grid lg:grid-cols-2 gap-8'>
          <ProjectItem title='Github Finder' backgroundImg={githubFinder} projectUrl="/github" />
          <ProjectItem title='Library App' backgroundImg={libraryApp} projectUrl="/library" />
          <ProjectItem title='Service Finder' backgroundImg={serviceFinder} projectUrl="/serviceFinder" />
          <ProjectItem title='Rock Paper Scissors' backgroundImg={rockPaperScissors} projectUrl="/rockPaperScissors" />
        </div>
      </div>
    </div>
  )
}

export default Projects