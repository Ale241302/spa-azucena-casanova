import { useEffect, useState } from 'react'
import { Service } from '../types'

const Services = () => {
  const [services, setServices] = useState<Service[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/services')
      .then((res) => res.json())
      .then((data) => {
        setServices(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error('Error fetching services:', err)
        setLoading(false)
      })
  }, [])

  const handleConsultar = (serviceName: string) => {
    const phoneNumber = '573122057768'
    const message = encodeURIComponent(`Hola, estoy interesado en el servicio: ${serviceName}`)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="min-h-screen bg-spa-bg">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-spa-bg to-spa-bg-light py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Nuestros Servicios
          </h1>
          <div className="w-24 h-1 bg-spa-pink mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Tratamientos profesionales de estética y bienestar diseñados para ti
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          {loading ? (
            <div className="text-center py-20">
              <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-spa-pink"></div>
              <p className="mt-4 text-gray-600">Cargando servicios...</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {services.map((service) => (
                  <div
                    key={service.id}
                    className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:scale-105"
                  >
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        {service.name}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="pt-4 border-t border-gray-200">
                        <button 
                          onClick={() => handleConsultar(service.name)}
                          className="w-full bg-spa-pink hover:bg-spa-pink-dark text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-md"
                        >
                          Consultar
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Services Note */}
              <div className="bg-white rounded-xl shadow-md p-8 text-center max-w-3xl mx-auto">
                <p className="text-lg text-gray-700 mb-4">
                  Además de estos servicios, ofrecemos una amplia variedad de tratamientos 
                  personalizados según tus necesidades.
                </p>
                <p className="text-gray-600">
                  Contáctanos para más información sobre nuestros servicios adicionales y 
                  paquetes especiales.
                </p>
              </div>
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-spa-bg to-spa-primary">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            ¿Tienes alguna pregunta sobre nuestros servicios?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Estamos aquí para ayudarte. Contáctanos y te asesoraremos sobre el mejor 
            tratamiento para ti.
          </p>
          <a
            href="/contacto"
            className="inline-block bg-spa-pink hover:bg-spa-pink-dark text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Contactar Ahora
          </a>
        </div>
      </section>
    </div>
  )
}

export default Services

