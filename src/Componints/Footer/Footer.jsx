import {  useContext } from "react"
import { ThemeContext } from "../../themeContext"
import { LanguageContext } from "../../languageContext"

import { languages } from "../../data.js"


import "./Footer.css"

function Footer () {

  const { theme } = useContext(ThemeContext)
  const { language, setLanguage } = useContext(LanguageContext)

  let index;

  if (language === "ru") {
    index = 1
  } else if (language === "uz") {
    index = 0
  } else if (language === "tr") {
    index = 2
  }

  return (
    <footer className={theme}>
      <p>{languages[index].footer}</p>
      <select
      onChange={e => setLanguage(e.currentTarget.value)}
        defaultValue={language}
      >
        <option value="uz">O'z</option>
        <option value="ru">РУ</option>
        <option value="tr">Turk</option>
      </select>
    </footer>
  )
}

export {
  Footer,
} 