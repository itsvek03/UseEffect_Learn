import React, { useEffect, useRef, useState } from 'react'

export default function MouseContainer() {
  const ref = useRef(null)
  //   const [x, setX] = useState()
  //   const [y, setY] = useState()

  //   useEffect(() => {
  //     console.log('Mouse Container Effect Called')
  //     window.addEventListener('mousemove', logMousePointPosition)

  //     return () => {
  //       console.log('Unmounted Code')
  //       window.removeEventListener('mousemove', logMousePointPosition)
  //     }
  //   }, [])

  useEffect(() => {
    const handleClick = () => {
      console.log('Button Clicked')
    }

    const element = ref.current
    element.addEventListener('click', handleClick)

    return () => {
      console.log('Unmounted  Button Code')
      element.removeEventListener('click', handleClick)
    }
  }, [])

  //   const logMousePointPosition = (e) => {
  //     setX((x) => e.clientX)
  //     setY((y) => e.clientY)
  //   }
  return (
    <div>
      {/* x:{x} y:{y} */}
      <button ref={ref}>Click</button>
    </div>
  )
}
