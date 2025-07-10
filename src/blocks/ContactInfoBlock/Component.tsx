'use client'

import React from 'react'
import type { ContactInfoBlock as ContactInfoBlockProps } from '@/payload-types'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { FormBlock } from '../Form/Component'

export const ContactInfoBlock: React.FC<ContactInfoBlockProps> = ({
  address,
  phone,
  email,
  businessHours,
  form,
  responseTitle,
  responseContent,
}) => {
  const transformedForm: any | null = typeof form === 'object' && form !== null ? form : null
  return (
    <div className="flex container">
      <div className="w-[800px]">
        <FormBlock form={transformedForm} enableIntro={false} />
      </div>
      <div className="flex flex-col w-[400px]">
        <div className="bg-gray-100 rounded-lg p-6 mt-20 mb-4">
          <h2 className="text-xl font-bold mb-6">Contact Information</h2>

          <div className="flex items-start mb-4">
            <MapPin className="text-blue-600 mr-3 mt-1" />
            <div>
              <strong className="block">Address</strong>
              <p>{address}</p>
            </div>
          </div>

          <div className="flex items-start mb-4">
            <Phone className="text-blue-600 mr-3 mt-1" />
            <div>
              <strong className="block">Phone</strong>
              <p>{phone}</p>
            </div>
          </div>

          <div className="flex items-start mb-4">
            <Mail className="text-blue-600 mr-3 mt-1" />
            <div>
              <strong className="block">Email</strong>
              <p>{email}</p>
            </div>
          </div>

          <div className="flex items-start">
            <Clock className="text-blue-600 mr-3 mt-1" />
            <div>
              <strong className="block">Business Hours</strong>
              <p>{businessHours}</p>
            </div>
          </div>
        </div>

        <div className="bg-blue-100 rounded-lg p-6 mt-4 mb-4">
          <h2 className="text-xl font-bold">{responseTitle}</h2>
          <p className="mt-4">{responseContent}</p>
        </div>
      </div>
    </div>
  )
}
