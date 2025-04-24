import { useState } from 'react'
import './App.css'
import BasicAnimation from './components/BasicAnimation'
import TimeLineAnimation from './components/TimeLineAnimation'
import AnimationLoopForMultipleRefElements from './components/AnimationLoopForMultipleRefElements'
import ScrollTriggerAnimation from './components/ScrollTriggerAnimation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <ScrollTriggerAnimation /> */}
    <AnimationLoopForMultipleRefElements />
    {/* <TimeLineAnimation /> */}
    {/* <BasicAnimation /> */}
    </>
  )
}

export default App
