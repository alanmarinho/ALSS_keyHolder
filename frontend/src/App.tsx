import { ChangeEvent, useState } from 'react';
import { useAuth } from './contexts/authContext';
import ClipBoardCard from './components/clipBoardCard';
import AuthCard from './components/authCard';
function App() {
  const [searchClipBoard, setSearchClipBoard] = useState<string>('');
  const [teste, setTeste] = useState<string>('S');
  const { authState } = useAuth();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchClipBoard(event.target.value);

    // executar função de filtro na lista de clipboards
  };

  const dataTests = [
    {
      id: 2,
      content: `[AssetHandler] File 'src/components/clipBoardCard.tsx' not found, serving '/src/components/clipBoardCard.tsx' by AssetHandler`,
      type: 'password',
    },
  ];

  return (
    <div className="bg-slate-600 flex flex-col h-screen">
      <div className="flex justify-center items-center">
        <h1 className="text-white p-3">KeyCliper</h1>
      </div>
      <div className="flex flex-1">
        <div className="flex bg-green-500 flex-1  items-center justify-center">
          <input
            className="outline-none"
            name="clipBoardSearch"
            placeholder="Buscar no clipboard"
            onChange={handleInputChange}
          ></input>
          <div>
            {dataTests.map((data) => (
              <ClipBoardCard id={data.id} content={data.content} type={data.type} />
            ))}
          </div>
        </div>
        <div className="flex flex-1  items-center justify-center">
          {!!authState.authenticated ? <h1>autenticado</h1> : <AuthCard />}
        </div>
      </div>
    </div>
  );
}

export default App;
