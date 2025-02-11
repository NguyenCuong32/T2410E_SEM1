import './App.css';
import Item from './components/item';

function App() {
  return (
    <div className="App">
      <Item title="Cristiano Ronaldo" content ="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum fuga
            qui, mollitia error neque ipsa blanditiis, ea beatae, harum
            asperiores autem! Consequatur quasi doloribus odio numquam iusto
            veritatis, quo atque."></Item>
      <Item title="Messi" content ="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum fuga
            qui, mollitia error neque ipsa blanditiis, ea beatae, harum
            asperiores autem! Consequatur quasi doloribus odio numquam iusto
            veritatis, quo atque."></Item>
      <Item title="Hello" content ="Hello everybody"></Item>
    </div>
  );
}

export default App;
