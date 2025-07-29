import React from 'react'
import Pageshero from '../Component/Pageshero/Pageshero'
import heroimg from '../assets/hero_2.jpg.webp'
import Gallerysection from '../Component/Gallery/Gallerysection'

const Gallery = () => {
  return (
    <>
     <Pageshero backgroundImg={heroimg} title="Gallery"/>
     <Gallerysection/>
     
    </>
  )
}

export default Gallery