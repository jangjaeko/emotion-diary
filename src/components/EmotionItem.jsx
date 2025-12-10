import "./EmotionItem.css";
import { getEmotionImage } from "../util/get-emotion-image";
export default function EmotionItem({ emotionId, emotionName, isSelected }) {
  return (
    <div className={`EmotionItem ${isSelected ? `selected_${emotionId}` : ""}`}>
      <img
        className="emotion_img"
        src={getEmotionImage(emotionId)}
        alt={emotionName}
      />
      <div className="emotion_name">{emotionName}</div>
    </div>
  );
}
