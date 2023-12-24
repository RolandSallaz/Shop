import { useState } from 'react'
import './App.scss'
import {Sidebar} from "./Sidebar";

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className={'main'}>
      <Sidebar/>
    </main>
  )
}

export default App
