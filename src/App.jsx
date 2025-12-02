import "./App.css";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import NotFound from "./pages/NotFound";
import { getEmotionImage } from "./util/get-emotion-image";

//1. "/" : Home for Emotion Diary
//2. "/new" : write new diary
//3. "/dirary" : viewing diary contents

function App() {
  const nav = useNavigate();
  const onClickBtn = () => {
    nav("/new");
  };
  return (
    <>
      <div>
        <img src={getEmotionImage(1)} />{" "}
        {/* image bit optimization, data uri format, 
        if refresh, we could get image from cache. 
        But too many images could slow down initial load. */}
        <img src={getEmotionImage(2)} />
        <img src={getEmotionImage(3)} />
        <img src={getEmotionImage(4)} />
        <img src={getEmotionImage(5)} />
      </div>
      <div>
        <Link to="/">Home</Link> | <Link to="/new">New Diary</Link> |{" "}
        <Link to="/diary">Diary</Link>
      </div>
      <button onClick={onClickBtn}> move to new </button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
