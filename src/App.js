import { useState, useEffect, memo } from "react";

function Self() {
  const [cnt, setCnt] = useState(0);
  const [text, setText] = useState("");
  const [btnNm, setBtnNm] = useState("클릭");

  const onClick = () => setCnt((cur) => cur + 1);
  const onClick2 = () => {
    setCnt(() => 0);
    setBtnNm("클릭");
    setText("");
  };
  const onClick3 = () => setBtnNm(text);
  const onChange = (event) => setText(event.target.value);

  return (
    <div>
      <h1>클릭횟수 : {cnt}</h1>
      <input onChange={onChange} value={text} type="text" />
      <button onClick={onClick3}>버튼명변경</button>
      <div>
        <button onClick={onClick}>{btnNm}</button>
        <button onClick={onClick2}>초기화</button>
      </div>
    </div>
  );
}

export default Self;
