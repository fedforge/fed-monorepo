// packages/hooks/useMockSession.ts

import { useState, useEffect } from "react";

export function useMockSession() {
  const [user, setUser] = useState<null | { email: string }>(null);

  useEffect(() => {
    const stored = localStorage.getItem("mockUser");
    if (stored) setUser(JSON.parse(stored));
  }, []);

  const login = (email: string) => {
    const user = { email };
    localStorage.setItem("mockUser", JSON.stringify(user));
    setUser(user);
  };

  const logout = () => {
    localStorage.removeItem("mockUser");
    setUser(null);
  };

  return { user, login, logout };
}
