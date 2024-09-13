import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/slices/todo-slice";

export default function AddTodo() {
  const [todoItem, setTodoItem] = useState("");
  const dispatch = useDispatch();

  //提交表单
  const handleSubmit = (event) => {
    event.preventDefault();
    if (todoItem.trim()) {
      dispatch(addTodo(todoItem.trim()));
      setTodoItem("");
    } else {
      alert("请输入代办事项");
    }
  };

  const handleChange = (event) => {
    setTodoItem(event.target.value);
  };

  console.log(todoItem);
  return (
    <div className="form-group">
      <form className="row flex-edges" onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          value={todoItem}
          placeholder="添加代办事项"
          className="col-8"
          aria-label="代办事项输入框" //提升可访问性
        />
        <button type="submit" className="col-3">
          添加
        </button>
      </form>
    </div>
  );
}
