import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Header } from './components'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from './styles'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Header />
        <main>
          <Routes></Routes>
        </main>
      </Router>
    </ThemeProvider>
  )
}

export default App
