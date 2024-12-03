import { useState } from 'react';
import classes from './counter.module.scss';

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
      <button
        onClick={increment}
        className="p-2 bg-plt-accent rounded-lg text-plt-white"
      >
        Increment
      </button>
    </div>
  );
};
