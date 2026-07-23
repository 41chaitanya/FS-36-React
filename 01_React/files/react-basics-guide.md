# Section 4: React.js — The "R" in MERN
## 4.1 Basics

React is the view layer of the MERN stack. It lets you build UIs out of small, reusable pieces called **components**, and it automatically keeps the screen in sync with your data. This guide covers the eight foundational topics every React beginner needs.

---

## 1. JSX Syntax

JSX (JavaScript XML) is a syntax extension that lets you write HTML-like markup directly inside JavaScript. Browsers can't run JSX directly — a compiler called **Babel** transforms it into plain `React.createElement()` calls, which produce plain JavaScript objects describing what should appear on screen. React then uses those objects to build and update the real DOM.

Key rules of JSX:
- Every JSX expression must have **one root element** (or use a Fragment `<>...</>`).
- JavaScript expressions go inside curly braces: `<h1>Hello, {userName}</h1>`.
- HTML attributes become camelCase: `class` → `className`, `onclick` → `onClick`.
- Every tag must be closed: `<img />`, `<br />`.

```jsx
function Welcome() {
  const name = "Sam";
  return (
    <div className="welcome">
      <h1>Hello, {name}!</h1>
      <p>Today is {new Date().toLocaleDateString()}</p>
    </div>
  );
}
```

**Diagram:** `svgs/01-jsx-transform.svg` — shows how JSX flows: your code → Babel → `React.createElement()` → plain JS object → real DOM.

---

## 2. Components: Functional vs Class (focus on Functional)

A **component** is a reusable, self-contained piece of UI — a JavaScript function (or class) that returns JSX. There are two historical styles:

- **Functional components** — plain functions that return JSX and use **Hooks** (`useState`, `useEffect`, etc.) for state and lifecycle. This is the modern standard and the style you should use for all new code.
- **Class components** — ES6 classes that extend `React.Component`, using `this.state` and lifecycle methods like `componentDidMount`. Still found in older codebases, but no longer recommended for new projects.

```jsx
// Functional (preferred)
function Greeting({ name }) {
  return <h1>Hello, {name}</h1>;
}

// Class (legacy)
class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

**Diagram:** `svgs/02-functional-vs-class.svg` — side-by-side comparison of syntax and traits.

---

## 3. Props & PropTypes

**Props** ("properties") are how a parent component passes data down to a child. Props are **read-only** — a child must never modify the props it receives. Data always flows in one direction: top to bottom.

```jsx
function Profile({ name, age }) {
  return <p>{name} is {age} years old.</p>;
}

// Parent usage
<Profile name="Sam" age={28} />
```

**PropTypes** let you document and validate the shape of props at runtime, catching bugs early (especially useful before TypeScript adoption):

```jsx
import PropTypes from "prop-types";

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
};
```

**Diagram:** `svgs/03-props-flow.svg` — props flow down from parent to child; events/callbacks flow back up.

---

## 4. State Management with `useState`

**State** is data that belongs to a component and can change over time (e.g., a counter, form input, toggle). Unlike props, a component fully owns and controls its own state. The `useState` Hook returns a pair: the current value, and a function to update it. Calling the setter schedules a **re-render** with the new value.

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  );
}
```

Important behaviors:
- `useState(initialValue)` only uses `initialValue` on the **first** render.
- Updating state **replaces** the value; for objects/arrays you must spread the old value: `setUser({ ...user, name: "New" })`.
- State updates are **asynchronous/batched** — don't rely on the variable updating immediately after calling the setter.

**Diagram:** `svgs/04-usestate-cycle.svg` — the render → click → setState → re-render loop.

---

## 5. Event Handling in React

React wraps native browser events in a **SyntheticEvent** object, which behaves identically across all browsers. Event handlers are passed as camelCase props (`onClick`, `onChange`, `onSubmit`) and receive a function reference — not a function call.

