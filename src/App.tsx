import './App.scss'
import React from 'react'
import { Header } from './components/header/Header'
import { Navbar } from './components/navbar/Navbar'
import { Profile } from './components/pages/profile/Profile'
import { Routes, Route } from 'react-router-dom'
import { Messages } from './components/pages/messages/Messages'
import { StateType } from './redux/store'

export type AppPropsType = {
  _state: StateType
  dispatch: (action: {type: string, post?: string | undefined}) => void
}

export const App: React.FC<AppPropsType> = (props) => {
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
                  profilePage={props._state.profilePage}
                  dispatch={props.dispatch}
                />
              }
            ></Route>
            <Route
              path="/messages"
              element={
                <Messages messages={props._state.messagesPage.messages} />
              }
            ></Route>
          </Routes>
        </div>
      </main>
    </div>
  )
}
