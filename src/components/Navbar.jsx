import reactLogo from '../assets/react.svg'
import { Link } from 'react-router-dom'
function Navbar(){
    return (
        <nav className='flex items-center justify-between px-8 py-3 bg-gray-900 text-white'>
            <div className='flex items-center'>
                <img src={reactLogo} alt="Logo" className='w-10 mr-3'/>
                <span className='font-bold text-xl'>Movie House</span>
            </div>
            <ul className='flex space-x-8'>
                <li>
                    <Link to="/" className='hover:text-yellow-400'>Accueil</Link>
                </li>
                <li>
                    <Link to="/favories" className='hover:text-yellow-400'>Favoris</Link>
                </li>
                <li>
                    <Link to="/about" className='hover:text-yellow-400'>About</Link>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar