import logo from './logo.svg';
import './App.css';
import ProgressBar from './components/progressbar';

function App() {
  return (
    <div className="App">
      <h1>My Custom Progress Bar</h1>
      <ProgressBar progress={80} /> {/* Example usage */}
    </div>
  );
}

export default App;
