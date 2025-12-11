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

const getDateString = (date) => {
  // yyyy-mm-dd
  return date.toISOString().slice(0, 10);
};

export default function Editor({ onSubmit }) {
  const [selectedEmotion, setSelectedEmotion] = useState(3);
  const [userInput, setUserInput] = useState({
    createdDate: new Date(),
    emotionId: 3,
    content: "",
  });

  const onChangeDate = (e) => {
    setUserInput({ ...userInput, createdDate: new Date(e.target.value) });
  };
  const handleEmotionClick = (emotionId) => {
    setUserInput({ ...userInput, emotionId: emotionId });
  };
  const onSubmitHandler = () => {
    onSubmit(userInput);
  };

  return (
    <div className="Editor">
      <section className="date_section">
        <h4>Today Date</h4>
        <input
          className="date_input"
          type="date"
          value={getDateString(userInput.createdDate)}
          onChange={onChangeDate}
        />
      </section>
      <section className="emotion_section">
        <h4>Today's Emotion</h4>
        <div className="emotion_list_wrapper">
          {EmotionList.map((emotion) => {
            return (
              <EmotionItem
                key={emotion.emotionId}
                {...emotion}
                handleEmotionClick={handleEmotionClick}
                isSelected={emotion.emotionId === userInput.emotionId}
              />
            );
          })}
        </div>
      </section>
      <section className="content_section">
        <h4>Today's Diary</h4>
        <textarea
          placeholder="How was your day?"
          value={userInput.content}
          onChange={(e) =>
            setUserInput({ ...userInput, content: e.target.value })
          }
        />
      </section>
      <section className="button_section">
        <Button text={"Cancel"} />
        <Button text={"Save"} type={"POSITIVE"} onClick={onSubmitHandler} />
      </section>
    </div>
  );
}
