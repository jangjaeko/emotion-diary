import "./App.css";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import NotFound from "./pages/NotFound";
import Edit from "./pages/Edit";

import { getEmotionImage } from "./util/get-emotion-image";

import { useReducer, useRef, createContext, useState, useEffect } from "react";
//1. "/" : Home for Emotion Diary
//2. "/new" : write new diary
//3. "/dirary" : viewing diary contents
//4. "/edit" : editing diary contents

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function reducer(state, action) {
  let newState;
  switch (action.type) {
    case "INIT":
      return action.data;
    case "CREATE": {
      newState = [action.data, ...state];
      break;
    }
    case "UPDATE": {
      newState = state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item
      );
      break;
    }
    case "DELETE": {
      newState = state.filter(
        (item) => String(item.id) !== String(action.targetId)
      );
      break;
    }

    default:
      return state;
  }
  localStorage.setItem("diary", JSON.stringify(newState));
  return newState;
}

function App() {
  const [data, dispatch] = useReducer(reducer, []);
  const dataId = useRef(0);
  const [isLoading, setIsLoading] = useState(true);

  //add diary
  const onCreate = (createdDate, emotionid, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: dataId.current++,
        createdDate: createdDate,
        emotionId: emotionid,
        content: content,
      },
    });
  };
  useEffect(() => {
    const localData = localStorage.getItem("diary");
    if (!localData) {
      setIsLoading(false);
      return;
    }
    const parsedData = JSON.parse(localData);
    let maxId = 0;
    if (!Array.isArray(parsedData)) {
      setIsLoading(false);
      return;
    }
    parsedData.forEach((item) => {
      if (item.id >= maxId) {
        maxId = item.id + 1;
      }
    });
    dataId.current = maxId;

    dispatch({ type: "INIT", data: parsedData });
    setIsLoading(false);
  }, []);

  // edit diary
  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data: { id, createdDate, emotionId, content },
    });
  };
  // delete diary
  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      targetId: id,
    });
  };
  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  return (
    <>
      <DiaryStateContext value={data}>
        <DiaryDispatchContext value={{ onCreate, onDelete, onUpdate }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </DiaryDispatchContext>
      </DiaryStateContext>
    </>
  );
}

export default App;
