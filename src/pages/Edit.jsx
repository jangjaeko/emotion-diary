import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useContext, useState } from "react";
import { DiaryDispatchContext } from "../App";
import { DiaryStateContext } from "../App";
import useDiary from "../hooks/useDiary";
export default function Edit() {
  const params = useParams();
  const navigate = useNavigate();
  const { onUpdate, onDelete } = useContext(DiaryDispatchContext);
  const onClickDelete = () => {
    if (window.confirm("are you sure to delete this diary?")) {
      onDelete(params.id);
      navigate("/", { replace: true });
    } else {
      return;
    }
  };
  const currentDiaryData = useDiary(params.id);
  const onSubmit = (input) => {
    onUpdate(
      params.id,
      input.createdDate.getTime(),
      input.emotionId,
      input.content
    );
    navigate("/", { replace: true });
  };

  return (
    <div>
      <Header
        title={`Edit Diary `}
        leftChild={<Button text={"<"} onClick={() => navigate(-1)} />}
        rightChild={
          <Button text={"delete"} type={"NEGATIVE"} onClick={onClickDelete} />
        }
      />
      <Editor initialData={currentDiaryData} onSubmit={onSubmit} />
    </div>
  );
}
