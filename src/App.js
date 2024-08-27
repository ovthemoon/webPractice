// 필요한 모듈과 컴포넌트를 가져옵니다.
import Button from "./Button"
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App(){
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onChange=(e)=>setTodo(e.target.value);
  console.log(todo);
  const onSubmit=(e)=>{e.preventDefault();
    if(todo===""){
      alert("할 일을 입력하세요");
      return;
    }
    setTodo("");
    setTodos(currentArray=>[todo,...currentArray]);
  };
  
  return <div>
    <h1>todos length{todos.length}</h1>
    <form>
      <input onChange={onChange} value={todo} type="text" placeholder="할 일을 입력하세요" />
      <button onClick={onSubmit}>Add ToDo</button>
    </form>
    <hr />
    {todos.map((todo,index)=><li key={index}>{todo}</li>)}
  </div>
}

export default App;