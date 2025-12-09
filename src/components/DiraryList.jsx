import { useState } from "react";
import Button from "./Button";
import "./DiaryList.css";
import DiaryItem from "./DiaryItem";
import { useNavigate } from "react-router-dom";
export default function DiraryList({ data }) {
  const navigate = useNavigate();
  const [sortType, setSortType] = useState("latest");
  const onChangeSortType = (e) => {
    setSortType(e.target.value);
  };

  const getSortedData = () => {
    return data.toSorted((a, b) => {
      if (sortType === "oldest") {
        return Number(a.createdDate) - Number(b.createdDate);
      } else {
        return Number(b.createdDate) - Number(a.createdDate);
      }
    });
  };
  const sortedData = getSortedData();
  return (
    <div className="DiaryList">
      {/* menu bar */}
      <div className="menu_bar" onChange={onChangeSortType}>
        <select>
          <option value={"latest"}> latest </option>
          <option value={"oldest"}> oldest </option>
        </select>
        <Button
          text={"New Diary"}
          type={"POSITIVE"}
          onClick={() => navigate("/new")}
        />
      </div>

      {/* diary list  */}
      <div className="list_wrapper">
        {sortedData.map((item) => (
          <DiaryItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
