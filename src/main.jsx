import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from "styled-components"

import GlobalStyles from "./styles/global"
import themes from "./styles/theme"

import { Home } from './pages/Home/index'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={themes}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  </React.StrictMode>,
)
