// packages/ui/components/auth/RegisterForm.tsx
'use client'

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export default function RegisterForm() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    // Replace with real API call
    const success = email !== '' && password !== '' && name !== ''

    if (success) {
      router.push('/dashboard') // Or show success message
    } else {
      setError('Please fill in all fields.')
    }
  }

  return (
    <form onSubmit={handleRegister} className="space-y-6">
      <h2 className="text-white text-2xl font-bold text-center">
        Create an Account
      </h2>

      <div>
        <label className="block text-sm text-white mb-1">Full Name</label>
        <input
          type="text"
          className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="block text-sm text-white mb-1">Email</label>
        <input
          type="email"
          className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="block text-sm text-white mb-1">Password</label>
        <input
          type="password"
          className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      {error && <p className="text-red-400 text-sm">{error}</p>}

      <button
        type="submit"
        className="w-full py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-md transition"
      >
        Register
      </button>

      <p className="text-sm text-white/70 text-center">
        Already have an account?{' '}
        <a href="/login" className="text-yellow-400 hover:underline">
          Sign in
        </a>
      </p>
    </form>
  )
}
