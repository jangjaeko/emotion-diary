import { getEmotionImage } from "../util/get-emotion-image";
import Button from "./Button";
import "./DiaryItem.css";
export default function DiaryItem() {
  const emotionId = 1;
  return (
    <div className="DiaryItem">
      {/* emotion img  */}
      <div className={`img_section img_section_${emotionId}`}>
        <img src={getEmotionImage(1)} alt="" />
      </div>
      {/* info section */}
      <div className="info_section">
        <div className="created_date">{new Date().toLocaleDateString()}</div>
        <div className="cotent">content</div>
      </div>
      {/* button section */}
      <div className="button_section">
        <Button text={"Edit"} onClick={() => {}} />
      </div>
    </div>
  );
}
