import React from 'react'
import { CardProps } from '../../interfaces'

const Card: React.FC<CardProps> = ({ 
  title, 
  description, 
  imageUrl 
}) => (
  <div className="border rounded-lg overflow-hidden shadow-md">
    <img 
      src={imageUrl} 
      alt={title} 
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
)

export default Card
