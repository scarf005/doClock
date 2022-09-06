import { MantineProvider } from '@mantine/core'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        headings: {
          fontWeight: 100,
          fontFamily: 'Roboto',
        },
      }}
    >
      <App />
    </MantineProvider>
  </React.StrictMode>
)
