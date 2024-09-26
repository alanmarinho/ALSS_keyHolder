import { ChangeEventHandler } from 'react';

interface SearchProps {
  name: string;
  setFunction: ChangeEventHandler<HTMLInputElement>;
  Placeholder: string;
}

export default function Search({ name, setFunction, Placeholder }: SearchProps) {
  return (
    <div className="flex">
      <input name={name} placeholder={Placeholder} onChange={setFunction}></input>
    </div>
  );
}
