import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Backgrond } from './Background.tsx'

ReactDOM.createRoot(document.getElementById('background')!).render(
    <Backgrond />
)

ReactDOM.createRoot(document.getElementById('root')!).render(
    <App />
)
