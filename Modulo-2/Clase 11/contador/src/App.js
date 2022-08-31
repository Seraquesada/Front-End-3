import { useState } from 'react'
import './App.css'
import { Aparecer } from './components/Aparecer/Aparecer'
function App () {
  const [state, setState] = useState(false)
  return (
    <div className='App'>
      <button onClick={() => setState(true)}>Apreta aqui</button>
      {state && <Aparecer desmontarComponente={() => setState(false)} />}
    </div>
  )
}

export default App
