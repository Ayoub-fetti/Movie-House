import Navbar  from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}>
        
        </Route>
      </Routes>
    </>
  )
}

export default App
