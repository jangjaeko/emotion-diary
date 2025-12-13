import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Viewer from "../components/Viewer";
import { useContext } from "react";
import { DiaryStateContext } from "../App";
import { useNavigate } from "react-router-dom";
import useDiary from "../hooks/useDiary";
export default function Diary() {
  const params = useParams();
  const navigate = useNavigate();

  const currentDiaryData = useDiary(params.id);
  if (!currentDiaryData) {
    return <div>Loading...</div>;
  }
  const { createdDate, emotionId, content } = currentDiaryData;
  const title = `Diary of ${new Date(createdDate).toISOString().slice(0, 10)}`;
  return (
    <div>
      <Header
        title={title}
        leftChild={<Button text={"<"} onClick={() => navigate(-1)} />}
        rightChild={
          <Button
            text={"edit"}
            onClick={() => navigate(`/edit/${params.id}`)}
          />
        }
      />
      <Viewer emotionId={emotionId} content={content} />
    </div>
  );
}
