import { useState } from 'react';
import { useAuth } from '../contexts/authContext';

export default function AuthCard() {
  const [password, setPassword] = useState<string>('');
  const [test, setTest] = useState<string>('S');
  const { onUserVerify } = useAuth();

  const handleSubmit = async () => {
    onUserVerify(password);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="bg-slate-300 p-5">
      <h1>digite sua senha</h1>

      <input type="password" onChange={(e) => setPassword(e.target.value)} onKeyDown={handleKeyDown} />
      <button onClick={handleSubmit}>Entrar</button>
      <h1>{test}</h1>
      <h1>{password}</h1>
    </div>
  );
}
