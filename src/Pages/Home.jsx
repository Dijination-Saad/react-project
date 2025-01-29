import React from 'react'
import '../Styles/Style.css'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ChartComponent from '../components/Chart'

const Home = () => {
  return (
   <>
   <Header />
   <Hero />
    <ChartComponent />
   <Footer />
   </>
  )
}

export default Home