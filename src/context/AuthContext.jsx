import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { auth } from '../../lib/firebase'
import { onAuthStateChanged, signOut as fbSignOut } from 'firebase/auth'

const AuthContext = createContext({
  user: null,
  loading: true,
  signIn: (_user) => {},
  signOut: () => {},
  setUser: (_user) => {},
})

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

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
      setLoading(false)
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

  const value = useMemo(() => ({ user, loading, signIn, signOut, setUser }), [user, loading])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  return useContext(AuthContext)
}


