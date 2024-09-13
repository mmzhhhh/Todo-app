import { createSlice } from "@reduxjs/toolkit";

const loadTodosFromStorage = () => {
  try {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  } catch (error) {
    console.error("加载代办事项失败:", error);
    return [];
  }
};

const saveTodosToStorage = (state) => {
  try {
    localStorage.setItem("todos", JSON.stringify(state));
    console.log("保存代办事项成功");
  } catch (error) {
    console.error("保存代办事项失败:", error);
  }
};

const todoSlice = createSlice({
  name: "todo",
  initialState: loadTodosFromStorage(),
  reducers: {
    addTodo(state, action) {
      const newTodo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };
      state.push(newTodo);
      saveTodosToStorage(state);
    },
    toggleComplete(state, action) {
      console.log("state", state);
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
        saveTodosToStorage(state);
      } else {
        console.log("未找到");
      }
    },
    deleteTodo(state, action) {
      const updatedState = state.filter((todo) => todo.id !== action.payload);
      saveTodosToStorage(updatedState);
      return updatedState;
    },
  },
});

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
