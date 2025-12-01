import "./App.css";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import NotFound from "./pages/NotFound";
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
