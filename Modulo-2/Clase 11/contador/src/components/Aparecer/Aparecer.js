import { useEffect, useState } from 'react'

export const Aparecer = ({ desmontarComponente }) => {
  const [count, setCount] = useState(0)
  const [names, setNames] = useState(["nacho"])
  useEffect(() => {
     return console.log(names)
  }, [names])
  useEffect(() => {
    console.log('esto se ejecuta siempre')
  })
  useEffect(() => {
    console.log('esto se ejecuta solo cuando cambia count')
  }, [count])
  const add = () => setCount(count + 1)
  const minus = () => setCount(count - 1)

  useEffect(() => {
    console.log('esto se ejecuta solo cuando cambia el nombre')
  }, [names])
  const nombreNuevo = () => setNames([...names, "Serafin"])

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={minus}>-</button>
      <button onClick={add}>+</button>
      <button onClick={nombreNuevo}>Nueva persona</button>
      {
        names.map((nombre, index) =><p key={index}>{nombre}</p>)
      }
    </div>
  )
}