import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {NextUIProvider} from '@nextui-org/react'
import App from './App.jsx'
import './index.css'

import 'remixicon/fonts/remixicon.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NextUIProvider>
      <App />
      </NextUIProvider>
  </StrictMode>,
)
