import "./App.css";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import NotFound from "./pages/NotFound";
import Edit from "./pages/Edit";

import { getEmotionImage } from "./util/get-emotion-image";
import Button from "./components/button";
import Header from "./components/Header";

import { useReducer, useRef, createContext } from "react";
//1. "/" : Home for Emotion Diary
//2. "/new" : write new diary
//3. "/dirary" : viewing diary contents
//4. "/edit" : editing diary contents

const tempData = [
  {
    id: 1,
    createdDate: new Date().getTime(),
    emotionid: 1,
    content: "Today I felt so happy!",
  },
  {
    id: 2,
    createdDate: new Date().getTime(),
    emotionid: 2,
    content: "Today I felt sad.",
  },
];

const DiaryStateContext = createContext();
const DiaryDispatchContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "CREATE": {
      return [action.data, ...state];
    }
    case "UPDATE": {
      return state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item
      );
    }
    case "DELETE": {
      return state.filter(
        (item) => String(item.id) !== String(action.targetId)
      );
    }
    default:
      return state;
  }
}

function App() {
  const [data, dispatch] = useReducer(reducer, tempData);
  const dataId = useRef(3);
  //add diary
  const onCreate = (createdDate, emotionid, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: dataId.current++,
        createdDate: new Date().getTime(),
        emotionid,
        content,
      },
    });
  };
  // edit diary
  const onUpdate = (id, createdDate, emotionid, content) => {
    dispatch({
      type: "UPDATE",
      data: { id, createdDate, emotionid, content },
    });
  };
  // delete diary
  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      targetId: id,
    });
  };

  return (
    <>
      {/* <Header
        title={"Header"}
        leftChild={<Button text={"Left"} />}
        rightChild={<Button text={"Right"} />}
      />
      <Button /> */}
      <button onClick={onDelete(1)}>TEST BUTTON</button>
      <DiaryStateContext value={data}>
        <DiaryDispatchContext value={(onCreate, onDelete, onUpdate)}>
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
