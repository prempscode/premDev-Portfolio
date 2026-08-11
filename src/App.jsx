import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhatIDo from './components/WhatIDo'
import Proficiency from './components/Proficiency'
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-dark text-white grid-bg">
      <Navbar />
      <main>
        <Hero />
        <WhatIDo />
        <Proficiency />
        <Education />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </div>
  )
}

export default App
