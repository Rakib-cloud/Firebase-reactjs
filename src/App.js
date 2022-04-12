import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Header from './Components/Header/Header';
import Resister from './Components/Register/Resister';

function App() {
  return (
    <div className="App">
      <Header></Header>
        <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/register" element={<Resister></Resister>} />
      </Routes>
    </div>
  );
}

export default App;
