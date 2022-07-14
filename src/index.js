import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ClassCounter from './ClassCounter'
import HookCounter from './HookCounter'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <App />
    <ClassCounter />
    <HookCounter />
  </>,
)
