import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import Background from './Background.svg'

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${Background})` }}>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
