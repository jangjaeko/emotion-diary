import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";

export default function New() {
  return (
    <div>
      <Header title="New Diary" leftChild={<Button text={"<"} />} />
      <Editor />
    </div>
  );
}
