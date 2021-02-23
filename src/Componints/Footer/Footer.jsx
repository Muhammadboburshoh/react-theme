import {  useContext } from "react"
import { ThemeContext } from "../../themeContext"

import "./Footer.css"

function Footer () {

  const { theme } = useContext(ThemeContext)

  return (
    <footer className={theme}>
      <p>Tashrifingiz uchun tashakkur, yana kelib turing:)</p>
    </footer>
  )
}

export default Footer