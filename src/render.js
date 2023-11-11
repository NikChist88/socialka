import ReactDOM from 'react-dom/client'
import { App } from './App'
import '../src/styles/global.scss'
import { BrowserRouter } from 'react-router-dom'
import { addPost, updatePost } from './data/state'

const root = ReactDOM.createRoot(document.getElementById('root'))

export const renderEntireTree = (state) => {
  root.render(
    <BrowserRouter>
      <App data={state} addPost={addPost} updatePost={updatePost} />
    </BrowserRouter>
  )
}
