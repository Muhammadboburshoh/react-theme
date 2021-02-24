import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { ThemeProvider } from "./themeContext"
import { LanguageProvider } from "./languageContext"

const htmlElement = document.getElementById('root')

ReactDOM.render(
  <React.StrictMode>
    <LanguageProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </LanguageProvider>
  </React.StrictMode>,
  htmlElement
)