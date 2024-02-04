import React from 'react'
import ReactDOM from 'react-dom/client'
import {App, Backgrond} from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('background')!).render(
    <Backgrond />
)

ReactDOM.createRoot(document.getElementById('root')!).render(
    <App />
)
