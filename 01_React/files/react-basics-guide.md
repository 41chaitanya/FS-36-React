c   # Section 4: React.js — The "R" in MERN
## 4.1 Basics (Detailed Notes)

React is the view layer of the MERN stack. It lets you build UIs out of small, reusable pieces called **components**, and it automatically keeps the screen in sync with your data. These notes go deep on JSX, components, props, state, events (including every native synthetic event category), conditional rendering, lists/keys, composition, and the component lifecycle.

---

## 1. JSX Syntax — Deep Dive

JSX (JavaScript XML) is a syntax extension that lets you write HTML-like markup directly inside JavaScript. It is **not** a template language — it is closer to "sugar" for plain JavaScript function calls.

### 1.1 What JSX actually compiles to
A build tool called **Babel** transforms JSX into `React.createElement()` calls before the browser ever sees it.

```jsx
// What you write
const element = <h1 className="greeting">Hello, world!</h1>;

// What Babel compiles it to
const element = React.createElement(
  'h1',
  { className: 'greeting' },
  'Hello, world!'
);

// What createElement returns (a plain JS object — the "virtual DOM node")
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
};
```

React reads this object tree and decides how to update the real DOM. This is why JSX needs a compiler step — it's really just a nicer way to write nested `createElement()` calls.

### 1.2 Core JSX rules
- **Single root node.** A component can only return one element. Wrap multiple siblings in a parent `<div>` or, better, a **Fragment** (`<>...</>` or `<React.Fragment>`) which doesn't add an extra DOM node.
- **Expressions in curly braces.** Anything inside `{ }` is evaluated as a JavaScript expression: variables, function calls, ternaries, arithmetic. Statements (`if`, `for`, `switch`) are **not** allowed directly inside JSX — only expressions.
- **camelCase attributes.** `class` → `className`, `for` → `htmlFor`, `onclick` → `onClick`, `tabindex` → `tabIndex`.
- **Self-closing tags.** Any tag without children must be self-closed: `<img />`, `<input />`, `<br />`.
- **Comments** inside JSX use `{/* comment */}`, not `<!-- -->`.
- **Style prop takes an object**, not a CSS string: `style={{ color: 'red', fontSize: 14 }}` (outer `{}` is JS, inner `{}` is the object).

```jsx
function Card() {
  const isFeatured = true;
  const items = ['One', 'Two'];

  return (
    <> {/* Fragment avoids an unnecessary wrapper div */}
      <h2 style={{ color: isFeatured ? 'gold' : 'gray' }}>
        {isFeatured ? 'Featured' : 'Standard'} Card
      </h2>
      <p>{items.length} items inside</p>
      {/* This is a JSX comment */}
    </>
  );
}
```

### 1.3 JSX and security
React automatically **escapes** any value embedded with `{ }` before rendering it, which helps prevent cross-site scripting (XSS) attacks — you don't need to manually sanitize strings you interpolate into JSX text content.

---

## 2. Components: Functional vs Class

A **component** is a reusable, self-contained piece of UI — a JavaScript function (or class) that returns JSX describing what should appear on screen.

### 2.1 Functional Components (the modern standard)
Functional components are plain JavaScript functions. Since React 16.8 introduced **Hooks**, functional components can hold state and run side effects, which is why they've replaced class components for virtually all new code.

```jsx
function Greeting({ name }) {
  return <h1>Hello, {name}</h1>;
}

// Equivalent arrow-function form
const Greeting = ({ name }) => <h1>Hello, {name}</h1>;
```

Advantages:
- Less boilerplate — no `constructor`, no `this`, no `.bind()`.
- Hooks let you reuse stateful logic between components (custom hooks) in a way class components can't easily do.
- Easier to read, test, and optimize (e.g. with `React.memo`).

### 2.2 Class Components (legacy)
Class components extend `React.Component` and must implement a `render()` method that returns JSX. State lives on `this.state`, and updates go through `this.setState()`.