```jsx
function Form() {
  const [text, setText] = useState("");

  function handleChange(event) {
    setText(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault(); // stop full-page reload
    alert(`Submitted: ${text}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={text} onChange={handleChange} />
      <button type="submit">Send</button>
    </form>
  );
}
```

Common mistake: writing `onClick={handleClick()}` (calls it immediately during render) instead of `onClick={handleClick}` (passes the function to be called later).

**Diagram:** `svgs/05-event-handling.svg` — user action → SyntheticEvent → handler function → possible re-render.

---

## 6. Conditional Rendering

Because JSX is just JavaScript, you use normal JS logic to decide what to render — there's no special "if" template tag. The most common patterns:

```jsx
// 1. Ternary — choose between two elements
{isLoggedIn ? <Dashboard /> : <LoginForm />}

// 2. Logical AND — render something or nothing
{unreadCount > 0 && <Badge count={unreadCount} />}

// 3. Early return — bail out of the component entirely
function Page({ loading }) {
  if (loading) return <Spinner />;
  return <Content />;
}
```

**Diagram:** `svgs/06-conditional-rendering.svg` — decision flowchart for `isLoggedIn` plus a summary of all techniques.

---

## 7. Lists & Keys

To render a collection of data, use JavaScript's `.map()` to turn an array into an array of JSX elements. Each element needs a special **`key`** prop — a stable, unique identifier that helps React efficiently figure out which items changed, were added, or were removed between renders.

```jsx
const items = [
  { id: 1, text: "Milk" },
  { id: 2, text: "Eggs" },
  { id: 3, text: "Bread" },
];

function ShoppingList() {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
}
```

Rule of thumb: use a real, stable ID (like a database `_id`) as the key. Avoid using the array **index** as a key if the list can be reordered, filtered, or have items inserted/removed — it can cause subtle rendering bugs.

**Diagram:** `svgs/07-lists-and-keys.svg` — array → `.map()` → JSX elements → rendered `<ul>`, with a note on why keys matter.

---

## 8. Component Composition

Composition is the practice of building complex UIs by combining small, focused components — instead of one giant component doing everything. A parent assembles its children, and can even pass whole components as `children` or as named props (a pattern called "slots").

```jsx
function App() {
  return (
    <Page>
      <Header />
      <MainContent>
        <Sidebar />
        <ArticleList />
      </MainContent>
      <Footer />
    </Page>
  );
}

// Composition via `children` prop
function Page({ children }) {
  return <div className="page">{children}</div>;
}
```

Composition, not inheritance, is React's recommended way to share and reuse UI logic between components.

**Diagram:** `svgs/08-component-composition.svg` — a component tree showing how `App` assembles smaller pieces.

---

## Tasks

### Task 1 — Build a "Team Member" Directory
Create a functional component `TeamDirectory` that:
1. Stores an array of team members in state (`useState`), each with `id`, `name`, `role`, and `isActive`.
2. Renders the list using `.map()`, giving each `<li>` a proper `key` (use `id`, not the array index).
3. Uses **conditional rendering** to show an "🟢 Active" or "⚪ Inactive" label next to each name based on `isActive`.
4. Adds a button that toggles a member's `isActive` status when clicked (**event handling** + **state update**).
5. Extracts a `MemberCard` child component that receives a member's data via **props**, and add basic `PropTypes` validation to it.

**Goal:** practice props, state, events, conditional rendering, lists/keys, and composition together in one small app.

### Task 2 — Refactor a Class Component to a Functional Component
You are given this legacy class component:

```jsx
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: props.startAt || 0 };
    this.increment = this.increment.bind(this);
  }
  increment() {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>+1</button>
      </div>
    );
  }
}
```

Rewrite it as a functional component called `Counter` that:
1. Uses `useState` instead of `this.state`/`this.setState`.
2. Accepts `startAt` as a prop with a sensible default value.
3. Removes the constructor and manual `.bind()` — explain in a code comment *why* binding is no longer needed with functions.
4. Renders identically to the original.

**Goal:** solidify the difference between class and functional components, and get comfortable converting real legacy code.