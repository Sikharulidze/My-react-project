import { useState } from "react";

const Info = () => {
    const dark = useScore((state) => state.dark) 
  const [score, setScore] = useState(0);
  const name = "Mariam";

  const increase = () => {
    setScore(score + 1);
  };
  return (
    <div className="first-container flex justify-around items-center">
      <div className="first-container-center-text">
        <h1>Group Chat For Everyone : {score}</h1>
        <p style={{ color: dark ? "green" : "red" }}>
          Meet {name} it's easy to connect with others face-to-face virtually
          and collaborate across any device.
        </p>
        <div className="button flex justify-center gap-4">
          <span className="w-193 h-58 rounded-full">
            <p>v1.3</p>
          </span>
          <button onClick={increase}>correct</button>
        </div>
      </div>
    </div>
  );
};

export default Info;
