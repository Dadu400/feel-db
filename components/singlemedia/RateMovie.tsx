"use client";

import { useState } from "react";
import EmotionButton from "./EmotionButton";

const emotions = [
  { label: "Happiness", svg: "/emotions/happiness.svg" },
  { label: "Sadness", svg: "/emotions/sadness.svg" },
  { label: "Fear", svg: "/emotions/fear.svg" },
  { label: "Anger", svg: "/emotions/anger.svg" },
  { label: "Disgust", svg: "/emotions/disgust.svg" },
  { label: "Surprise/Shock", svg: "/emotions/surprise.svg" },
  { label: "Love", svg: "/emotions/love.svg" },
  { label: "Nostalgia", svg: "/emotions/nostalgia.svg" },
  { label: "Humor", svg: "/emotions/humor.svg" },
  { label: "Anticipation", svg: "/emotions/anticipation.svg" },
  { label: "Excitement", svg: "/emotions/excitement.svg" },
  { label: "Anxiety", svg: "/emotions/anxiety.svg" },
  { label: "Guilt", svg: "/emotions/guilt.svg" },
  { label: "Inspiration", svg: "/emotions/inspiration.svg" },
  { label: "Envy", svg: "/emotions/envy.svg" },
  { label: "Empathy", svg: "/emotions/empathy.svg" },
  { label: "Relief", svg: "/emotions/relief.svg" },
  { label: "Satisfaction", svg: "/emotions/satisfaction.svg" },
  { label: "Awe", svg: "/emotions/awe.svg" },
];

interface RateMovieProps {
  border?: boolean;
  rows?: number;
  showConfirm?: boolean;
  cursorPointer?: boolean;
}

const RateMovie: React.FC<RateMovieProps> = ({
  border = false,
  rows = 1,
  showConfirm = true,
  cursorPointer = true,
}) => {
  const [selectedEmotion, setSelectedEmotion] = useState<string | null>(null);

  const handleClick = (emotion: string) => {
    setSelectedEmotion(emotion);
  };

  const handleConfirm = () => {
    if (selectedEmotion) {
      alert(`You selected: ${selectedEmotion}`);
    }
  };

  const gridClass = rows === 1 ? "grid-cols-1" : "grid-cols-2 gap-x-10 gap-y-[1px]";

  return (
    <div className={`bg-black rounded-lg w-64 h-[600px] ${border ? 'border border-[#262626] p-6 w-full' : ''}`}>
      <h2 className="text-white text-lg mb-4 font-medium">Rate the Movie</h2>
      <div
        className={`grid ${gridClass} overflow-y-auto`}
        style={{paddingRight: "10px", height: "calc(100% - 56px)" }}
      >
        {emotions.map((emotion) => (
          <EmotionButton
            key={emotion.label}
            svg={emotion.svg}
            label={emotion.label}
            onClick={() => handleClick(emotion.label)}
            cursorPointer={cursorPointer}
          />
        ))}
      </div>
      {showConfirm && (
        <button
          className="mt-4 w-full p-2 py-1 bg-orange rounded-2xl uppercase"
          onClick={handleConfirm}
        >
          Confirm
        </button>
      )}
    </div>
  );
};

export default RateMovie;
