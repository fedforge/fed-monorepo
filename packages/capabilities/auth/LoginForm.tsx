// packages/ui/components/auth/LoginForm.tsx
'use client'

import { useRouter } from 'next/navigation'
import { useMockSession } from 'packages/shared/hooks/useMockSession'
import { useState } from 'react'

export default function LoginForm() {
  const router = useRouter()
  const { login } = useMockSession()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    const success = email === 'test@test.com' && password === 'test'

    if (success) {
      login(email)
      router.push('/dashboard')
    } else {
      setError('Invalid credentials')
    }
  }

  return (
    <form onSubmit={handleLogin} className="space-y-6">
      <h2 className="text-white text-2xl font-bold text-center">
        Login to FED
      </h2>

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
        Sign In
      </button>

      <p className="text-sm text-white/70 text-center">
        Don’t have an account?{' '}
        <a href="/register" className="text-yellow-400 hover:underline">
          Sign up
        </a>
      </p>
    </form>
  )
}
