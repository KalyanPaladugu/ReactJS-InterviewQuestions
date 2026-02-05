- Step 1: Runs after every render
```
import { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component rendered");
  });

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}

```
What happens
- Component renders
- useEffect runs
- Click button → state updates → render again → effect runs again
📌 No dependency array = runs after every render