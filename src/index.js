import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { LocaleProvider } from 'antd'
import enUS from 'antd/lib/locale-provider/en_US'
import App from './App'

ReactDOM.render(
  <BrowserRouter>
    <LocaleProvider locale={enUS}>
      <App />
    </LocaleProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
