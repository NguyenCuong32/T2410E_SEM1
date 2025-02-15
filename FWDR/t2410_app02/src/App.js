import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";

function App() {
  return (
    <div className="app-container">
      <Router>
        <Header></Header>
        <main className="content">
          <Routes>
            <Route path="/home" element={<HomePage />}/>
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
