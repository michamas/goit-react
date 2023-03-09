import logo from "./logo.svg";
import "./App.css";

// props:
// name
function Welcome(props) {
  //destrukturyzacja
  const { name } = props;

  const tmpString = `Hello, ${name}`;
  return <div>Hello, {name}</div>;
}

function Product(props) {
  const { price, name, description } = props;

  return <div></div>;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Welcome name="General Kenobi" age="230" />
        <Welcome name="Dr Strange" favourite="dog" />

        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
