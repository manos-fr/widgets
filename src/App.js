import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

const options = [
  {
    label: "the color red",
    value: "red",
  },
  {
    label: "color green",
    value: "green",
  },
  {
    label: "color blue",
    value: "blue",
  },
];

const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];

function App() {
  return (
    <div>
      {/* <Dropdown options={options} /> */}
      <Search />
      {/* <Accordion items={items} />  */}
    </div>
  );
}

export default App;
