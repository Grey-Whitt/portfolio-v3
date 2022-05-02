import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from './styles'
import HomeScreen from './screens/HomeScreen'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<HomeScreen />} />
          </Routes>
        </main>
      </Router>
    </ThemeProvider>
  )
}

export default App
