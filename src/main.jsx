import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from "styled-components"

import Details from './pages/Details/index'
import GlobalStyles from "./styles/global"
import themes from "./styles/theme"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={themes}>
      <GlobalStyles />
      <Details />
    </ThemeProvider>
  </React.StrictMode>,
)
