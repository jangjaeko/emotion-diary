import React, { useState, useContext, use } from "react";
// import { useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button.jsx";
import DiraryList from "../components/DiraryList";
import { DiaryStateContext } from "../App";

export default function Home() {
  // const [searchParams, setSearchParams] = useSearchParams();
  //   console.log(searchParams.get("id")); // /?id=1234 => 1234
  const data = useContext(DiaryStateContext);
  const [pivotDate, setPivotDate] = useState(new Date()); //current date
  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };

  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };
  const getMonthData = (pivotDate, data) => {
    const firstDay = new Date(
      pivotDate.getFullYear(),
      pivotDate.getMonth(),
      1
    ).getTime();
    const lastDay = new Date(
      pivotDate.getFullYear(),
      pivotDate.getMonth() + 1,
      0,
      23,
      59,
      59
    ).getTime();

    return data.filter(
      (item) => firstDay <= item.createdDate && item.createdDate <= lastDay
    );
  };
  const montlyData = getMonthData(pivotDate, data);

  return (
    <div>
      <Header
        title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
        leftChild={<Button onClick={onDecreaseMonth} text={"<"} />}
        rightChild={<Button onClick={onIncreaseMonth} text={">"} />}
      />
      <DiraryList data={montlyData} />
    </div>
  );
}
