import React from 'react'
import { Container } from '../../styles'
import { AboutContainer, AboutLeft, AboutRight, Picture } from './About.styled'

const About = () => {
  return (
    <Container>
      <AboutContainer>
        <AboutLeft>
          <div className='picContainer'>
            <h2>About Me</h2>
            <div className='orangeBox'>
              <Picture src='./images/IMG-0490.JPG' />
            </div>
          </div>
        </AboutLeft>
        <AboutRight>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </AboutRight>
      </AboutContainer>
    </Container>
  )
}

export default About
