'use client'

import React from 'react'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Home, User, Briefcase, Mail } from 'lucide-react'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []

  const getIcon = (label: string) => {
    switch (label.toLowerCase()) {
      case 'home':
        return <Home size={16} />
      case 'about':
        return <User size={16} />
      case 'services':
        return <Briefcase size={16} />
      case 'contact':
        return <Mail size={16} />
      default:
        return null
    }
  }

  return (
    <nav className="flex gap-3 items-center">
      {navItems.map(({ link }, i) => {
        const icon = getIcon(link.label || '')
        return (
          <div className="flex items-center text-gray-600 hover:text-blue-600 hover:bg-gray-50 px-1" key={i}>
            {icon}
            <CMSLink
              key={i}
              {...link}
              appearance="link"
              className="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center gap-2"
            ></CMSLink>
          </div>
        )
      })}
    </nav>
  )
}
