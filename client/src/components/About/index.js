import React from 'react'
import { Container } from '../../styles'
import { AboutContainer, AboutLeft, AboutRight, Picture } from './About.styled'

const About = () => {
  return (
    <Container>
      <AboutContainer>
        <AboutLeft>
          <div className='picContainer'>
            <div className='orangeBox'>
              <Picture src='./images/IMG-0490.JPG' />
            </div>
          </div>
        </AboutLeft>
        <AboutRight>
          <div className='bio'>
            <h2>About Me</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Aliquet sagittis id consectetur purus ut faucibus pulvinar
              elementum. Morbi non arcu risus quis varius quam quisque id diam.
              Sit amet consectetur adipiscing elit pellentesque habitant morbi
              tristique senectus. Facilisi etiam dignissim diam quis. Eget est
              lorem ipsum dolor. Condimentum lacinia quis vel eros donec ac odio
              tempor orci. Ante metus dictum at tempor commodo ullamcorper a
              lacus. Magna fringilla urna porttitor rhoncus. Id ornare arcu odio
              ut sem nulla pharetra. Vitae semper quis lectus nulla at volutpat
              diam ut. Faucibus nisl tincidunt eget nullam non nisi. Tortor
              condimentum lacinia quis vel eros donec ac odio. Nec sagittis
              aliquam malesuada bibendum arcu vitae. Leo vel orci porta non
              pulvinar neque. Sodales neque sodales ut etiam sit amet nisl
              purus. Amet risus nullam eget felis eget nunc. At augue eget arcu
              dictum. Vitae semper quis lectus nulla at.
            </p>
          </div>
        </AboutRight>
      </AboutContainer>
    </Container>
  )
}

export default About
