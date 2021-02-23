import { useState, useEffect, useLayoutEffect } from "react"
import './App.css'

function ComponintX() {

  const [x, setX] = useState(0)

  useEffect(() => {

    console.log(document.querySelector("button"))
  }, [x])

  return (
    <>
      <div>
        <h1>ComponintX ({x})</h1>
        <button onClick={e => {

          setTimeout(() => {

            setX(x + 1)
          }, 500)

        }}>Qo'sh</button>
      </div>
    </>
  )
}

export default ComponintX;
