import { FloatingNav } from '@/components/ui/FloatingNav'
import { post } from '@/data'
import React from 'react'
import HeroEleven from './Hero'


export const metadata = {
  title: 'Eleven',
  description: 'A complete digital solution for schools, specializing in social media management and website development, designed to amplify your institution’s presence and engagement.',
}

export default function Eleven() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={post} />
        <HeroEleven />
  
      </div>
    </main>
  )
}