import './App.scss'
import { FC } from 'react'
import { Header } from './components/header/Header'
import { Navbar } from './components/navbar/Navbar'
import { Profile } from './components/pages/profile/Profile'
import { Routes, Route } from 'react-router-dom'
import { Messages } from './components/pages/messages/Messages'
import { StateType } from './types/state'
import { MessagesActionType } from './store/actionTypes'

type AppPropsType = {
  state: StateType
  dispatch: (action: MessagesActionType) => void
}

export const App: FC<AppPropsType> = (props) => {
  const { state, dispatch } = props
  
  return (
    <div className="App">
      <Header />
      <Navbar navbar={state.navbar} />
      <main className="Main">
        <div className="Container">
          <Routes>
            <Route
              path="/profile"
              element={
                <Profile />
              }
            ></Route>
            <Route
              path="/messages"
              element={
                <Messages
                  messages={state.messages}
                  newMessage={state.newMessage}
                  dispatch={dispatch}
                />
              }
            ></Route>
          </Routes>
        </div>
      </main>
    </div>
  )
}
