import Button from "./Button";
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <h1 className={styles.title}>Welcome back!!!</h1>
      <Button text={"Continue"} />
    </div>
  );
}

export default App;
/* 
 클래스명이 랜덤하게 생성됨. -> 컴포넌트들이나 스타일들이 독립적이다.
 굳이 복잡한 클래스명을 외울필요가 없다.
 각자의 모듈에서 같은 이름의 클래스를 써도 문제가 없다.
 */