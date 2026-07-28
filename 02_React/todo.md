
1. Introduction to State
ui pr changes ke liye state 


2. Creating State

Naming Convention

  count --> set+Count
  name --> set+Name

3. State Initialization


Number
const [count, setCount] = useState(0);


String
const [name, setName] = useState("");


Boolean
const [isLogin, setIsLogin] = useState(false);


Object
const [user, setUser] = useState({
  name: "",
  age: 0
});


Array
const [users, setUsers] = useState([]);


null
const [data, setData] = useState(null);


undefined
const [value, setValue] = useState(undefined);


Nested Object
const [user, setUser] = useState({
  name: "",
  address: {
    city: "",
    state: ""
  }
});

Lazy Initialization



4. Reading State


5. State Updation


Direct Update
setCount(5);

Increment
setCount(count + 1);


Decrement
setCount(count - 1);


Toggle Boolean
const [dark, setDark] = useState(false);

setDark(!dark);


Update String
setName("Alex");



Replace Object
setUser({
  name: "John",
  age: 25
});




6. Previous State (Functional Update)



Functional

setCount(prev => prev + 1);

Useful when the next state depends on the previous state.


7. Asynchronous Nature



8. State Queue

setCount(1);

setCount(2);

setCount(3);


9. Multiple Updates


wrong 

setCount(count + 1);

setCount(count + 1);

setCount(count + 1);

right

setCount(prev => prev + 1);

setCount(prev => prev + 1);

setCount(prev => prev + 1);

Result

+3

10. Object State Updation

Wrong

setUser({
  age: 22
});

Previous properties are lost.

Correct

setUser({
  ...user,
  age: 22
});


11. Nested Object Update

const [user, setUser] = useState({
  name: "John",
  address: {
    city: "Delhi",
    state: "MP"
  }
});

Update city

setUser({
  ...user,
  address: {
    ...user.address,
    city: "Mumbai"
  }
});



12. Array State Updation

Add

setUsers([...users, newUser]);

Remove

setUsers(users.filter(user => user.id !== id));

Update

setUsers(
  users.map(user =>
    user.id === id
      ? { ...user, name: "Alex" }
      : user
  )
);
