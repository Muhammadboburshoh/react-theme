import { createContext, useState, useEffect } from "react"

const LanguageContext = createContext()

function LanguageProvider ({children}) {

  const [ language, setLanguage ] = useState(window.localStorage.getItem("language") || "uz")

  useEffect(() => {
    window.localStorage.setItem("language", language)
  },[language])
  
  return (
    <LanguageContext.Provider value={{language, setLanguage}}>
      {children}
    </LanguageContext.Provider>
  )
}

export {
  LanguageProvider,
  LanguageContext,
}
