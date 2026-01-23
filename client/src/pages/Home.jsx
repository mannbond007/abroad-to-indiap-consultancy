import React from 'react'
import Hero from '../components/home/Hero'
import WhyIndia from '../components/home/WhyIndia'
import ProcessToStudyInIndia from '../components/home/ProcessToStudyInIndia'
import WhyYouChooseUs from '../components/home/WhyYouChooseUs'
import FAQs from '../components/home/FAQs'

const Home = () => {
  return (
    <div>
      <Hero/>
      <WhyIndia/>
      <ProcessToStudyInIndia/>
      <WhyYouChooseUs/>
      <FAQs/>
    </div>
  )
}

export default Home