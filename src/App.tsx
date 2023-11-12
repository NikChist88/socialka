import React from 'react'
import './App.scss'
import { Header } from './components/header/Header'
import { Navbar } from './components/navbar/Navbar'
import { Profile } from './components/pages/profile/Profile'
import { Routes, Route } from 'react-router-dom'
import { Messages } from './components/pages/messages/Messages'

export type AppPropsType = {
  state: {
    profilePage: {
      posts: {
        id: number
        name: string
        post: string
        date: string
        avatar: string
      }[]
      newPost: string
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
  addPost: () => void
  updatePost: (newPost: string | undefined) => void
}

export const App: React.FC<AppPropsType> = ({ state, addPost, updatePost }) => {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <main className="Main">
        <div className="Container">
          <Routes>
            <Route
              path="/profile"
              element={
                <Profile
                  profilePage={state.profilePage}
                  addPost={addPost}
                  updatePost={updatePost}
                />
              }
            ></Route>
            <Route
              path="/messages"
              element={<Messages messages={state.messagesPage.messages} />}
            ></Route>
          </Routes>
        </div>
      </main>
    </div>
  )
}
