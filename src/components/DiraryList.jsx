import React from "react";
import Button from "./Button";
import "./DiaryList.css";
import DiaryItem from "./DiaryItem";

export default function DiraryList() {
  return (
    <div className="DiaryList">
      {/* menu bar */}
      <div className="menu_bar">
        <select>
          <option value={"latest"}> latest </option>
          <option value={"oldest"}> oldest </option>
        </select>
        <Button text={"New Diary"} type={"POSITIVE"} onClick={() => {}} />
      </div>

      {/* diary list  */}
      <div className="list_wrapper">
        <DiaryItem />
      </div>
    </div>
  );
}
