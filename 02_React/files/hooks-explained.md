# Section 4.2: Hooks (Core)

Hooks let functional components use state, side effects, and other React features without writing a class. All Hooks follow two rules: only call them at the **top level** of a function (never in loops/conditions), and only call them from **React function components** or other **custom Hooks**.

---

## 1. useState

`useState` gives a functional component its own local, reactive state. It returns a `[value, setterFunction]` pair. Calling the setter schedules a re-render with the new value.

```jsx
const [count, setCount] = useState(0);

// Direct update — reads value from THIS render
setCount(count + 1);

// Functional update — always gets the latest state (safer, especially for rapid updates)
setCount(prev => prev + 1);

// Objects/arrays: always spread, never mutate directly
setUser(prev => ({ ...prev, age: prev.age + 1 }));
```

Mutating state directly (e.g. `user.age = 29`) will **not** trigger a re-render — React compares references to detect changes.

**Diagram:** `svgs/12-usestate-hook.svg` — direct vs. functional updates, and safely updating objects/arrays.

---

## 2. useEffect (Dependency Arrays, Cleanup Functions)

`useEffect` lets a functional component run **side effects** — data fetching, subscriptions, timers, manually touching the DOM — after render. The **dependency array** (the second argument) controls when it re-runs:

```jsx
// No array — runs after EVERY render (rarely what you want)
useEffect(() => {
  console.log("ran");
});

// Empty array [] — runs ONCE, right after the first render (like componentDidMount)
useEffect(() => {
  fetchInitialData();
}, []);

// [dependency] — runs whenever that value changes
useEffect(() => {
  fetchUser(userId);
}, [userId]);
```

**Cleanup functions** — returned from inside the effect — run before the effect runs again, and one final time when the component unmounts. This is where you clear timers, cancel subscriptions, or remove event listeners to avoid memory leaks:

```jsx
useEffect(() => {
  const id = setInterval(tick, 1000); // setup
  return () => clearInterval(id);     // cleanup
}, []);
```

**Diagram:** `svgs/13-useeffect-hook.svg` — the three dependency-array variants, and the cleanup timeline (setup → cleanup-before-next-run → cleanup-on-unmount).

---

## 3. useRef

`useRef` returns a mutable object (`{ current: ... }`) that persists across renders **without** causing a re-render when it changes. It has two common jobs:

```jsx
// 1. Direct DOM access — an escape hatch for things React doesn't manage
const inputRef = useRef(null);
<input ref={inputRef} />;
inputRef.current.focus();

// 2. Mutable value that survives re-renders but doesn't trigger one
const renderCount = useRef(0);
renderCount.current += 1; // no re-render, unlike useState
```

The key difference from `useState`: updating `.current` never causes the component to re-render, and the value never appears directly in the UI unless you also store it in state.

**Diagram:** `svgs/14-useref-hook.svg` — DOM access vs. mutable-value use cases, and a side-by-side comparison with `useState`.

---

## 4. useContext

`useContext` lets a deeply nested component read a value directly from a `Context.Provider` higher up the tree — skipping the need to manually pass that value down through every intermediate component (**prop drilling**).

```jsx
const ThemeContext = createContext("light");

// Provide the value once, near the top
<ThemeContext.Provider value="dark">
  <Layout />
</ThemeContext.Provider>

// Read it directly, however deep the component is
function ThemeToggle() {
  const theme = useContext(ThemeContext);
  return <button className={theme}>Toggle</button>;
}
```

Great for values that many components need: theme, authenticated user, locale/language, feature flags.

**Diagram:** `svgs/15-usecontext-hook.svg` — prop drilling vs. direct context access.

---

## 5. useMemo & useCallback (Performance Optimization)

Both Hooks **memoize** something between renders so it isn't needlessly recreated — but they memoize different things:

- **`useMemo`** memoizes a **computed value**. The function only re-runs when a dependency changes; otherwise React reuses the cached result.
- **`useCallback`** memoizes a **function reference**. It returns the same function instance between renders (until a dependency changes), instead of creating a brand-new function every render.

