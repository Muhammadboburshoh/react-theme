import {  useContext } from "react"
import { ThemeContext, } from "../../themeContext"
import { LanguageContext } from "../../languageContext"

import { languages } from "../../data.js"

import "./Header.css"


function Header () {

  const {theme, setTheme} = useContext(ThemeContext)
  const { language } = useContext(LanguageContext)
  console.log(language);

  let index;

  if (language === "ru") {
    index = 1
  } else if (language === "uz") {
    index = 0
  } else if (language === "tr") {
    index = 2
  }
  console.log(index);

  return (
    <header className={theme}>
      <h3>{languages[index].header[0]}</h3>
      <p>{languages[index].header[1]}</p>
        
      <select 
        onChange= {e => setTheme(e.target.value)}
        defaultValue={theme}
      >
        <option value="light">{languages[index].header[2]}</option>
        <option value="dark">{languages[index].header[3]}</option>
      </select>
    </header>
  )
}

export default Header