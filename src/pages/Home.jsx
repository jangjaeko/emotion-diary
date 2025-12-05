import React from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button.jsx";
import DiraryList from "../components/DiraryList";
export default function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  //   console.log(searchParams.get("id")); // /?id=1234 => 1234
  return (
    <div>
      <Header
        title={"Date"}
        leftChild={<Button text={"<"} />}
        rightChild={<Button text={">"} />}
      />
      <DiraryList />
    </div>
  );
}
