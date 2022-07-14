import React, { useEffect, useState } from 'react'

export default function HookIntervalBlock() {
  const [counterValue, setcounterValue] = useState(0)

  const tick = () => {
    setcounterValue((prevcounterValue) => prevcounterValue + 1)
  }

  useEffect(() => {
    // Call only once

    const interval = setInterval(tick, 1000)
    function doSomething(counter) {
      if (counter === 5) {
        clearInterval(interval)
        alert('Your player is sold')
      }
    }
    doSomething(counterValue)
    return () => {
      clearInterval(interval)
    }
  }, [counterValue])

  return <div>{counterValue}</div>
}
