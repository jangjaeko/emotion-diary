import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import NotFound from "./pages/NotFound";
//1. "/" : Home for Emotion Diary
//2. "/new" : write new diary
//3. "/dirary" : viewing diary contents

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<New />} />
      <Route path="/diary" element={<Diary />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
