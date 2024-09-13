import AddTodo from "./components/add-todo";
import TodoList from "./components/todo-list";
function App() {
  return (
    <div
      className="row flex-middle flex-center"
      style={{ minHeight: "100%", background: "#f1f1f1",padding:"20px" }}
    >
      <main className="paper border border-3 border-primary" style={{ maxWidth: "500px",width:"100%",margin:"auto" }}>
        <h3 style={{textDecoration:"underline",textUnderlineOffset:"10px"}}>待办事项</h3>
        <AddTodo />
        <TodoList />
      </main>
    </div>
  );
}

export default App;
