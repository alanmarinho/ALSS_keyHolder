interface ClipBoardCardProps {
  id: number;
  content: string;
  type: string;
}

export default function ClipBoardCard({ id, content, type }: ClipBoardCardProps) {
  return (
    <div className="flex flex-1  items-center justify-center">
      <h1>{id}</h1>
      <h1>{content}</h1>
      <h1>{type}</h1>
      <h1>action</h1>
    </div>
  );
}
