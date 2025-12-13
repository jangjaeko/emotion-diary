import React from "react";
import "./Viewer.css";
import { getEmotionImage } from "../util/get-emotion-image";
import { EmotionList } from "../util/constant";
export default function Viewer({ emotionId, content }) {
  const emotionItem = EmotionList.find((item) => item.emotionId === emotionId);
  return (
    <div className="Viewer">
      <section className="img_section">
        <h4> Today's Emotion </h4>
        <div className={`img_wrapper img_wrapper_${emotionId}`}>
          <img src={getEmotionImage(emotionId)} alt="emotion" />
          <div className="emotion_name">{emotionItem.emotionName}</div>
        </div>
      </section>
      <section className="content_section">
        <h4> Today's Diary </h4>
        <div className="content_wrapper">
          <p>{content}</p>
        </div>
      </section>
    </div>
  );
}
