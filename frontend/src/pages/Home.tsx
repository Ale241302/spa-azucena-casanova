import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Service } from '../types'

const Home = () => {
  const [services, setServices] = useState<Service[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const apiUrl = (import.meta.env.VITE_API_URL as string) || 'http://localhost:3001'
    fetch(`${apiUrl}/api/services`)
      .then((res) => res.json())
      .then((data) => {
        setServices(data.slice(0, 4)) // Mostrar solo 4 servicios destacados
        setLoading(false)
      })
      .catch((err) => {
        console.error('Error fetching services:', err)
        setLoading(false)
      })
  }, [])

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-spa-bg via-spa-bg-light to-spa-primary py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            SPA Azucena Casanova López
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Bienestar, relajación y cuidado facial y corporal
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/servicios"
              className="bg-spa-pink hover:bg-spa-pink-dark text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Ver Servicios
            </Link>
            <Link
              to="/contacto"
              className="bg-white hover:bg-spa-bg text-spa-pink px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg border-2 border-spa-pink"
            >
              Contactar
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Sobre Nosotros
            </h2>
            <div className="w-24 h-1 bg-spa-pink mx-auto mb-8"></div>
          </div>

          <div className="prose prose-lg mx-auto text-gray-700">
            <p className="text-lg leading-relaxed mb-6">
              Bienvenidos al <strong>SPA Azucena Casanova López</strong>, un espacio dedicado 
              a tu bienestar y cuidado personal. Con más de <strong>10 años de experiencia</strong> 
              en el sector de estética y bienestar, nos especializamos en brindar tratamientos 
              de alta calidad que combinan técnicas profesionales con productos de primera línea.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Nuestra propietaria, <strong>Azucena Casanova López</strong>, ha dedicado su 
              carrera a ayudar a las personas a sentirse mejor consigo mismas, ofreciendo 
              servicios personalizados que se adaptan a las necesidades de cada cliente.
            </p>
            <p className="text-lg leading-relaxed">
              Nos encontramos en <strong>Cartago</strong> y <strong>Obando</strong>, Valle del Cauca, 
              donde ofrecemos un ambiente tranquilo y relajante para que disfrutes de una experiencia 
              única de cuidado y bienestar.
            </p>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 px-4 bg-spa-bg">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Nuestros Servicios
            </h2>
            <div className="w-24 h-1 bg-spa-pink mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ofrecemos una amplia gama de tratamientos para cuidar tu piel y cuerpo
            </p>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-spa-pink"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 hover:scale-105"
                >
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          )}

          <div className="text-center">
            <Link
              to="/servicios"
              className="inline-block bg-spa-pink-400 hover:bg-spa-pink-500 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Ver Todos los Servicios
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-spa-bg to-spa-primary">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            ¿Lista para tu experiencia de bienestar?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Contáctanos hoy mismo y agenda tu cita. Estamos aquí para ayudarte a 
            sentirte y verte mejor.
          </p>
          <Link
            to="/contacto"
            className="inline-block bg-spa-pink-400 hover:bg-spa-pink-500 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Agendar Cita
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home

