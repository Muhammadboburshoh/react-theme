import {  useContext } from "react"
import { ThemeContext, } from "../../themeContext"
import "./Header.css"


function Header () {

  const {theme, setTheme} = useContext(ThemeContext)

  return (
    <header className={theme}>
      <h3>Saytimizga Xush kelibsiz</h3>
      <p>Ushbu saytda xozirda faqat tilni o'zgartirish va thema o'zgartirish ishlaydi.</p>
        
      <select 
        onChange= {e => setTheme(e.target.value)}
        defaultValue={theme}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </header>
  )
}

export default Header