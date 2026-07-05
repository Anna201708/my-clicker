import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="container">
      <div className="counter-wrapper">
        <button className="btn" onClick={decrement}>-</button>
        <span className="counter-value">{count}</span>
        <button className="btn" onClick={increment}>+</button>
      </div>
    </div>
  );
}

export default App;