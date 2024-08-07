
import './App.css'
import HomePage from './pages/HomePage'
import Authentication from './pages/Authentication'
import { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'

function App() {

  const [isUserLoggedIn, setisUserLoggedIn] = useState(null)
  const [loading, setloading] = useState(false)

  useEffect(() => {
    setloading(true)
    const subscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setisUserLoggedIn(user.uid)
        setloading(false)
      } else {
        setloading(false)
        setisUserLoggedIn(null)
      }
    })
    return () => subscribe()
  }, [])

  return (
    <div>
      {
        loading ? (
          <h1>Loading....</h1>
        ) : (
          <>
            {
              isUserLoggedIn ? <HomePage /> : <Authentication />
            }
          </>
        )
      }

    </div>
  )
}

export default App
