import React from 'react'
import { About , Testimonials, Work, Skills, Footer, Header } from './container'
import { Navbar } from './components'
import './App.scss'

const App = () => {
  return (
    <div className='app' >
      <Navbar/>
      <Header/>
      <About/>
      <Work/>
      <Skills/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default App