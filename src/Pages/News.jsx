import React from 'react'
import Pageshero from '../Component/Pageshero/Pageshero'
import hero3 from '../assets/hero_3.jpg.webp'
import BlogLayout from '../Component/Bloglayout/Bloglayout'
const News = () => {
  return (
    <>
    <Pageshero backgroundImg={hero3} title="Blog"/>
    <BlogLayout/>
    </>
  )
}

export default News