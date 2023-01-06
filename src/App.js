import { useState, useEffect } from "react";

function Hello() {
  // clean-up에 대한 내용. 아래 1, 2, 3 결과적으론 다 같은 역할인데 어떻게 작성하냐 차이
  // 1
  function byeFn() {
    console.log("bye :(");
  }
  function hiFn() {
    console.log("created :)");
    return byeFn;
  }
  useEffect(hiFn, []);
  // 2
  useEffect(() => {
    console.log("hi :)");
    return () => console.log("bye :(");
  }, []);
  // 3
  useEffect(function () {
    console.log("hi :)");
    return function () {
      console.log("bye :(");
    };
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
