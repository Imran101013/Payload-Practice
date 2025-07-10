import React from 'react';
import type { OurLocations as OurLocationsBlockProps } from '@/payload-types';
import { MapPin, Phone, Mail } from 'lucide-react';

export const OurLocations: React.FC<OurLocationsBlockProps> = ({
  title,
  description,
  locations,
}) => {
  return (
    <section className="py-12 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">{title}</h2>
      <p className="text-lg text-center text-gray-600 mb-10">{description}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {locations?.map((location, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">
              {location.locationTitle}
            </h3>
            <div className="flex items-center mb-2">
              <MapPin className="text-blue-600 mr-2" />
              <span>{location.address}</span>
            </div>
            <div className="flex items-center mb-2">
              <Phone className="text-blue-600 mr-2" />
              <span>{location.phoneNumber}</span>
            </div>
            <div className="flex items-center">
              <Mail className="text-blue-600 mr-2" />
              <span>{location.email}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
