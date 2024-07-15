import { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div className="">
      <h1>{count}</h1>
      <button onClick={increment} className="border rounded px-2">
        Increment
      </button>
    </div>
  );
};
