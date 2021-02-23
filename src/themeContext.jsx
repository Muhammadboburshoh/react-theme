import { createContext , useState, useEffect} from "react"

const ThemeContext = createContext()

function ThemeProvider ({children}) {

  const [ theme, setTheme ] = useState(window.localStorage.getItem("theme") || "light")

  // setTheme()
  useEffect(() => {
    window.localStorage.setItem("theme", theme)
  },[theme])


  return(
    <ThemeContext.Provider value={{theme, setTheme}}>
    {children}
    </ThemeContext.Provider>
  )
}

export {
  ThemeProvider,
  ThemeContext,
}