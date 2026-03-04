// JSX in React.js

function User() {
  return;
  <div>
    <h1>Hello World</h1>
    <p>This is just a simple ```Hello World``` game.</p>
  </div>;
}

export default User;

User.addEventListener("click", () => {
  setTimeout(() => {
    console.log("True! It's just a simple game");
  }, 3000);
});

const element = <h1>Hello Moeez </h1>;

<h1>Hello World</h1>;

return (
  <div>
    <h1>Hello</h1>
    <p>World</p>
  </div>
);

{
  /* <>
    <h1>Hello</h1>
    <p>World</p>
</> */
}

{
  /* <h1>{5+5}</h1>
<h1>{name.toUpperCase()}</h1>
<h1>{isLoggedIn ? "Welcome" : Login}</h1> */
}

<div style={{ color: "red", fontSize: "20px" }}>Hello</div>;

const users = ["Ali", "Ahmed", "Moeez", "Rameez"];

<ul>
  {users.map(
    (user, index) => (
      (<li key={index}>{user}</li>),
      (<li key={index}>{user}</li>),
      (<li key={index}>{user}</li>),
      (<li key={index}>{user}</li>),
      (<li key={index}>{user}</li>),
      (<li key={index}>{user}</li>),
      (<li key={index}>{user}</li>),
      (<li key={index}>{user}</li>)
    ),
  )}
</ul>;

// ------------------- //
// Basic Props Example

// Child Component
function User(props) {
  return <h1>Hello {props.name}</h1>;
}

// Parent Component
function App() {
  return <User name="Moeez" />;
}

// App();

// ------------------- //
// Destructuring Props
function User({ name }) {
  return <h1>Hello {name}</h1>;
}

// ---------------------- //
// Passing Multiple Props
<User name="Abdul Moeez" age={24} city="Lahore" />;

// Child
function User({ name, age, city }) {
  return (
    <>
      <h1>{name}</h1>
      <p>{age}</p>
      <p>{city}</p>
    </>
  );
}

// ----------- //
// Uses of JSX
const name = "Abdul Moeez";
const greeting = <h1>Hello, {name}!</h1>;
console.log(greeting);

// ------------- //
// Default Props
function User({ name = "moizycodes" }) {
  return <h1>Hello {name}</h1>;
}

{
  /* <User />; */
}

// ------------------------------------- //
// Real Example (Professional Structure)
function Card({ title, description, price }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <h3>${price}</h3>
    </div>
  );
}

function App() {
  return (
    
    <>
      <Card
        title="React Course"
        description="Learn React from Scratch"
        price={99}
      />
      <Card title="JS Course" description="Master JavaScript" price={79} />
    </>
  );
}
