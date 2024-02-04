import ReactDOM from 'react-dom/client'
import {App, Background} from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('background')!).render(
    <Background />
)

ReactDOM.createRoot(document.getElementById('root')!).render(
    <App />
)
