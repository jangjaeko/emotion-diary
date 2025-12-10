import { useState } from "react";
import "./Editor.css";
import EmotionItem from "./EmotionItem";
import Button from "./Button";
const EmotionList = [
  { emotionId: 1, emotionName: "Happy" },
  { emotionId: 2, emotionName: "Good" },
  { emotionId: 3, emotionName: "soso" },
  { emotionId: 4, emotionName: "bad" },
  { emotionId: 5, emotionName: "Angry" },
];

export default function Editor() {
  const [selectedEmotion, setSelectedEmotion] = useState(3);
  return (
    <div className="Editor">
      <section className="date_section">
        <h4>Today Date</h4>
        <input className="date_input" type="date" />
      </section>
      <section className="emotion_section">
        <h4>Today's Emotion</h4>
        <div className="emotion_list_wrapper">
          {EmotionList.map((emotion) => {
            return (
              <EmotionItem
                key={emotion.emotionId}
                {...emotion}
                isSelected={emotion.emotionId === selectedEmotion}
              />
            );
          })}
        </div>
      </section>
      <section className="content_section">
        <h4>Today's Diary</h4>
        <textarea placeholder="How was your day?" />
      </section>
      <section className="button_section">
        <Button text={"Cancel"} />
        <Button text={"Save"} type={"POSITIVE"} />
      </section>
    </div>
  );
}
