import { React, useState } from 'react'
import './App.css'

function App() {
  const [valor, setValor] = useState(0)

  const sumar = () =>{
    setValor(valor+1);
  }

  const Restar = () =>{
    setValor(valor-1);
  }

  const Restablecer = () =>{
    setValor(0);
  }


  return (
    <>
      <div className='app'>

        <h1>Contador de boludos</h1>
        <h2>{valor}</h2>
        <button onClick={sumar}>Aumentar</button>
        <button onClick={Restar}>Restar</button>

        <button onClick={Restablecer}> Restablecer</button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
