import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0)

  function increment () {
    setCount(count + 1)
  }

  function decrement () {
    setCount(count - 1)
  }

  return (
    <div className="counter">
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <br/>
      <div>
        {count}
      </div>
    </div>
  );
};

export default Counter;
