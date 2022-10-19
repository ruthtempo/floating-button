import React, { useRef, useState } from "react";
import "./App.css";

const placeholders = new Array(99).fill(0).map((_, i) =>
  <p key={i} style={{ width: `${Math.random() * 75}%` }} />
)

function App() {
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const timeoutId = useRef<NodeJS.Timeout>();

  const handleScroll: React.UIEventHandler<HTMLDivElement> = (_) => {
    setIsScrolling(true);
    clearTimeout(timeoutId.current);
    timeoutId.current = setTimeout(() => setIsScrolling(false), 500);
  };

  return (
    <div onScroll={handleScroll}>
      <h1>Collapsible Floating Action Button</h1>
      {placeholders}
      <button className={isScrolling ? "isScrolling" : ""}>
        <strong>A</strong>
        <span>
          ction
        </span>
      </button>
    </div>
  );
}

export default App;