```jsx
class Greeting extends React.Component {
  constructor(props) {
    super(props); // required before using `this`
    this.state = { visits: 0 };
  }

  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

Class components are still found in older codebases and are important to recognize, but new React code should default to functional components with Hooks.

### 2.3 Side-by-side comparison

| Aspect | Functional Component | Class Component |
|---|---|---|
| Definition | Plain function | `class extends React.Component` |
| Returns UI via | `return <jsx />` | `render() { return <jsx /> }` |
| State | `useState` Hook | `this.state` / `this.setState()` |
| Side effects | `useEffect` Hook | Lifecycle methods (`componentDidMount`, etc.) |
| Accessing props | Function parameter `(props)` | `this.props` |
| `this` keyword | Not needed | Needed everywhere, must bind handlers |
| Boilerplate | Minimal | More (constructor, `super(props)`, binding) |

---

## 3. Props & the Flow of All Data Types

**Props** ("properties") are the mechanism for passing data from a parent component into a child component. Props are **read-only** (immutable from the child's perspective) — a child must never reassign or mutate the props object it receives. Data flows in **one direction: parent → child**, which is often called "unidirectional data flow" or "top-down data flow."

### 3.1 Passing every type of data as a prop

```jsx
function App() {
  const user = { id: 1, name: 'Sam' };
  const tags = ['react', 'mern', 'javascript'];

  function handleLike() {
    console.log('Liked!');
  }

  return (
    <Widget
      title="My Widget"          /* string */
      count={42}                 /* number */
      isActive={true}            /* boolean */
      user={user}                /* object */
      tags={tags}                /* array */
      onLike={handleLike}        /* function (callback prop) */
      icon={<StarIcon />}        /* another React element as a prop */
    >
      <p>This is children content</p> {/* the special `children` prop */}
    </Widget>
  );
}

function Widget({ title, count, isActive, user, tags, onLike, icon, children }) {
  return (
    <div>
      <h2>{title} ({count})</h2>
      <p>Status: {isActive ? 'Active' : 'Inactive'}</p>
      <p>Owner: {user.name}</p>
      <p>Tags: {tags.join(', ')}</p>
      <button onClick={onLike}>{icon} Like</button>
      {children}
    </div>
  );
}
```

This single example demonstrates every category of data a prop can carry: **strings, numbers, booleans, objects, arrays, functions, JSX elements, and children.**

### 3.2 Default props
If a caller doesn't pass a prop, you can supply a fallback using a default parameter:

```jsx
function Button({ label = 'Submit', variant = 'primary' }) {
  return <button className={variant}>{label}</button>;
}
```

### 3.3 Callback props — data flowing *up*
Since props only flow down, the standard way for a child to communicate back up to its parent is to accept a **function as a prop** and call it, usually passing along some data as an argument.

```jsx
function ChildInput({ onValueChange }) {
  return <input onChange={(e) => onValueChange(e.target.value)} />;
}

function Parent() {
  const [value, setValue] = useState('');
  return <ChildInput onValueChange={setValue} />;
}
```

### 3.4 Prop drilling
When data needs to pass through several layers of components that don't need it themselves (just to reach a deeply nested child), it's called **prop drilling**. It works but becomes hard to maintain in large trees — the usual fixes are the Context API or a state management library, which are beyond these basics but worth knowing by name.

### 3.5 PropTypes
`PropTypes` validates the props a component receives at runtime and warns in the console if the types don't match, which is especially useful in plain JavaScript (non-TypeScript) codebases.

```jsx
import PropTypes from 'prop-types';

Widget.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.number,
  isActive: PropTypes.bool,
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }),
  tags: PropTypes.arrayOf(PropTypes.string),
  onLike: PropTypes.func,
};

Widget.defaultProps = {
  count: 0,
  isActive: false,
};
```

---

## 4. State Management with `useState` — Basics

**State** is data owned entirely by a component that can change over time (a counter, a form field, a toggle, fetched data, etc.). Unlike props, a component fully controls and updates its own state.

### 4.1 Declaring state

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // 0 is the initial value
  //     ^current value  ^updater function

  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  );
}
```

