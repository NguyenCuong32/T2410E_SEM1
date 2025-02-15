import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./pages/Home";
import AboutMe from "./pages/AboutMe";

function App() {
  return (
    <div className="App">
        <Router>
          <Header></Header>
          <main className="content">
            <Routes>
              <Route path="/home" element={<HomePage></HomePage>}></Route>
              <Route path="/aboutme" element={<AboutMe></AboutMe>}></Route>
            </Routes>
          </main>
        </Router>
    </div>
  );
}

export default App;
