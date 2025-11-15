// Configuración de la API
const API_URL = (import.meta.env.VITE_API_URL || 'http://localhost:3001').replace(/\/$/, '')

export const api = {
  baseURL: API_URL,
  
  async get(endpoint: string) {
    const endpointPath = endpoint.startsWith('/') ? endpoint : `/${endpoint}`
    const response = await fetch(`${API_URL}${endpointPath}`)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    return response.json()
  },
  
  async post(endpoint: string, data: any) {
    const endpointPath = endpoint.startsWith('/') ? endpoint : `/${endpoint}`
    const response = await fetch(`${API_URL}${endpointPath}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    if (!response.ok) {
      const error = await response.json().catch(() => ({ error: 'Error desconocido' }))
      throw new Error(error.error || `HTTP error! status: ${response.status}`)
    }
    return response.json()
  },
}

