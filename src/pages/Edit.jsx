import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";

export default function Edit() {
  const params = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <Header
        title={`Edit Diary `}
        leftChild={<Button text={"<"} onClick={() => navigate(-1)} />}
        rightChild={<Button text={"delete"} type={"NEGATIVE"} />}
      />
      <Editor />
    </div>
  );
}
