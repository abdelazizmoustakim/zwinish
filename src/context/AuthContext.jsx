import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { auth } from '../../lib/firebase'
import { onAuthStateChanged, signOut as fbSignOut } from 'firebase/auth'

const AuthContext = createContext({
  user: null,
  signIn: (_user) => {},
  signOut: () => {},
  setUser: (_user) => {},
})

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  // Sync Firebase auth state
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (fbUser) => {
      if (fbUser) {
        const basicUser = {
          uid: fbUser.uid,
          name: fbUser.displayName || undefined,
          email: fbUser.email || undefined,
        }
        setUser(basicUser)
      } else {
        setUser(null)
      }
    })
    return () => unsub()
  }, [])

  const signIn = (nextUser) => {
    setUser(nextUser)
  }

  const signOut = async () => {
    await fbSignOut(auth)
    setUser(null)
  }

  const value = useMemo(() => ({ user, signIn, signOut, setUser }), [user])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  return useContext(AuthContext)
}


