import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'

// Import the generated route tree
import { routeTree } from './routeTree.gen'
import { AuthProvider, useAuth } from './auth'

// Create a new router instance
const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  context: { auth: undefined },
})

function InnerApp() {
  const auth = useAuth()

  return <RouterProvider router={router} context={{ auth }} />
}

// Render the app
const rootElement = document.getElementById('root')

if (!rootElement.innerHTML) {
  ReactDOM.createRoot(rootElement).render(
    <StrictMode>
      <AuthProvider>
        <InnerApp />
      </AuthProvider>
    </StrictMode>
  )
}
