import '../src/styles/global.scss'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import { store } from './store'
import { StateType } from './types/state'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const rerenderEntireTree = (state: StateType) => {
  root.render(
    <Router>
      <App state={state} dispatch={store.dispatch.bind(store)} />
    </Router>
  )
}

rerenderEntireTree(store.getState())

store.subscribe(() => {
  const state = store.getState()
  rerenderEntireTree(state)
})
