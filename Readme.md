ReactJS Interview Questions:
============================

1. What is React?

```
Answer:
React is a JavaScript library used to build user interfaces, mainly for single-page applications. It allows developers to create reusable UI components.

Explanation:
React focuses only on the view layer (MVC). It uses a virtual DOM to improve performance and updates the UI efficiently.
```
2. What is JSX?

```
Answer:
JSX stands for JavaScript XML. It allows writing HTML-like code inside JavaScript.

Explanation:
JSX is not mandatory, but it makes code more readable. Babel compiles JSX into React.createElement() calls.
```
3. What is the Virtual DOM?

```
Answer:
The Virtual DOM is a lightweight copy of the real DOM.

Explanation:
When state changes, React updates the Virtual DOM first, compares it with the previous version (diffing), and updates only the changed parts in the real DOM—making apps faster.
```

4. What are components in React?

- Components are reusable pieces of UI.
- There are two main types:

    - Functional components
        ```
         function Welcome() {
          return <h1>Hello</h1>;
        }
        ```
    - Class components
        ```
            class Greeting extends Component {
                render() {
                return <h1>Hello, {this.props.name}!</h1>;
                    }
              }
        ```
5. What are props?

- Props are read-only inputs passed from a parent component to a child component.
- They help make components reusable and dynamic.
```
<Welcome name="John" />
```
6. What is state in React?

- State is an object that holds data that can change over time.
    - When state changes, the component re-renders.
```
const [count, setCount] = useState(0);
```
7. Difference between state and props?

| State       | Props         |
| ------------- | ------------- |
| Managed within component  | Passed from parent |
| Can be changed  | Read-only  |
| Causes re-render | Causes re-render |


8. What are React Hooks?

- Hooks are functions that allow using state and lifecycle features in functional components.
- Common hooks:
    - useState
    - useEffect
    - useContext
    - useRef
    - useMemo

9. Explain `useEffect`

- useEffect lets you run side effects in a React component
- A side effect is anything that:
- Examples:
    - fetching data
    - setting up timers
    - subscribing to events
    - updating the document title
- After React renders this component, run this code

- Basic syntax
```
useEffect(() => {
  // effect logic here
}, [dependencies]);
```
- First argument → a function (the effect)
- Second argument → dependency array (controls when it runs)
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

- Step 2: Run only once (on mount)
```
useEffect(() => {
  console.log("Component mounted");
}, []);
```
- Why this works
- Empty array = “this effect depends on nothing”
- React runs it once after the first render
- Perfect for:
    - API calls
    - event listeners
    - initial setup

- Example:
```
useEffect(() => {
  fetch("/api/users")
    .then(res => res.json())
    .then(data => console.log(data));
}, []);
```
- Step 3: Run when something changes
```
useEffect(() => {
  console.log(`Count changed to ${count}`);
}, [count]);
```

- What this means
- Effect runs only when count changes
- React compares old count vs new count

📌 Rule of thumb:
- If you use a variable inside useEffect, it probably belongs in the dependency array.

- Step 4: Cleanup (important!)
- Some effects need cleanup:
    - timers
    - subscriptions
    - event listeners
```
useEffect(() => {
  const interval = setInterval(() => {
    console.log("Tick");
  }, 1000);

  return () => {
    clearInterval(interval);
  };
}, []);
```
- What’s going on
- Effect runs → sets up interval
- Cleanup runs when:
- component unmounts
 -OR before effect runs again

📌 Think of cleanup as “undo what I did”

10. What is conditional rendering?

- Rendering components based on a condition.
- Syntax:
```
{isLoggedIn ? <Dashboard /> : <Login />}
```
🔹 Advanced React Questions
11. What is lifting state up?

Answer:
- Moving state from a child component to a common parent so multiple components can share it.
- If two (or more) components need the same data, that data should live in their closest common 

- Example:
```
Parent (state)
 ├── Input (updates state)
 └── Display (reads state)
```
- Step 1: Move state to the parent
```
function App() {
  const [name, setName] = React.useState("");

  return (
    <>
      <Input name={name} setName={setName} />
      <Display name={name} />
    </>
  );
}
```

