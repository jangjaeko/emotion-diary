import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useNavigate } from "react-router-dom";
import { use, useContext, useEffect } from "react";
import { DiaryDispatchContext } from "../App";
import usePageTitle from "../hooks/usePageTitle";

export default function New() {
  const navigate = useNavigate();
  const { onCreate } = useContext(DiaryDispatchContext);
  const onSubmit = (input) => {
    onCreate(input.createdDate.getTime(), input.emotionId, input.content);
    navigate("/", { replace: true });
  };
  usePageTitle("New Diary");

  return (
    <div>
      <Header
        title="New Diary"
        leftChild={<Button text={"<"} onClick={() => navigate(-1)} />}
      />
      <Editor onSubmit={onSubmit} />
    </div>
  );
}