`useState(initialValue)` returns an array with exactly two items — the convention is to destructure them as `[value, setValue]`. `initialValue` is only used on the **very first** render; after that, React remembers the current value between re-renders internally.

### 4.2 Multiple independent state variables
A component can call `useState` as many times as it needs — each call creates its own independent piece of state.

```jsx
function ProfileForm() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [subscribed, setSubscribed] = useState(false);
  // ...
}
```

### 4.3 Functional updates
When the new state depends on the previous state, pass a function to the setter instead of a value. This avoids bugs caused by stale values in batched updates.

```jsx
// Risky if count changes rapidly (e.g. called twice before re-render)
setCount(count + 1);

// Safe — React guarantees `prevCount` is the latest value
setCount((prevCount) => prevCount + 1);
```

### 4.4 Updating objects and arrays immutably
State updates must **replace** the old value, not mutate it in place. For objects/arrays, spread the old value and override what changed:

```jsx
const [user, setUser] = useState({ name: 'Sam', age: 28 });

// Wrong — mutates state directly, React won't detect the change
user.age = 29;

// Correct — creates a new object
setUser((prev) => ({ ...prev, age: 29 }));

const [items, setItems] = useState([1, 2, 3]);

// Correct — creates a new array
setItems((prev) => [...prev, 4]);
```

### 4.5 Lazy initial state
If computing the initial value is expensive, pass a function to `useState` instead of a value — it only runs once, on mount:

```jsx
const [data, setData] = useState(() => expensiveComputation());
```

---

## 5. Event Handling in React & Synthetic Events

React doesn't attach your handlers straight to native DOM events. Instead, it wraps every native browser event in a cross-browser wrapper object called a **SyntheticEvent**, which normalizes behavior so your code works the same in every browser. Event props use camelCase and receive a function reference (not a function call).

```jsx
function Example() {
  function handleClick(event) {
    console.log(event); // a SyntheticEvent, not the raw browser event
    console.log(event.nativeEvent); // access the underlying native event if needed
  }

  return <button onClick={handleClick}>Click me</button>;
}
```

Common mistake: `onClick={handleClick()}` invokes the function immediately during render, instead of passing it to run later — always write `onClick={handleClick}` or `onClick={() => handleClick(arg)}` if arguments are needed.

### 5.1 The full catalog of synthetic event categories
React's SyntheticEvent system covers essentially every native DOM event a browser can fire. Below is each category with its typical handler props and a short usage note.

**Clipboard Events** — `onCopy`, `onCut`, `onPaste`
Fire when the user copies, cuts, or pastes content, e.g. blocking paste in a sensitive field.

**Composition Events** — `onCompositionStart`, `onCompositionUpdate`, `onCompositionEnd`
Fire during input via an IME (Input Method Editor), used for languages like Chinese, Japanese, or Korean that compose characters from multiple keystrokes.

**Keyboard Events** — `onKeyDown`, `onKeyUp`, `onKeyPress` (deprecated in favor of `onKeyDown`)
Fire on physical key interaction — commonly used for keyboard shortcuts or submitting on "Enter".

```jsx
function SearchBox() {
  function handleKeyDown(e) {
    if (e.key === 'Enter') console.log('Search triggered');
  }
  return <input onKeyDown={handleKeyDown} />;
}
```

**Focus Events** — `onFocus`, `onBlur`
Fire when an element gains or loses focus — often used for field-level validation.

```jsx
function EmailField() {
  function handleBlur(e) {
    if (!e.target.value.includes('@')) console.log('Invalid email');
  }
  return <input onBlur={handleBlur} />;
}
```

**Form Events** — `onChange`, `onInput`, `onInvalid`, `onSubmit`, `onReset`
The backbone of controlled forms — `onChange` fires on every keystroke/selection change, `onSubmit` fires when a form is submitted.

```jsx
function LoginForm() {
  const [email, setEmail] = useState('');
  function handleSubmit(e) {
    e.preventDefault(); // stop the default full-page reload
    console.log('Logging in with', email);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <button type="submit">Login</button>
    </form>
  );
}
```

