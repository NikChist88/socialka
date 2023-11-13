import '../src/styles/global.scss'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import { store, StateType } from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const rerenderEntireTree = (state: StateType) => {
  root.render(
    <Router>
      <App
        _state={state}
        addPost={store.addPost.bind(store)}
        updatePost={store.updatePost.bind(store)}
      />
    </Router>
  )
}

rerenderEntireTree(store.getState())
store.subscribe(rerenderEntireTree)
