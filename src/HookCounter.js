import React, { useEffect, useState } from 'react'

export default function HookCounter() {
  const [counter, setcounter] = useState(0)
  const [counter2, setCounter2] = useState(0)

  // called after every render
  useEffect(() => {
    console.log('Use Effect Called')
    document.title = `You Clicked ${counter} times`
  })

  // Called Only once
  //   useEffect(() => {
  //     console.log('Second Use Effect Called')
  //     alert('Only Once Time Called')
  //   }, [])

  // Conditional Rendering
  useEffect(() => {
    console.log('Third Use Effect Called')
    document.title = `You Clicked ${counter2} times`
  }, [counter2])

  // Component unMount
  useEffect(() => {
    return () => {}
  })

  return (
    <div>
      <h1>Hook Counter</h1>
      <button onClick={() => setcounter(() => counter + 1)}>Click Me</button>
      <h1>Total Count is : {counter}</h1>

      <button onClick={() => setCounter2(() => counter2 + 1)}>Click Me</button>
      <h1>Total Counter Two is : {counter2}</h1>
    </div>
  )
}
