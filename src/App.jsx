import Navbar  from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import { Routes, Route } from 'react-router-dom'
import Details from './pages/details.jsx'
import Favoris from './pages/favoris.jsx'
import About  from './pages/about.jsx'

function App() {

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/details/:id' element={<Details/>}></Route>
        <Route path='/favoris' element={<Favoris/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
    </>
  )
}

export default App
