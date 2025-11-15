import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import Logo from './Logo'

const Header = () => {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const isActive = (path: string) => location.pathname === path

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
            <Logo className="h-12 w-auto" />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-6">
            <li>
              <Link
                to="/"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/')
                    ? 'text-spa-pink bg-spa-bg'
                    : 'text-gray-700 hover:text-spa-pink hover:bg-spa-bg'
                }`}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                to="/servicios"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/servicios')
                    ? 'text-spa-pink-400 bg-spa-pink-50'
                    : 'text-gray-700 hover:text-spa-pink-400 hover:bg-spa-pink-50'
                }`}
              >
                Servicios
              </Link>
            </li>
            <li>
              <Link
                to="/galeria"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/galeria')
                    ? 'text-spa-pink-400 bg-spa-pink-50'
                    : 'text-gray-700 hover:text-spa-pink-400 hover:bg-spa-pink-50'
                }`}
              >
                Galería
              </Link>
            </li>
            <li>
              <Link
                to="/contacto"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/contacto')
                    ? 'text-spa-pink-400 bg-spa-pink-50'
                    : 'text-gray-700 hover:text-spa-pink-400 hover:bg-spa-pink-50'
                }`}
              >
                Contacto
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-spa-pink hover:bg-spa-bg transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <ul className="flex flex-col space-y-2">
              <li>
                <Link
                  to="/"
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive('/')
                      ? 'text-spa-pink-400 bg-spa-pink-50'
                      : 'text-gray-700 hover:text-spa-pink-400 hover:bg-spa-pink-50'
                  }`}
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/servicios"
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive('/servicios')
                      ? 'text-spa-pink-400 bg-spa-pink-50'
                      : 'text-gray-700 hover:text-spa-pink-400 hover:bg-spa-pink-50'
                  }`}
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  to="/galeria"
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive('/galeria')
                      ? 'text-spa-pink-400 bg-spa-pink-50'
                      : 'text-gray-700 hover:text-spa-pink-400 hover:bg-spa-pink-50'
                  }`}
                >
                  Galería
                </Link>
              </li>
              <li>
                <Link
                  to="/contacto"
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive('/contacto')
                      ? 'text-spa-pink-400 bg-spa-pink-50'
                      : 'text-gray-700 hover:text-spa-pink-400 hover:bg-spa-pink-50'
                  }`}
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header

