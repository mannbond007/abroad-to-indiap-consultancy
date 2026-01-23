import React from 'react'
import Hero from '../components/home/Hero'
import WhyIndia from '../components/home/WhyIndia'
import ProcessToStudyInIndia from '../components/home/ProcessToStudyInIndia'
import WhyYouChooseUs from '../components/home/WhyYouChooseUs'

const Home = () => {
  return (
    <div>
      <Hero/>
      <WhyIndia/>
      <ProcessToStudyInIndia/>
      <WhyYouChooseUs/>
    </div>
  )
}

export default Home