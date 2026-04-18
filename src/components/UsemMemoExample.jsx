import React from 'react'

export default function UseMemoExample() {
    const [count, setCount] = React.useState(0);
    const [number, setNumber] = React.useState(0);
function slowFunction(num) {
  console.log("Running slow function...");
    
    for (let i = 0; i < 1_000_000_000; i++) {
       
    }
    console.log("slow function executed");
    return number* 2;
    
}
const expensiveValue = React.useMemo(() => {
    return slowFunction(number);
}, [number]);

  return (
    <>
     <h1>Count - {count}</h1>
     <p>Expensive Value: {expensiveValue}</p>
    <button onClick={() => setCount(count + 1)} >Increment count</button>
    <h1>Number - {number}</h1>
     <button onClick={() => setNumber(number + 1)} >Increment number</button>
    </>
  )
}
