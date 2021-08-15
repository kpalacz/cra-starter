import logo from './logo.svg';
import './App.css';

function App() {
  // const url = "https://www.youtube.com/embed/zFRXCwdPD-M";
  const url = 'https://competent-meninsky-9ba18d.netlify.app';
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <iframe title="embedded" src={url}></iframe>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>

  );
}

export default App;
