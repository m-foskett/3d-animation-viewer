import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { MantineProvider } from '@mantine/core'
import { CharacterAnimationsProvider } from './contexts/CharacterAnimations.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* UI Global Styling Provider */}
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        globalStyles: (_theme) => ({
          body: {
            width: '100vw',
            height: '100vh',
          },
          '#root': {
            width: '100%',
            height: '100%',
          }
        }),
      }}
    >
      {/* Context Provider */}
      <CharacterAnimationsProvider>
        <App />
      </CharacterAnimationsProvider>
    </MantineProvider>
  </React.StrictMode>,
)
