import React from 'react'
import './App.scss'
import { Header } from './components/header/Header'
import { Navbar } from './components/navbar/Navbar'
import { Profile } from './components/pages/profile/Profile'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Messages } from './components/pages/messages/Messages'

type AppType = {
  data: {
    profilePage: {
      posts: {
        id: number
        name: string
        post: string
        date: string
        avatar: string
      }[]
    }
    messagesPage: {
      messages: {
        id: number
        name: string
        avatar: string
        message: string
        date: string
      }[]
    }
  }
}

export const App: React.FC<AppType> = ({ data }) => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main className="Main">
          <div className="Container">
            <div className="Wrapper">
              <Navbar />
              <Routes>
                <Route
                  path="/profile"
                  element={<Profile posts={data.profilePage.posts} />}
                ></Route>
                <Route
                  path="/messages"
                  element={<Messages messages={data.messagesPage.messages} />}
                ></Route>
              </Routes>
            </div>
          </div>
        </main>
      </BrowserRouter>
    </div>
  )
}
