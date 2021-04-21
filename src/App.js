import React from "react";
import Accordion from "./components/Accordion";

const items = [
  { title: "What is React", content: "Great!!" },
  { title: "Why React", content: "React is the best" },
  { title: "How to use?", content: "By creating components" },
];

function App() {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
}

export default App;
