import './App.css';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import AboutUs from './pages/AboutUs';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
     <Router>
      <Header></Header>
      <main>
        <Routes>
          <Route path='/home' element={<HomePage></HomePage>}></Route>
          <Route path='/product' element={<ProductPage></ProductPage>}></Route>
          <Route path='/aboutus' element={<AboutUs></AboutUs>}></Route>
        </Routes>
      </main>
      <Footer></Footer>
     </Router>
    </div>
  );
}

export default App;
