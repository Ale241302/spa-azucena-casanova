export interface Service {
  id: number
  name: string
  description: string
  durationMinutes: number
  price: number | string
  isActive: boolean
  createdAt?: string
  updatedAt?: string
}

export interface ContactMessage {
  id: number
  name: string
  email: string
  phone?: string
  message: string
  createdAt: string
}

