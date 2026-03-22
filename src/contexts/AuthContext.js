import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const data = localStorage.getItem("user");
    if (data) setUser(JSON.parse(data)); // ✅ parse
  }, []);
  const register = (userData) => {
    if (
      !userData.name ||
      !userData.email ||
      !userData.password ||
      userData.password.length < 6
    ) {
      alert("Please fill all fields with valid password (min 6 chars)");
      return;
    }

    const newUser = {
      name: userData.name,
      email: userData.email
    };

    localStorage.setItem("user", JSON.stringify(newUser)); 
    setUser(newUser);
  };
  const login = (userData) => {
    if (!userData.email || !userData.password) {
      alert("Enter email and password");
      return;
    }

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser || storedUser.email !== userData.email) {
      alert("User not found");
      return;
    }

    setUser(storedUser);
  };
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}