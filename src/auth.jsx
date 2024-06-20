import * as React from 'react'

import { sleep } from './utils'

const AuthContext = React.createContext({
  isAuthenticated: false,
  login: (username) => console.log(username),
  logout: () => {},
  user: '' || null,
})

const key = 'token'

function getStoredUser() {
  return localStorage.getItem(key)
}

function setStoredUser(user) {
  if (user) {
    localStorage.setItem(key, user)
  } else {
    localStorage.removeItem(key)
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = React.useState(getStoredUser())
  const isAuthenticated = !!user

  const logout = React.useCallback(async () => {
    await sleep(250)

    setStoredUser(null)
    setUser(null)
  }, [])

  const login = React.useCallback(async (username) => {
    await sleep(500)

    setStoredUser(username)
    setUser(username)
  }, [])

  React.useEffect(() => {
    setUser(getStoredUser())
  }, [])

  return <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = React.useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
