'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useUser } from '@clerk/nextjs'

function generateUsername(email: string) {
  const base = email.split('@')[0].replace(/[^a-z0-9]/gi, '').toLowerCase()
  return `${base}${Math.floor(1000 + Math.random() * 9000)}`
}

export default function OnboardingPage() {
  const { user, isLoaded } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (!isLoaded || !user) return
    if (user.username) {
      router.replace('/')
      return
    }

    const email = user.emailAddresses[0]?.emailAddress
    if (!email) return

    user.update({ username: generateUsername(email) }).then(() => {
      router.replace('/')
    })
  }, [isLoaded, user, router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-green-400">
      Setting up your profile…
    </div>
  )
}