- Step 2: Pass updater function down
```
function Input({ name, setName }) {
  return (
    <input
      value={name}
      onChange={e => setName(e.target.value)}
    />
  );
}
```
- Step 3: Pass state down as props
```
function Display({ name }) {
  return <h1>Hello {name}</h1>;
}
```
12. What is Context API?

- Context API lets you share data globally with many components without passing props manually at every level.

```
It solves this problem 👇

App
 └── Parent
     └── Child
         └── GrandChild (needs data)
```

- Without Context → you’d pass props through every layer (prop drilling).
- With Context → components can tap into the data directly.

- The problem: prop drilling
```
function App() {
  const [user, setUser] = React.useState("Alice");

  return <Parent user={user} />;
}

function Parent({ user }) {
  return <Child user={user} />;
}

function Child({ user }) {
  return <h1>Hello {user}</h1>;
}
```
😵 Parent and Child don’t even use user — they’re just forwarding it.

- Step 1: Create a context
```
import { createContext } from "react";

const UserContext = createContext();
```

// Think of this as creating a data channel.

- Step 2: Provide the context value
- Wrap the part of the app that needs access.

```
function App() {
  const [user, setUser] = React.useState("Alice");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Parent />
    </UserContext.Provider>
  );
}
```

📌 Any component inside Provider can now access user.

- Step 3: Consume the context
 - Use useContext where you need the data.
```
import { useContext } from "react";

function Child() {
  const { user } = useContext(UserContext);

  return <h1>Hello {user}</h1>;
}
```
✨ No props passed. Clean.
- Full Example
```
import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

function App() {
  const [user, setUser] = useState("Alice");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Parent />
    </UserContext.Provider>
  );
}

function Parent() {
  return <Child />;
}

function Child() {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <h1>Hello {user}</h1>
      <button onClick={() => setUser("Bob")}>Change User</button>
    </>
  );
}
```
- How data flows (important)
    1. App owns the state
    2. Provider shares it
    3. Any child can read or update it
    4. When value changes → all consumers re-render

13. What is prop drilling?

```
Answer:
Passing props through multiple levels of components unnecessarily.

Explanation:
It makes code harder to maintain. Context API or Redux solves this.
```

14. What is Redux?
- Redux is a state management library for JavaScript apps.
- It uses:
    - Store
    - Actions
    - Reducers

- Ensures predictable state management

15. What is reconciliation?

- The process React uses to update the DOM efficiently.
- React compares the new Virtual DOM with the old one and applies minimal updates.

16. What are keys in React?

- Keys help React identify which items have changed in a list.

```
items.map(item => <li key={item.id}>{item.name}</li>)
```
17. What is memoization in React?

- An optimization technique to prevent unnecessary re-renders.

- By below options are memoization technique
    - React.memo
    - useMemo
    - useCallback

18. Difference between useMemo and useCallback?

| useMemo |	useCallback |
|----------|------------|
|Memoizes values|	Memoizes functions|
|Improves performance	|Prevents re-creation of functions|

19. How do you optimize React performance?

    - Use React.memo
    - Avoid unnecessary re-renders
    - Use lazy loading
    - Use keys properly
    - Code splitting

20. Explain `useMemo` and `React.memo`

- useMemo → memoizes a value
- React.memo → memoizes a component

#### Part 1: useMemo

- What problem does it solve?
- It prevents expensive calculations from running on every render.

- Step 1: The problem (slow calculation)
```
function App() {
  const [count, setCount] = React.useState(0);
  const [text, setText] = React.useState("");

  const expensiveValue = slowFunction(count);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Count</button>
      <input onChange={e => setText(e.target.value)} />
      <p>{expensiveValue}</p>
    </>
  );
}

function slowFunction(num) {
  console.log("Running slow function...");
  for (let i = 0; i < 1_000_000_000; i++) {}
  return num * 2;
}
```

🚨 Problem:

Typing in input causes a re-render

slowFunction runs again (even though count didn’t change)

- Step 2: Fix with useMemo
```
import { useMemo } from "react";

const expensiveValue = useMemo(() => {
  return slowFunction(count);
}, [count]);

Full example
function App() {
  const [count, setCount] = React.useState(0);
  const [text, setText] = React.useState("");

  const expensiveValue = React.useMemo(() => {
    return slowFunction(count);
  }, [count]);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Count</button>
      <input onChange={e => setText(e.target.value)} />
      <p>{expensiveValue}</p>
    </>
  );
}
```