**Generic Events** — `onError`, `onLoad`
Used for elements like `<script>`, `<link>`, or generic resource loading/error states.

**Mouse Events** — `onClick`, `onDoubleClick`, `onMouseDown`, `onMouseUp`, `onMouseEnter`, `onMouseLeave`, `onMouseMove`, `onMouseOver`, `onMouseOut`, `onContextMenu`, `onDrag`, `onDragStart`, `onDragEnd`, `onDragEnter`, `onDragLeave`, `onDragOver`, `onDrop`
The most commonly used category — clicks, hovers, and drag-and-drop.

```jsx
function HoverCard() {
  const [hovered, setHovered] = useState(false);
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      {hovered ? 'Hovering!' : 'Hover over me'}
    </div>
  );
}
```

**Pointer Events** — `onPointerDown`, `onPointerMove`, `onPointerUp`, `onPointerCancel`, `onPointerEnter`, `onPointerLeave`, `onPointerOver`, `onPointerOut`, `onGotPointerCapture`, `onLostPointerCapture`
A unified abstraction over mouse, touch, and stylus input — useful for building input-agnostic drawing or drag interactions.

**Selection Events** — `onSelect`
Fires when text is selected within an element, e.g. inside a `<textarea>` or `<input>`.

**Touch Events** — `onTouchStart`, `onTouchMove`, `onTouchEnd`, `onTouchCancel`
Fire on touchscreen interaction — used for swipe gestures or custom touch-based components.

**UI Events** — `onScroll`
Fires when a scrollable element is scrolled — commonly used for infinite-scroll loading or sticky headers.

**Wheel Events** — `onWheel`
Fires on mouse wheel or trackpad scroll input, distinct from `onScroll` (which fires on the resulting scroll position change).

**Media Events** — `onPlay`, `onPause`, `onEnded`, `onVolumeChange`, `onTimeUpdate`, `onSeeking`, `onSeeked`, `onWaiting`, `onStalled`, `onCanPlay`, `onCanPlayThrough`, `onLoadedData`, `onLoadedMetadata`, `onLoadStart`, `onProgress`, `onRateChange`, `onDurationChange`, `onEmptied`, `onEncrypted`, `onAbort`, `onSuspend`
Used with `<audio>` and `<video>` elements to build custom media player controls.

**Image Events** — `onLoad`, `onError`
Fire when an `<img>` successfully loads or fails to load — commonly used to show a fallback/placeholder image.

```jsx
function Avatar({ src }) {
  function handleError(e) {
    e.target.src = '/fallback-avatar.png';
  }
  return <img src={src} onError={handleError} alt="avatar" />;
}
```

**Animation Events** — `onAnimationStart`, `onAnimationEnd`, `onAnimationIteration`
Fire in sync with CSS animations — useful for chaining a JS action to when a CSS animation finishes.

**Transition Events** — `onTransitionEnd`
Fires when a CSS transition completes — often used to remove an element from the DOM only after its fade-out transition finishes.

**Other Events** — `onToggle`
Fires when a `<details>` element is opened or closed by the user.

### 5.2 Quick reference table

| Category | Example Handlers |
|---|---|
| Clipboard | `onCopy`, `onCut`, `onPaste` |
| Composition | `onCompositionStart/Update/End` |
| Keyboard | `onKeyDown`, `onKeyUp` |
| Focus | `onFocus`, `onBlur` |
| Form | `onChange`, `onSubmit`, `onInvalid`, `onReset` |
| Generic | `onError`, `onLoad` |
| Mouse | `onClick`, `onMouseEnter/Leave`, `onDrag*` |
| Pointer | `onPointerDown/Move/Up` |
| Selection | `onSelect` |
| Touch | `onTouchStart/Move/End` |
| UI | `onScroll` |
| Wheel | `onWheel` |
| Media | `onPlay`, `onPause`, `onTimeUpdate` |
| Image | `onLoad`, `onError` |
| Animation | `onAnimationStart/End/Iteration` |
| Transition | `onTransitionEnd` |
| Other | `onToggle` |

---

