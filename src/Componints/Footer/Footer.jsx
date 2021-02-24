import {  useContext } from "react"
import { ThemeContext } from "../../themeContext"
import { LanguageContext } from "../../languageContext"

import "./Footer.css"

function Footer () {

  const { theme } = useContext(ThemeContext)
  const { language, setLanguage } = useContext(LanguageContext)
  console.log(language);
  return (
    <footer className={theme}>
      <p>Tashrifingiz uchun tashakkur, yana kelib turing!</p>
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

export default Footer