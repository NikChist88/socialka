import ReactDOM from 'react-dom/client'
import { App } from './App'
import '../src/styles/global.scss'
import { state } from './data/state'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<App data={state} />)
