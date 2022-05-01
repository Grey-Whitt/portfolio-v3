import React from 'react'
import About from '../../components/About'
import Projects from '../../components/Projects'
import { Container } from '../../styles'

const HomeScreen = () => {
  return (
    <>
      <Container>
        <About />
        <Projects />
      </Container>
    </>
  )
}

export default HomeScreen
