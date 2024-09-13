import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleComplete } from "../../store/slices/todo-slice";
import { useState } from "react";
import TodoItem from "../todo-item";

export default function TodoList() {
  const [filter, setFilter] = useState("1"); //1:全部事项 2:已完成事项 3:未完成事项
  const todoList = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  //根据筛选条件获取待显示的待办事项
  const filteredTodos = todoList.filter((item) => {
    if (filter === "2") return item.completed;
    if (filter === "3") return !item.completed;
    return true;//默认显示全部事项
  });

  const handleComplete = (id) => {
    dispatch(toggleComplete(id));
  };

  const handleDelete = (e, id) => {
    e.stopPropagation();
    dispatch(deleteTodo(id));
  };

  const getEmptyMessage = () => {
    const messages = {
      2: "暂无已完成事项",
      3: "暂无未完成事项",
      1: "暂无代办事项",
    };
    return messages[filter];
  };

  return (
    <div>
      <ul>
        {filteredTodos.length ? (
          filteredTodos.map((item) => (
            <TodoItem
              key={item.id}
              item={item}
              onComplete={handleComplete}
              onDelete={handleDelete}
            />
          ))
        ) : (
          <h5 style={{ textDecoration: "line-through" }}>
            {getEmptyMessage()}
          </h5>
        )}
      </ul>
      {/* 筛选表单 */}
      <div className="form-group">
        <label htmlFor="paperSelects1">显示事项</label>
        <select
          id="paperSelects1"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="1">全部事项</option>
          <option value="2">已完成事项</option>
          <option value="3">未完成事项</option>
        </select>
      </div>
    </div>
  );
}
