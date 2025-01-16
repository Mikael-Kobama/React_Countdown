import { useState } from "react";
import "./App.css";
import Title from "./components/Title";
import Counter from "./components/Counter";
import useCountDown from "./hooks/UseCountDown";

import NewYear from "./assets/firework.jpeg";

function App() {
  const [day, hour, minute, second] = useCountDown("Jan 1, 2026 00:00:00");

  return (
    <div className="App" style={{ backgroundImage: `url(${NewYear})` }}>
      <div className="container">
        <Title title="countdown to 2026" />
        <div className="countdown-container">
          <Counter title="Days" number={day} />
          <Counter title="Hours" number={hour} />
          <Counter title="Minutes" number={minute} />
          <Counter title="Seconds" number={second} />
        </div>
      </div>
    </div>
  );
}

export default App;
