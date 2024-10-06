import React from 'react'
import { FaDownload } from 'react-icons/fa'
import download from './images/download.png'
import { Button } from './buttons/button'
import courseCatalog from './files/prospectus.pdf'

export const Prospetus = () => {
  return (
    <div 
    className="min-h-[30vh] bg-no-repeat bg-contain bg-left w-full bg-text 
               flex flex-col md:flex-row justify-center md:justify-around 
               items-center p-4 md:p-8 space-y-4 md:space-y-0"
    style={{ backgroundImage: `url(${download})` }}
  >
    <h2 className="text-lg md:text-xl lg:text-4xl text-headline text-center md:text-left md:max-w-[50%] font-semibold">
      Download our free ACCREDITED course catalogue or soft skills catalogue
    </h2>
    <a href={courseCatalog} download  className="bg-accent text-white py-2 px-4 rounded hover:bg-primary transition md:text-[2rem] md:mr-[3rem]"
      >
        <FaDownload className="inline mr-2" />
        Download
      </a>
  </div>
  )
}