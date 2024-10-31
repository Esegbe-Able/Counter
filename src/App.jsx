import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  return (
    <>
    <h1>{count}</h1>
      <div>
        <button onClick={()=>setCount(count>1 ? count-1 : "you have reached your limit")}>-</button>
        <button onClick={()=>setCount(0)}>Reset</button>
        <button onClick={()=>setCount(count<100 ? count+1 : "YOu have reached your limit")}>+</button>
      </div>
      <div style={{ width: '80%', margin: '20px auto', height: '20px', background: '#ccc' }}>
        <div
          style={{
            width: `${count}%`,
            height: '100%',
            background: 'green',
            transition: 'width 0.3s'
          }}
        ></div>
      </div>
    </>
  )
}

export default App
