import React from 'react'
import Child from './Child';
export default function UseCallbackExample() {

    const [count, setCount] = React.useState(0);

    const handleClick =React.useCallback(() => {
       setCount(count + 1);
    }, []);
  console.log("parent rendered");
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment Count</button>
      <Child handleClick={handleClick} />
    </div>
  )
}


