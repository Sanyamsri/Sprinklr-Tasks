# React Notes

### React Introduction

- JSX id not supported by browser. React Craete Element API creates an element for us.JSX is an html like syntax to create

- To use JSX in brwoser we need a compiler like Babel Stand alone which will compile our JSX code in the brows

- The babel finds a code in the script compiles it and inserts a new script that has the compiled code. So the browser can evaluate

- {} is used for javascript expressions. Whatever in it that resolves to a va\

- React Fragmant impotance :
  If we need to put two elemets side by side
  In react.createelement, We cannot pass two variables side by side in the first argument, that's why JSX always needs to return a single component.
  so instead what we can do is we can craete react fragment. The React fragment allows us to put elements side by side without having to have some sort of container element like a div. (<></>)

```jsx
<>
  <span>hellow</span>
  <span>world</span>
</>
```

- We can make reusable components in JSX.We can declarea component and then reuse it in another component by just inserting it like in html. The first letter should be capital and teh component would be a function or class with return value as JSX

```jsx
const Message = (props) => <div>{props.msg}</div>;
const element = (
  <>
    <Message msg="Hello world" />
    <Message msg="Nya world" />
  </>
);
```

- PropTypes is used to check if the custom component has been used correctly or not and validate the types of props that are passed into the component.

```jsx
const Message = ({ firstName, lastName }) => (
  <div>
    {firstName} {lastName}
  </div>
);
Message.propTypes = {
  firstname: PropTypes.string,
  lastName: PropTypes.string.isrequired,
};
const element = (
  <>
    <Message firstName="Sanyam" />
  </>
);
```

- PropTypes adds a fair amount of code that needs to be run whenever React is rendering your components which may impact performance.

- while using {} the expression inside it is compiled to, in the react.createElement as a string as the third argument, we get this string.

- We have react.createElement div, null for the props, and then the string and so on. If we wanted to, instead of passing this string, do some sort of if statement, that wouldn't work at all. It doesn't make any sense to pass a statement as an argument to a function

- Working with ternary expressions in reactJs

```jsx
const Message = ({ text }) => {
  // console.log(text.length);
  //js
  return (
    //jsx
    <div>
      {/*js*/}
      {`This text ${text} contains `}
      <strong> {text.length > 0 ? text.length : "NO"} </strong>
      characters
    </div>
  );
};
```

- Whenever any element in DOM is changed in simple Javascript the whole DOM updates even its child elements who were not affected by the change , whenever state changes, you don't have to re-render your entire element whereas

- When you create React elements, you trigger a re-render of a component, React is going to compare the elements that you returned this time with the elements that you returned last time nd then it will update the DOM surgically to only update the things that were different between the last time and this time you returned JSX.

- for inline styles we need to use style attribute and pass an object like this

```jsx
const Box = ({ size, color }) => {
  return (
    <div className={`box box--${size}`} style={{ backgroundColor: `${color}` }}>
      {size} {color} box
    </div>
  );
};
```

- We can set various event handling on different components usnh on'event' property of the element which triggers the event handler function call provided in the property. for example

- We can also state variables for managing various state of the component and can use it accordingly. setState will update our state variable and then render the app. That will just call React.render on our root again. This is not typically how you re-render an application or manage state in a React application,

```jsx
const state = { username: "", events: 0 };
function App() {
  const onClickHandler = (event) => {
    setState({ events: state.events + 1 });
  };
  const onBlurHandler = (event) => {
    setState({ username: event.target.value });
  };
  function setState(newState) {
    Object.assign(state, newState);
    renderApp();
  }
  return (
    <div>
      <p>There have been {state.events} events.</p>
      <p>
        <button onClick={onClickHandler}>Click Me</button>
      </p>
      <p>You typed: {state.username} </p>
      <p>
        <input onBlur={onBlurHandler} />
      </p>
    </div>
  );
}
```

- What is a react hook? Hooks are built-in React functions introduced in React version 16.8. They allow you to use features of the React library like lifecycle methods, state, and context in functional components without having to worry about rewriting it to a class.

- We can manage one or more state in react by using React.useState hook functionality as it returns an array for the state and setstate function for changing the value of the state

- Any time we call tteh setState, our updater function will trigger a re-render of this entire function component. When React useState is called again, it will ignore the initial value and instead give us the current value of that name.

  ```jsx
  function App() {
    const [name, setState] = React.useState("");
    const onChangeHandler = (e) => {
      name = setState(e.target.value);
    };
    return (
      <>
        <form>
          <label htmlFor="name">Name: </label>
          <input onChange={onChangeHandler} id="name" />
        </form>
        {name ? <strong> {name} </strong> : "please type your name"}
      </>
    );
  }
  ```

- What are Side effects?

  - A side Effect is an execution that affects something outside the scope of the function being executed. E.g. -if a function modifies a global variable, then that function is introducing a side effect — the global variable doesn’t belong to the scope of the current function.

- Some examples of side effects in React components are:

  - Making asynchronous API calls for data
  - Setting a subscription to an observable
  - Manually updating the DOM element
  - Updating global variables from inside a function

- UseEffect hook is

- UseEffect calls the initialstate method everytime the component renders but teh value gets ignored after the first time it is rendered and uses the current value. So if there is an expensive method that is used to initialise a data, we can reduce this expense by simply replacing it with an arrow function.(Use a lazy initializer with useState)

  ```jsx
  const [name, setState] = React.useState(
    () => window.localStorage.getItem("name") || ""
  );
  ```
