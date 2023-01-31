import Home from "./routes/Home";
import Detail from "./routes/Detail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* Router
 * 페이지를 새로고침 하지않고 필요한 화면을 렌더링하여 가져올 수 있다.
 * 버전 6부터는 Switch가 아닌 Routes를 사용한다.
 * Router > Routes > Route복수 를 사용하여 경로에 따라 하나의 페이지만 보여준다.
 */
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/movie/:id" element={<Detail />} />
        {/* 파라미터를 붙여줄때는 파라미터 앞에 : 꼭 써야함 */}
        {/* <Route path="/" element={<Home />} /> */}
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
