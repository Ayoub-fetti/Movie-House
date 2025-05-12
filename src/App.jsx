import Navbar  from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import { Routes, Route } from 'react-router-dom'
import Details from './pages/details.jsx'

function App() {

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/details/:id' element={<Details/>}></Route>
      </Routes>
    </>
  )
}

export default App
