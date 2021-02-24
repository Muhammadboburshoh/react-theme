import { useState, useEffect, useContext } from "react"

import Header from "./Componints/Header/Header"
import { Footer } from "./Componints/Footer/Footer"

import { LanguageContext } from "./languageContext"

import { languages } from "./data.js"

import './App.css'

function App() {

  const [valueI, setValueI] = useState("")
  const [active, setActive] = useState(false)

  const { language } = useContext(LanguageContext)

  let index;

  if (language === "ru") {
    index = 1
  } else if (language === "uz") {
    index = 0
  } else if (language === "tr") {
    index = 2
  }

  useEffect(() => {

    if(valueI.length >= 5) {
      setActive(true)
    }
    else {
      setActive(false)
    }
  },[valueI])

  return (
    <>
      <Header />
      <div className="login">
        <h3 className="login__text">{languages[index].main[0]}</h3>
        <p>{languages[index].main[1]}</p>
        <input 
        onChange={e=> setValueI(e.target.value)}
        type="text"
        className="login_input"
        />
        <button className={active ? "login_btn": "login_btn warning"}>{languages[index].main[2]}</button>
      </div>
      <Footer />
    </>
  )
}

export default App;
