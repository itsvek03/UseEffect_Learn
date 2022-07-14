import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ClassCounter from './ClassCounter'
import HookCounter from './HookCounter'
import ClassIntervalCounter from './ClassIntervalBlock'
import HookIntervalBlock from './HookIntervalBlock'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <App />
    <ClassCounter />
    <HookCounter />
    <ClassIntervalCounter />
    <HookIntervalBlock />
  </>,
)
