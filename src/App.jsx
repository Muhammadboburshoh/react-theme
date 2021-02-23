import { useState, useEffect } from "react"

import Header from "./Componints/Header/Header"
import Footer from "./Componints/Footer/Footer"

import './App.css'

function App() {

  const [valueI, setValueI] = useState("")
  const [active, setActive] = useState(false)

  useEffect(() => {

    if(valueI.length >= 5) {
      setActive(true)
      console.log("a");
    }
    else {
      setActive(false)
    }
  },[valueI])

  return (
    <>
      <Header />
      <div className="login">
        <h3 className="login__text">Biz bilan bog'lanish.</h3>
        <p>Telefon raqamingizni qoldiring:</p>
        <input 
        onChange={e=> setValueI(e.target.value)}
        type="number"
        className="login_input"
        />
        <button className={active ? "login_btn": "login_btn warning"}>submit</button>
      </div>
      <Footer />
    </>
  )
}

export default App;
