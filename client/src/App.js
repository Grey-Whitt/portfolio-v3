import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme, Container } from './styles'
import HomeScreen from './screens/HomeScreen'
import MoreProjects from './screens/MoreProjects'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Header />

        <main>
          <Container>
            <Routes>
              <Route path='/' element={<HomeScreen />} />
              <Route path='/moreprojects' element={<MoreProjects />} />
            </Routes>
          </Container>
        </main>
      </Router>
    </ThemeProvider>
  )
}

export default App
