function Counter() {
  const [count, setCount] = React.useState(0);

  return (
    <div className="counter">
      <h1 className="title">Counter</h1>
      <h2
        className="count"
        style={{ color: count > 0 ? "green" : count < 0 ? "red" : "gray" }}
      >
        {count}
      </h2>
      <div className="actions">
        <button onClick={() => setCount(count + 1)} className="btn increment">
          +
        </button>
        <button onClick={() => setCount(0)} className="btn reset">
          Reset
        </button>
        <button onClick={() => setCount(count - 1)} className="btn decrement">
          -
        </button>
      </div>
      <div className="text">
        {count > 0 ? "Dương" : count < 0 ? "Âm" : "Bằng không"}
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("counter"));
root.render(<Counter />);
