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

- #### SetState

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

- React useState and setState don’t make changes directly to the state object; they create queues to optimize performance, which is why the changes don’t update immediately.

- We need to update state of the statevariable by using teh arrow method as ther might be some inconsistency issues in the react.

  ```jsx
  function App() {
    const [count, setcount] = React.useState(0);
    return (
      <div>
        <button
          onClick={() => {
            setcount((prevCount) => prevCount + 1);
          }}
        >
          {count}
        </button>
        <Greeting />
      </div>
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

- ##### UseEffect

- UseEffect hook takes a function as input, which is executed after the initial rendering, as well as re-rendering, of the component.

- After each rendering, once the DOM has been updated and the function passed to useEffect is invoked. In the above scenario, the component gives an alert after the initial rendering of the component.

- This code introduces a side effect to the function component by updating a DOM element. Since the DOM element does not belong to this function, updating the DOM inside the useEffect hook introduces a side effect to the component.

  ```jsx
  useEffect(() => {
    document.getElementById("userName").value = "Mayank";
  });
  ```

- UseEffect calls the initialstate method everytime the component renders but teh value gets ignored after the first time it is rendered and uses the current value. So if there is an expensive method that is used to initialise a data, we can reduce this expense by simply replacing it with an arrow function.(Use a lazy initializer with useState)

  ```jsx
  const [name, setState] = React.useState(
    () => window.localStorage.getItem("name") || ""
  );
  ```

- In the given code, we have multiple side effects that need to be introduced to the function. In one of the useEffect functions, we need to update the DOM element and in other, we need to make an AJAX call and log the data to the user. Both of the tasks are logically independent, so they can be segregated into multiple “useEffect” hooks so that they can accomplish the task inside separate logical blocks. Logical segregation into multiple functions.

  ```jsx
  useEffect(() => {
    document.getElementById("userName").value = "Mayank";
  });

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      console.dir(res.data);
    });
  });
  ```

- ###### Why is useEffect defined inside a component?

  - “useEffect” function is defined inside the component so that the variables and the functions defined inside the components can be accessed directly. It takes advantage of the concept of Closure to provide access to the local functions and variables defined inside a function.

- Does useEffect execute after every Rendering?

  - By default, it runs during initial rendering as well as during the re-rendering of the component. React runs the hook associated with the component after each call to render.

- ###### Optimizing UseEffect performance :

  - There might be multiple state variable that exist insid the componnt, change on any omponent of the variable leads to rerendering, the useEffect hooks are invoked by default. We may need to run useEffect in a specific scenario, rather than executing it for each state change

  - we can configure useeffect to execute only if a specific state or props value is updated. We can skip the execution of useEffect on re-rendering on the basis of state or props value updates.

  ```jsx
  const [name, setState] = React.useState(
    () => window.localStorage.getItem("name") || ""
  );
  React.useEffect(() => {
    console.log("hello ");
    window.localStorage.setItem("name", name);
  }, [name]);
  ```

  - the array as te second argument is used as te dependency array basicallly the list of state or the props variables which will trigger the function if updated.

  - Only Running useEffect Once

  - we can pass an empty array as the second parameter to the useEffect function, and the useEffect will only run once and willl not run even if any states or props change.

  - Since it is not dependent on state or props, the component does not re-run the effect on each re-rendering. It is executed only once during initial rendering.

- ###### Cleanup in useEffect

  - Returning a function from effect is an optional cleanup mechanism. It always runs before the main function is invoked. It is used to cleanup wahtever we have done efore running the main function. if in main useEffect function we add event itner or subscribe to an API, the cleanup will reove teh event or unsubscribe us from the API.

  ```jsx
  useEffect(() => {
    consol.log("resource changed");
    return () => {
      console.log("return from resource change");
    };
  }, []);

  output -:
  /* return from resource changed
  resource changed */

  ```

- We can also create our custom react hooks for the code but there is a convention to start them with use.

  ```jsx
  const useLocalStorageItem = (key) => {
    const [state, setState] = React.useState(
      () => window.localStorage.getItem(key) || ""
    );
    React.useEffect(() => {
      window.localStorage.setItem(key, state);
    }, [state]);
    return [state, setState];
  };
  ```

  - You create a ref object with the useRef hook and that object’s current property is the current value of the ref. It can be anything, but if you pass that ref object to a component as a prop called ref, then React will set the current property to the DOM element it creates so you can reference it and manipulate it in your useEffect hook.

- React order of the hooks and components called

  <img src="https://raw.githubusercontent.com/donavon/hook-flow/master/hook-flow.png" alt="React Hook Flow Diagram" width="500" height="650"/>

- If we need to access any value in a input , it srecommended to always use htmlFor and name property as it is more reliable and it also does not breaks encapsulation of our components.

- if we need to validate a form in the real time, we can use useState and error variable to keep track fo errror in real time

  ```jsx
    const [username, setUsername] = React.useState("");
    const isLowerCase = username === username.toLowerCase();
    const error = isLowerCase ? null : "Username must be lower case";

    function handleChange(event) {
      setUsername(event.target.value);
    }

    return (
      <form }>
          <input id="usernameInput" type="text" onChange={handleChange} />
        <div style={{ color: "red" }}>{error}</div>
        <button disabled={Boolean(error)} type="submit">
          Submit
        </button>
      </form>
    );
  ```

- If a render is thrown and unhandled, the raect application will be removed from teh page and leaveds the user with a blank screen.

- Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed. Error boundaries catch errors during rendering.

- Error boundaries do not catch errors for:

  - Event handlers (learn more)
  - Asynchronous code (e.g. setTimeout or requestAnimationFrame callbacks)
  - Server side rendering
  - Errors thrown in the error boundary itself (rather than its children)

- Use the key prop when Rendering a List with React

  - The way React updates the DOM is it has a reference to the JSX elements that you gave it the last time it rendered this app component. It compares those React elements with the new React elements that you just returned at this time. Then it updates the DOM accordingly.

  - When you're giving it an array of React elements, unless React has some sort of identifier to know which element is which, it doesn't know whether you removed an element or maybe you added three and removed four or maybe you changed the order and just removed the first one.

  - It doesn't have any insight into what it is that you did to this array of React elements between the last time it rendered and this time. Any time you're rendering an array of React elements, you need to give it a key so that it can determine whether elements were removed, added, or modified.

  - if a key is not provided then it just makes the rendering wierd and might to lead to unexpectde bugs, prvide key to the root element pf a list

  - Another mistake that isto try to use the index as the key. While you get rid of the warning, you do not get rid of the bugs. That's because as React is comparing the previous version with the new version, what you're saying is the element that was at index four is actually now at index three, but React doesn't know that.

- To share state between two sibling components. The answer is to Lift the state which basically amounts to finding the lowest common parent shared between the two components and placing the state management there, and then passing the state and a mechanism for updating that state down into the components that need it.
