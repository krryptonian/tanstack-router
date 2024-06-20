import * as React from 'react'
import { Outlet, createRootRouteWithContext } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRouteWithContext({
  isAuthenticated: false,
  login: (username) => console.log(username),
  logout: () => {},
  user: '' || null,
})({
  component: () => (
    <>
      <Outlet />
      <TanStackRouterDevtools position='bottom-right' initialIsOpen={false} />
    </>
  ),
})
