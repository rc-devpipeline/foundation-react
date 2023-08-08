import logo from './logo.svg';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <p>
          Edit <code>src/components/App.js</code> and save to reload.
        </p>
        <a
          className="app-link"
          href="https://devpipeline.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          DevPipeline
        </a>
      </header>
    </div>
  );
}

export default App;
