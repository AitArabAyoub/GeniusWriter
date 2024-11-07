"use client"
import { useUser } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

function Header() {
  const {user} = useUser()
  return (
    <header className='flex p-2 border-b'>
      <div className='flex-grow flex justify-center items-center'>
        <h2 className='bg-primary text-white p-2 rounded-md'>Welcome Back, {user?.fullName}</h2>
      </div>
      <Link href="/" className='btn-primary'>Back Home</Link>
    </header>
  )
}

export default Header
