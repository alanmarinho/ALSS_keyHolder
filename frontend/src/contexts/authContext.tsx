import React, { createContext, useContext, useState } from 'react';
import { UserAuthVerify } from '../../wailsjs/go/backend/App';

// Corrigindo o nome da interface e o campo "authenticated"
interface AuthContextProps {
  authenticated: boolean;
}

interface AuthProps {
  authState: AuthContextProps;
  onUserVerify: (password: string) => Promise<void>;
}

// O nome correto do contexto, deve ser "AuthContext"
const AuthContext = createContext<AuthProps>({} as AuthProps);

// Hook customizado para acessar o contexto
export const useAuth = () => {
  return useContext(AuthContext);
};

// Provedor do contexto
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [authState, setAuthState] = useState<AuthContextProps>({ authenticated: false });

  const userVerify = async (password: string) => {
    const response = await UserAuthVerify(password);
    setAuthState({ authenticated: response });
  };

  const value = {
    authState, // o estado de autenticação
    onUserVerify: userVerify, // função que verifica o usuário
  };

  // Aqui, o nome do Provider precisa estar correto: "AuthContext.Provider"
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
