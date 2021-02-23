import {  useContext } from "react"
import { ThemeContext } from "../../themeContext"

import "./Footer.css"

function Footer () {

  const { theme } = useContext(ThemeContext)

  return (
    <footer className={theme}>
      Footer
    </footer>
  )
}

export default Footer