## 6. Conditional Rendering

JSX is plain JavaScript, so you decide what to render using ordinary JS logic — there's no special "if" tag.

```jsx
// 1. Ternary — choose between two elements
{isLoggedIn ? <Dashboard /> : <LoginForm />}

// 2. Logical AND — render something, or nothing at all
{unreadCount > 0 && <Badge count={unreadCount} />}

// 3. Early return — exit the component before rendering the "main" JSX
function Page({ loading, error }) {
  if (loading) return <Spinner />;
  if (error) return <ErrorMessage text={error} />;
  return <Content />;
}

// 4. Variable holding JSX, built up with if/else beforehand
function StatusBanner({ status }) {
  let banner;
  if (status === 'success') banner = <SuccessBanner />;
  else if (status === 'error') banner = <ErrorBanner />;
  else banner = null;
  return <div>{banner}</div>;
}
```

A common gotcha: `{count && <Badge />}` renders a literal `0` on screen if `count` is `0`, since `0` is falsy but still gets returned and printed by JSX. Guard against it with `{count > 0 && <Badge />}` instead.

---

## 7. Lists & Keys

To render a collection, use `.map()` to transform an array of data into an array of JSX elements. Each element needs a special **`key`** prop — a stable, unique identifier that helps React efficiently determine which items changed, were added, or were removed between renders.

```jsx
const items = [
  { id: 1, text: 'Milk' },
  { id: 2, text: 'Eggs' },
  { id: 3, text: 'Bread' },
];

function ShoppingList() {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
}
```

Rules of thumb:
- Use a real, stable ID (like a database `_id`) as the key.
- Avoid using the array **index** as a key if the list can be reordered, filtered, or have items inserted/removed — it can cause subtly wrong UI (input values or component state getting attached to the wrong row).
- Keys only need to be unique among **siblings**, not globally across the whole app.

```jsx
// Nested lists — each map still needs its own keys
function CategoryList({ categories }) {
  return (
    <ul>
      {categories.map((cat) => (
        <li key={cat.id}>
          {cat.name}
          <ul>
            {cat.items.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
```

---

## 8. Component Composition

Composition is the practice of building complex UIs by combining small, focused components — instead of one giant component doing everything. React's official guidance is **"composition over inheritance"**: instead of extending a base component class, you assemble behavior by nesting and combining components.

### 8.1 Composing via `children`
Any JSX nested between a component's opening and closing tags is available to that component as `props.children`.

```jsx
function Card({ children }) {
  return <div className="card">{children}</div>;
}

function App() {
  return (
    <Card>
      <h2>Title</h2>
      <p>Some content inside the card.</p>
    </Card>
  );
}
```

### 8.2 Composing via named "slot" props
When a component needs more than one distinct content area, pass JSX through regular named props instead of (or in addition to) `children`.

```jsx
function SplitPanel({ left, right }) {
  return (
    <div className="split">
      <div className="left">{left}</div>
      <div className="right">{right}</div>
    </div>
  );
}

<SplitPanel left={<Sidebar />} right={<ArticleList />} />
```

### 8.3 Building a full tree from small pieces

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

