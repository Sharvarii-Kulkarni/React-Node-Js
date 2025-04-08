import './App.css';
import UserCard from './components/UserCard';

function App() {
  return (
    <div className="App">
      <h1>User Info</h1>

      {/* Correct usage */}
      <UserCard name="Aisha" age={22} isStudent={true} />

      {/* Incorrect usage to test prop-types */}
      <UserCard name={123} age="twenty" isStudent="yes" />
    </div>
  );
}

export default App;
