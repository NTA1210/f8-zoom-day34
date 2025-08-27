let uniqId = 0;

function TodoApp() {
  const [inputValue, setInputValue] = React.useState("");
  const [todos, setTodos] = React.useState([]);

  const taskCompleted = () => {
    return todos.filter((todo) => todo.completed).length;
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value); // Lấy giá trị từ input
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Ngăn trang reload khi submit form
    if (inputValue.trim()) {
      setTodos([
        ...todos,
        { id: ++uniqId, text: inputValue, completed: false },
      ]);
      setInputValue(""); // Reset input sau khi thêm
    }
  };

  return (
    <div className="todo">
      <h1 className="title">Todo List App</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Nhập task mới..."
        />
        <button className="btn increment" type="submit">
          Thêm
        </button>
      </form>
      {todos.length === 0 && (
        <p className="notification">
          Chưa có task nào. Hãy thêm task đầu tiên!
        </p>
      )}
      <ul className="list list-todo">
        {todos.map((todo) => (
          <li className="item item-todo" key={todo.id}>
            <p
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </p>
            <div className="actions">
              <input
                className="complete"
                type="checkbox"
                onChange={() =>
                  setTodos(
                    todos.map((t) =>
                      t.id === todo.id ? { ...t, completed: !t.completed } : t
                    )
                  )
                }
              />
              <button
                className="btn btn-delete decrement"
                onClick={() => setTodos(todos.filter((t) => t.id !== todo.id))}
              >
                Del
              </button>
            </div>
          </li>
        ))}
      </ul>

      <footer className="footer-todo">
        Tổng: {todos.length} task(s), Hoàn thành: {taskCompleted()} task(s), Còn
        lại: {todos.length - taskCompleted()} task(s)
      </footer>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("todo"));
root.render(<TodoApp />);
