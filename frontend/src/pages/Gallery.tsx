const Gallery = () => {
  // Imágenes de ejemplo usando placeholders
  const images = [
    {
      id: 1,
      title: 'Ambiente del SPA',
      url: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=600&fit=crop',
      category: 'Ambiente',
    },
    {
      id: 2,
      title: 'Zona de Masajes',
      url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=600&fit=crop',
      category: 'Masajes',
    },
    {
      id: 3,
      title: 'Cabina Estética',
      url: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&h=600&fit=crop',
      category: 'Facial',
    },
    {
      id: 4,
      title: 'Sala de Relajación',
      url: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800&h=600&fit=crop',
      category: 'Ambiente',
    },
    {
      id: 5,
      title: 'Tratamiento Facial',
      url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
      category: 'Facial',
    },
    {
      id: 6,
      title: 'Área de Bienestar',
      url: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800&h=600&fit=crop',
      category: 'Ambiente',
    },
    {
      id: 7,
      title: 'Masaje Terapéutico',
      url: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=600&fit=crop',
      category: 'Masajes',
    },
    {
      id: 8,
      title: 'Espacio de Relajación',
      url: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&h=600&fit=crop',
      category: 'Ambiente',
    },
    {
      id: 9,
      title: 'Tratamiento Corporal',
      url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=600&fit=crop',
      category: 'Masajes',
    },
  ]

  return (
    <div className="min-h-screen bg-spa-bg">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-spa-bg to-spa-bg-light py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Galería
          </h1>
          <div className="w-24 h-1 bg-spa-pink mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Conoce nuestros espacios y ambiente diseñados para tu bienestar
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-lg font-semibold mb-1">{image.title}</h3>
                    <span className="text-sm text-gray-200">{image.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ven y Conoce Nuestro Espacio
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Nuestras instalaciones están diseñadas para brindarte la máxima comodidad 
            y relajación. Cada espacio ha sido cuidadosamente pensado para crear una 
            experiencia única de bienestar.
          </p>
          <a
            href="/contacto"
            className="inline-block bg-spa-pink hover:bg-spa-pink-dark text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Agendar Visita
          </a>
        </div>
      </section>
    </div>
  )
}

export default Gallery

