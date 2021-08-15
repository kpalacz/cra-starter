import './App.css';

function App() {
  const url = 'https://competent-meninsky-9ba18d.netlify.app';
  return (
    <div className="App">
      <header className="App-header">

        <p>
          <iframe title="embedded" frameBorder={0} src={url}></iframe>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>

  );
}

export default App;
