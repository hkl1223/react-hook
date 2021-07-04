import { useState } from "react";
import ReactDOM from "react-dom";
import React from "react";

function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({
    name: "Hkl",
    age: 18,
    hobbies: ["吃饭", "睡觉", "打豆豆"]
  });
  const add = () => {
    setCount(count + 1);
  };
  const minus = () => {
    setCount(count - 1);
  };
  const old = () => {
    setUser({
      ...user,
      age: user.age + 1
    });
  };
  const young = () => {
    setUser({
      ...user,
      age: user.age - 1
    });
  };
  const addHobby = () => {
    let newHobby = prompt("请输入您的爱好");
    setUser({
      ...user,
      hobbies: [...user.hobbies, newHobby]
    });
  };
  const minusHobby = () => {
    user.hobbies.pop();
    setUser({
      ...user,
      hobbies: user.hobbies
    });
  };
  return (
    <div>
      <div>
        <div>{count}</div>
        <button onClick={add}>+1</button>
        <button onClick={minus}>-1</button>
      </div>
      <div>
        <div>
          {user.name},{user.age}
        </div>
        <button onClick={old}>old+1</button>
        <button onClick={young}>young-1</button>
      </div>
      <div>{user.hobbies.join(",")}</div>
      <button onClick={addHobby}>增加爱好</button>
      <button onClick={minusHobby}>删除最后一个爱好</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