- What happens now?

- Input changes → re-render
- useMemo returns cached value
- slowFunction does not run again
- count changes → recalculates

- Rules for useMemo

✅ Use when:

- calculation is expensive

- value depends on specific inputs

❌ Don’t use for:

- simple calculations

- everything “just in case”

📌 Overusing useMemo can hurt performance.

- Explain `useCallback` and `React.memo`
  - [Refer this link for better clarity](https://www.youtube.com/watch?v=zkWIVj5EsuI)

- Explain `useMemo`
 - [useMemo] (https://www.youtube.com/watch?v=RIFYIfzarnI)

- Lazy Loading
  - Lazy Loading Routes (Code Splitting)
  - Lazy loading improves performance by loading components only when needed, reducing initial bundle size.

```
📌 Example using React.lazy and Suspense
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Lazy loaded components
const Dashboard = lazy(() => import("./Dashboard"));
const Reports = lazy(() => import("./Reports"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
```

- Debouncing Search Input
- Debouncing ensures an API call happens after the user stops typing, preventing excessive requests.

```
📌 Example Using setTimeout
import React, { useState, useEffect } from "react";

function SearchComponent() {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500); // 500ms delay

    return () => clearTimeout(timer);
  }, [query]);

  useEffect(() => {
    if (debouncedQuery) {
      console.log("API Call with:", debouncedQuery);
      // Call API here
    }
  }, [debouncedQuery]);

  return (
    <input
      type="text"
      placeholder="Search..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}

export default SearchComponent;

✅ What This Does:

Waits 500ms after user stops typing

Prevents multiple API calls

Reduces server load

Improves performance
```
- I implemented input debouncing using useEffect and setTimeout to prevent excessive API calls and improve search performance.

- Here’s a clear example of Debouncing using Lodash in React 👇

✅ 1️⃣ Install Lodash
npm install lodash

✅ 2️⃣ Example: Debounced Search Input Using Lodash

```
import React, { useState, useMemo } from "react";
import { debounce } from "lodash";

function SearchComponent() {
  const [query, setQuery] = useState("");

  // Create debounced function
  const debouncedSearch = useMemo(() => 
    debounce((value) => {
      console.log("API Call with:", value);
      // Call your API here
    }, 500), []
  );

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    debouncedSearch(value);
  };

  return (
    <input
      type="text"
      value={query}
      onChange={handleChange}
      placeholder="Search..."
    />
  );
}

export default SearchComponent;
```
- Why use useMemo?
  - Prevents recreating the debounced function on every render
  - Improves performance
  - Ensures stable function reference

  
  1️⃣ Install Lodash (if not installed)
npm install lodash

✅ 2️⃣ Example: Throttling Scroll Event

This example ensures the function runs at most once every 500ms, even if the user scrolls continuously.
```
import React, { useEffect, useMemo } from "react";
import { throttle } from "lodash";

function ScrollTracker() {

  const handleScroll = useMemo(
    () =>
      throttle(() => {
        console.log("Scroll position:", window.scrollY);
      }, 500),
    []
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      handleScroll.cancel(); // cleanup
    };
  }, [handleScroll]);

  return <div style={{ height: "2000px" }}>Scroll Down</div>;
}

export default ScrollTracker;
```
✅ What This Does
- If user scrolls continuously → function runs once every 500ms
- Prevents performance issues
- Useful for scroll tracking, resize events, infinite scroll

🎯 Interview Explanation (Short & Strong)

I used Lodash throttle to control the execution frequency of scroll events, ensuring the function runs at fixed intervals instead of triggering excessively. This improved performance and prevented unnecessary re-renders during continuous user interactions.

🔥 Difference Reminder
- Debounce → Wait until user stops
- Throttle → Execute at fixed intervals

- Find last value for count
```
import React,{useState,useEffect,useRef} from 'react'

export default function App() {
 const [count,setCount] = useState(0);
 const lastValue= useRef(0);

 useEffect(()=>{
    lastValue.current=count
 },[count])
const handleIncrement= ()=>{
  setCount(count+5)
}
  return (<>
        <h1>{count}</h1>
        <h2>{lastValue.current}</h2>
        <button onClick={handleIncrement}>increment</button>
  </>)
}
```