function Page({ children }) {
  return <div className="page">{children}</div>;
}
```

Each of `Header`, `MainContent`, `Sidebar`, `ArticleList`, and `Footer` can be developed, tested, and reasoned about independently, which is the core benefit of composition.

---

## 9. Component Lifecycle

Every component goes through three broad phases: **Mounting** (being created and inserted into the DOM), **Updating** (re-rendering due to new props/state), and **Unmounting** (being removed from the DOM). Class components expose this directly through named methods; functional components achieve the same thing through the `useEffect` Hook.

### 9.1 Class component lifecycle methods

```jsx
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  // MOUNTING — runs once, right after the component is inserted into the DOM
  componentDidMount() {
    console.log('Mounted');
    this.interval = setInterval(() => {
      this.setState((prev) => ({ seconds: prev.seconds + 1 }));
    }, 1000);
  }

  // UPDATING — runs after every re-render caused by new props or state,
  // except the very first render
  componentDidUpdate(prevProps, prevState) {
    if (prevState.seconds !== this.state.seconds) {
      console.log('Seconds changed to', this.state.seconds);
    }
  }

  // UNMOUNTING — runs right before the component is removed from the DOM;
  // this is where you clean up timers, subscriptions, listeners, etc.
  componentWillUnmount() {
    clearInterval(this.interval);
    console.log('Unmounted, cleaned up interval');
  }

  render() {
    return <p>Seconds: {this.state.seconds}</p>;
  }
}
```

Less commonly used lifecycle methods worth knowing by name: `shouldComponentUpdate` (return `false` to skip a re-render for performance), `getDerivedStateFromProps` (sync state from incoming props before rendering), and `getSnapshotBeforeUpdate` (capture info from the DOM right before it changes, e.g. scroll position).

### 9.2 The functional equivalent: `useEffect`
`useEffect` lets a functional component run side effects and maps onto the same three lifecycle phases using a single Hook, controlled by its **dependency array**.

```jsx
import { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    console.log('Mounted'); // runs once, like componentDidMount

    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    // The returned function is the cleanup — runs like componentWillUnmount,
    // and also right before the effect re-runs on a dependency change.
    return () => {
      clearInterval(interval);
      console.log('Unmounted, cleaned up interval');
    };
  }, []); // empty dependency array = run once on mount, clean up on unmount

  useEffect(() => {
    console.log('Seconds changed to', seconds); // runs like componentDidUpdate
  }, [seconds]); // re-runs only when `seconds` changes

  return <p>Seconds: {seconds}</p>;
}
```

### 9.3 Mapping table: class lifecycle → `useEffect`

| Class Lifecycle Method | Functional `useEffect` Equivalent |
|---|---|
| `constructor` | `useState` initial value |
| `componentDidMount` | `useEffect(() => {...}, [])` |
| `componentDidUpdate` | `useEffect(() => {...}, [dep1, dep2])` |
| `componentWillUnmount` | the function **returned** from `useEffect` |
| `componentDidMount` + `componentDidUpdate` combined | `useEffect(() => {...})` with **no** dependency array (runs after every render) |

---

## Tasks

### Task 1 — Build a "Team Member" Directory
Create a functional component `TeamDirectory` that:
1. Stores an array of team members in state (`useState`), each with `id`, `name`, `role`, and `isActive`.
2. Renders the list using `.map()`, giving each `<li>` a proper `key` (use `id`, not the array index).
3. Uses **conditional rendering** to show an "🟢 Active" or "⚪ Inactive" label next to each name based on `isActive`.
4. Adds a button that toggles a member's `isActive` status when clicked (**event handling** + **state update**, updating the array immutably).
5. Extracts a `MemberCard` child component that receives a member's data via **props** (including a callback prop for the toggle button), and adds basic `PropTypes` validation to it.
6. Adds a `useEffect` that logs to the console every time the active/inactive count changes.

**Goal:** practice props (including callback props), state, events, conditional rendering, lists/keys, composition, and the mount/update lifecycle together in one small app.

### Task 2 — Refactor a Class Component to a Functional Component
You are given this legacy class component:

```jsx
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: props.startAt || 0 };
    this.increment = this.increment.bind(this);
  }

  componentDidMount() {
    console.log('Counter mounted with starting value', this.state.count);
  }

  componentWillUnmount() {
    console.log('Counter unmounted');
  }

  increment() {
    this.setState((prev) => ({ count: prev.count + 1 }));
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
1. Uses `useState` instead of `this.state` / `this.setState`.
2. Accepts `startAt` as a prop with a sensible default value.
3. Uses `useEffect` to reproduce the mount/unmount console logs from `componentDidMount` and `componentWillUnmount`.
4. Removes the constructor and manual `.bind()` — add a code comment explaining *why* binding is no longer needed with function components and inline arrow handlers.
5. Renders identically to the original.

**Goal:** solidify the mapping between class lifecycle methods and `useEffect`, and get comfortable converting real legacy code to modern functional style.