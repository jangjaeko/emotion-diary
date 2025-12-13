import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DiaryStateContext } from "../App";

const useDiary = (id) => {
  const navigate = useNavigate();
  const data = useContext(DiaryStateContext);
  const [currentDiaryData, setCurrentDiaryData] = useState();
  useEffect(() => {
    const currentDiary = data.find((item) => String(item.id) === String(id));
    if (!currentDiary) {
      window.alert("No such diary exists");
      navigate("/", { replace: true });
      return;
    } else {
      setCurrentDiaryData(currentDiary);
    }
  }, [id]);
  return currentDiaryData;
};

export default useDiary;
