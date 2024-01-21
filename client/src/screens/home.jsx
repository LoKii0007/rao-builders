import React , {useEffect} from 'react'
import Intro from '../components/intro'
import '../css/home.css'
import Review from '../components/review'
import Popular from '../components/popular'
import Fixed from '../components/fixed'

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}, [])

  return (
    <>
      <Intro/>
      <Popular title="Popular Products"/>
      <Review/>
      <Fixed/>
    </>
  )
}

export default Home
