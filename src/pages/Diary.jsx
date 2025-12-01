import { useParams } from "react-router-dom";
export default function Diary() {
  const params = useParams();
  return (
    <div>
      Diary's
      <h1>{params.id}</h1>
    </div>
  );
}
