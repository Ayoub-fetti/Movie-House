import { useState } from 'react'
import reactLogo from '../assets/logo.png'
import { Link } from 'react-router-dom'

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav className='flex items-center justify-between px-8 py-3 bg-gradient-to-r from-[#662D8C] to-[#ED1E79] text-white relative'>
            <Link to="/" className='flex items-center'>
                <img src={reactLogo} alt="Logo" className='w-10 mr-3 rounded-full' />
                <span className='font-bold text-xl text-white'>MovieHouse</span>
            </Link>
            {/* Burger icon for mobile  */}
            <button
                className="md:hidden flex flex-col justify-center items-center w-10 h-10"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Ouvrir le menu"
            >
                <span className={`block h-1 w-6 bg-white rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block h-1 w-6 bg-white rounded my-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block h-1 w-6 bg-white rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
            {/* Desktop menu */}
            <ul className='hidden md:flex space-x-8'>
                <li>
                    <Link to="/" className='hover:underline'>Accueil</Link>
                </li>
                <li>
                    <Link to="/favoris" className='hover:underline'>Favories</Link>
                </li>
                <li>
                    <Link to="/about" className='hover:underline'>À propos</Link>
                </li>
            </ul>
            {/* Mobile menu */}
            {menuOpen && (
                <ul className="absolute top-full left-0 w-full bg-gradient-to-r from-[#662D8C] to-[#ED1E79] text-white flex flex-col items-center space-y-4 py-4 md:hidden z-10">
                    <li>
                        <Link to="/" className='hover:underline' onClick={() => setMenuOpen(false)}>Accueil</Link>
                    </li>
                    <li>
                        <Link to="/favoris" className='hover:underline' onClick={() => setMenuOpen(false)}>Favories</Link>
                    </li>
                    <li>
                        <Link to="/about" className='hover:underline' onClick={() => setMenuOpen(false)}>À propos</Link>
                    </li>
                </ul>
            )}
        </nav>
    )
}

export default Navbar