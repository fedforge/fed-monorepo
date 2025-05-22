// apps/web/app/auth/layout.tsx
import React from "react";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 px-4">
      <div className="absolute top-8 md:top-10 text-white text-2xl font-extrabold tracking-widest">
        FED
      </div>

      <div className="w-full max-w-md p-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-2xl shadow-black/50">
        {children}
      </div>
    </div>
  );
}
