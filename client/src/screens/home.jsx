import React from 'react'
import Intro from '../components/intro'
import '../css/home.css'
import Review from '../components/review'
import Popular from '../components/popular'
import Fixed from '../components/fixed'

const Home = () => {
  return (
    <>
      <Intro/>
      <Popular/>
      <Review/>
      <Fixed/>
    </>
  )
}

export default Home
