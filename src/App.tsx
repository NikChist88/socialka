import React from 'react'
import './App.scss'
import { Header } from './components/header/Header'
import { Navbar } from './components/navbar/Navbar'
import { Profile } from './components/pages/profile/Profile'
import { Routes, Route } from 'react-router-dom'
import { Messages } from './components/pages/messages/Messages'

import { ProfilePageType } from './redux/typesStore'
import { MessagesPageType } from './redux/typesStore'

export type AppPropsType = {
  _state: {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
  }
  addPost: () => void
  updatePost: (newPost: string | undefined) => void
}

export const App: React.FC<AppPropsType> = ({
  _state,
  addPost,
  updatePost,
}) => {
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
                  profilePage={_state.profilePage}
                  addPost={addPost}
                  updatePost={updatePost}
                />
              }
            ></Route>
            <Route
              path="/messages"
              element={<Messages messages={_state.messagesPage.messages} />}
            ></Route>
          </Routes>
        </div>
      </main>
    </div>
  )
}
