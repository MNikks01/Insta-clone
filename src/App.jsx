
import './App.css'
import HomePage from './pages/HomePage'
import Authentication from './pages/Authentication'

function App() {

  const user = 'jdfhbvj27t812jfbv'

  return (
    <div>
      {
        user ? <HomePage /> : <Authentication />
      }
    </div>
  )
}

export default App
