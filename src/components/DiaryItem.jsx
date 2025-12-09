import { getEmotionImage } from "../util/get-emotion-image";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import "./DiaryItem.css";
export default function DiaryItem({ id, emotionId, createdDate, content }) {
  const navigate = useNavigate();
  return (
    <div className="DiaryItem">
      {/* emotion img  */}
      <div
        onClick={() => navigate(`/diary/${id}`)}
        className={`img_section img_section_${emotionId}`}
      >
        <img src={getEmotionImage(emotionId)} alt="" />
      </div>
      {/* info section */}
      <div className="info_section">
        <div className="created_date">
          {new Date(createdDate).toUTCString().slice(0, 16)}
        </div>
        <div className="content">{content}</div>
      </div>
      {/* button section */}
      <div className="button_section">
        <Button onClick={() => navigate(`/edit/${id}`)} text={"Edit"} />
      </div>
    </div>
  );
}
