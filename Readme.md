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


	
