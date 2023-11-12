import '../src/styles/global.scss'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import { addPost, subscripe, updatePost, state } from './data/state'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const rerenderEntireTree = (state: any) => {
  root.render(
    <Router>
      <App data={state} addPost={addPost} updatePost={updatePost} />
    </Router>
  )
}

rerenderEntireTree(state)
subscripe(rerenderEntireTree)