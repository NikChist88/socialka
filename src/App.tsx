import React from 'react'
import './App.scss'
import { Header } from './components/header/Header'
import { Navbar } from './components/navbar/Navbar'
import { Profile } from './components/pages/profile/Profile'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Messages } from './components/pages/messages/Messages'

export const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main className="Main">
          <div className="Container">
            <div className="Wrapper">
              <Navbar />
              <Routes>
                <Route path="/profile" element={<Profile />}></Route>
                <Route path="/messages" element={<Messages />}></Route>
              </Routes>
            </div>
          </div>
        </main>
      </BrowserRouter>
    </div>
  )
}