```jsx
// useMemo — avoid re-running an expensive calculation on every render
const sortedList = useMemo(() => expensiveSort(items), [items]);

// useCallback — keep a stable function reference for child components
const handleClick = useCallback(() => {
  doSomething(id);
}, [id]);
```

Why it matters: every render normally creates new function/array/object instances, even if the contents are identical. A child wrapped in `React.memo` will still re-render if it receives a "new" prop reference each time — `useMemo`/`useCallback` keep that reference stable so `React.memo` can actually skip the re-render. Don't over-apply them, though — memoizing a cheap calculation can cost more than it saves.

**Diagram:** `svgs/16-usememo-usecallback-hook.svg` — memoizing a value vs. memoizing a function, and why stable references matter for `React.memo`.

---

## 6. useReducer

`useReducer` is an alternative to `useState` for state logic that's more complex — multiple sub-values, or a next state that depends heavily on the previous one and the action taken. It follows the classic **reducer pattern**: `(state, action) => newState`.

```jsx
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}

const [state, dispatch] = useReducer(reducer, { count: 0 });

<button onClick={() => dispatch({ type: "increment" })}>+1</button>
```

Instead of calling multiple setter functions, the component `dispatch`es a plain **action object**, and the **reducer function** decides how state should change — keeping state transitions predictable and centralized in one place.

**Diagram:** `svgs/17-usereducer-hook.svg` — the dispatch → reducer → new state → re-render cycle.

---

## 7. Custom Hooks (Building Your Own)

A **custom Hook** is just a regular JavaScript function, whose name starts with `use`, that calls other Hooks inside it. It's the primary way to extract and reuse **stateful logic** between components — without repeating the same `useState`/`useEffect` code in each one.

```jsx
// Custom hook: extracted, reusable logic
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

// Used in any component, as many times as needed
function ComponentA() {
  const width = useWindowWidth();
  return <p>Window is {width}px wide</p>;
}
```

Rules to remember: the name must start with `use` (so React can enforce the Rules of Hooks on it), and it must only call other Hooks at its top level — never conditionally or inside loops.

**Diagram:** `svgs/18-custom-hooks.svg` — duplicated logic across components extracted into one reusable custom Hook.

---

## Tasks

### Task 3 — Build a "Live Search" Component
Create a functional component `LiveSearch` that:
1. Uses `useState` to track the search input value and the list of results.
2. Uses `useEffect` with a **dependency array** on the search term to re-run a (mock/fake) search function whenever the user stops typing, and a **cleanup function** that cancels/ignores a stale in-flight search if the term changes again quickly (debounce-style).
3. Uses `useRef` to keep a count of how many searches have been triggered, without causing extra re-renders.
4. Uses `useMemo` to avoid re-filtering/re-sorting the results array unless the raw results or a sort option actually changes.

**Goal:** practice coordinating `useState`, `useEffect` (with cleanup), `useRef`, and `useMemo` in one realistic feature.

### Task 4 — Refactor Prop Drilling with `useContext`, and Extract a Custom Hook
Starting point: an app that passes a `currentUser` object down through 4 levels of components (`App → Dashboard → Sidebar → UserBadge`) purely so the last component can display the user's name.

1. Create a `UserContext` and a `UserProvider`, and refactor `UserBadge` to read `currentUser` via `useContext` instead of receiving it as a prop through every layer.
2. Extract the logic for fetching/managing the current user (`useState` + `useEffect` for loading it, plus a `login`/`logout` function) into a custom Hook called `useAuth()`.
3. Replace at least one `useState` + manual update logic elsewhere in the app with `useReducer`, if the state has more than one related piece of data changing together (e.g. `{ status, data, error }` for a data-fetching flow).

**Goal:** practice removing prop drilling with Context, building a real custom Hook, and recognizing when `useReducer` is a better fit than `useState`.
