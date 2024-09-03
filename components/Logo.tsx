'use client'

import React from 'react'
import { useTheme } from 'next-themes'

import LogoDark from '@/data/logo-dark.svg'
import LogoWhite from '@/data/logo-white.svg'

const Logo = () => {
  const { theme } = useTheme()

  return <div className="mr-3">{theme === 'dark' ? <LogoWhite /> : <LogoDark />}</div>
}

export default Logo
