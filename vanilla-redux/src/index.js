import { legacy_createStore } from "redux";
//data를 관리하는데 도와줌, 공간
// ƒ dispatch(action) //액션 전달 (액션은 무조선 obj 타입, type이 있어야함)
// ƒ getState() countStore.getState() data 값 가져옴
// ƒ replaceReducer(nextReducer)
// ƒ subscribe(listener) //store 안에 있는 변화들을 알 수 있게 해줌

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const ADD = "ADD";
const MINUS = "MINUS";

const countModifier = (count = 0, action) => {
  switch (action.type) {
    case "ADD":
      return count + 1;
    case "MINUS":
      return count - 1;
    default:
      return count;
  }
}; //reducer은 function (data modify)

const countStore = legacy_createStore(countModifier); //data를 저장하는 곳, function 요구

const onChange = () => {
  number.innerText = countStore.getState();
};

countStore.subscribe(onChange);

const handleMinus = () => {
  countStore.dispatch({ type: MINUS });
};
const handleAdd = () => {
  countStore.dispatch({ type: ADD });
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
