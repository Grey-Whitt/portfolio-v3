import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from './styles'
import HomeScreen from './screens/HomeScreen'
import styled from 'styled-components'

const Main = styled.main`
  margin: 0 auto;
  max-width: 85%;
  padding: 50px 30px;
`

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Header />
        <Main>
          <Routes>
            <Route path='/' element={<HomeScreen />} />
          </Routes>
        </Main>
      </Router>
    </ThemeProvider>
  )
}

export default App
