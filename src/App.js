// add axios
import axios from "axios";
import "./styles.css";

export default function App() {
  const onClickUsers = () => {
    // then = データを取得した後に実行する関数
    // 引数resに取得したデータの情報が入る
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res.data);
        // catch = 何かエラーが発生した時に実行する関数
      })
      .catch((err) => console.log(err));
  };
  const onClickUser1 = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users?id=1")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="App">
      <button onClick={onClickUsers}>users</button>
      <button onClick={onClickUser1}>user with id=1</button>
    </div>
  );
}
