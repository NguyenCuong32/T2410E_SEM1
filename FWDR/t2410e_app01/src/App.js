
import './App.css';
import Hello from './components/Hello';
import Order from './components/Order';

function App() {
  return (
    <div className="App">
      <Order name="Lavie" quantity="10"></Order>
      <Order name="Tiger Beer" quantity="24"></Order>
      <Hello name="Hoang Anh"></Hello>
      <Hello name="Ha Thi Anh"></Hello>
    </div>
  );
}

export default App;
