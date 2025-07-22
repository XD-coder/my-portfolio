import About from '@/components/About'
import Contact from '@/components/Contact'
import Education from '@/components/Education'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import React from 'react'

const home = () => {
  return (
    <div>
      <section id="hero" className="hero">
          <Hero />
      </section>
      <section id="about" className="about">
          <About />
      </section>
      <section id="skills" className="skills">
          <Skills />
      </section>
      <section id="projects" className="projects">
          <Projects />
      </section>
      <section id="education" className="education">
          <Education />
      </section>
      <section id="contact" className="contact">
          <Contact />
      </section>
     
    </div>
  )
}

export default home