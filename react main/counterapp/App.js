import './App.css';
import Counter from './Counter';

function App() {
  return (
    <div className="App">
      <h1>Counter App - State and Props</h1>
      {/* We are passing count as props here */}
      <Counter initialCount={10} />
    </div>
  );
}

export default App;
