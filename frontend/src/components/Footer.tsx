import { Link } from 'react-router-dom'
import Logo from './Logo'

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Información del SPA */}
          <div>
            <div className="mb-4">
              <Logo className="h-10 w-auto" />
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Más de 10 años de experiencia en estética y bienestar. 
              Cuidamos de ti con dedicación y profesionalismo.
            </p>
          </div>

          {/* Ubicaciones */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Ubicaciones</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>
                <span className="font-medium">Cartago</span>
                <br />
                Valle del Cauca
              </li>
              <li>
                <span className="font-medium">Obando</span>
                <br />
                Valle del Cauca
              </li>
            </ul>
          </div>

          {/* Contacto y Enlaces */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Contacto</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>
                <a
                  href="tel:+573122057768"
                  className="hover:text-spa-pink transition-colors"
                >
                  📞 312 205 7768
                </a>
              </li>
              <li>
                <a
                  href="mailto:azucenacalo82@gmail.com"
                  className="hover:text-spa-pink transition-colors"
                >
                  ✉️ azucenacalo82@gmail.com
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <Link
                to="/contacto"
                className="text-spa-pink hover:text-spa-pink-dark text-sm font-medium"
              >
                Enviar mensaje →
              </Link>
            </div>
          </div>
        </div>

        {/* Enlaces de navegación */}
        <div className="border-t border-gray-200 mt-8 pt-6">
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <Link
              to="/"
              className="text-gray-600 hover:text-spa-pink-400 transition-colors"
            >
              Inicio
            </Link>
            <Link
              to="/servicios"
              className="text-gray-600 hover:text-spa-pink-400 transition-colors"
            >
              Servicios
            </Link>
            <Link
              to="/galeria"
              className="text-gray-600 hover:text-spa-pink-400 transition-colors"
            >
              Galería
            </Link>
            <Link
              to="/contacto"
              className="text-gray-600 hover:text-spa-pink-400 transition-colors"
            >
              Contacto
            </Link>
          </nav>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-6 pt-6 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} SPA Azucena Casanova López. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

