import reactLogo from '../assets/logo.png'
import { Link } from 'react-router-dom'
function Navbar(){
    return (
        <nav className='flex items-center justify-between px-8 py-3 bg-gradient-to-r from-[#662D8C] to-[#ED1E79] text-white'>
            <div className='flex items-center'>
                <img src={reactLogo} alt="Logo" className='w-10 mr-3 rounded-full'/>
                <span className='font-bold text-xl text-white'>MovieHouse</span>
            </div>
            <ul className='flex space-x-8'>
                <li>
                    <Link to="/" className='hover:underline'>Home</Link>
                </li>
                <li>
                    <Link to="/favories" className='hover:underline'>Favoris</Link>
                </li>
                <li>
                    <Link to="/about" className='hover:underline'>About</Link>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar