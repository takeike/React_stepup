import { useState } from "react";
import { ChildArea } from "./ChildArea";
import "./styles.css";

export default function App() {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => {
    setText(e.target.value);
  };

  const addCount = () => {
    return countSet(count + 1);
  };

  const onClickDist = () => {
    setOpen(!open);
  };

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickDist}>表示</button>
      <ChildArea open={open} />
    </div>
  );
}
