import { signOut } from 'next-auth/react'
import React from 'react'

const signout = () => {
  return (
    <button
      onClick={() =>
        signOut({
          callbackUrl: `${window.location.origin}`
        })
      }
    >
      Sign out
    </button>
  )
}

export default signout