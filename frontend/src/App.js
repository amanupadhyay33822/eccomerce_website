import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Main_page from './Pages/Main_page';

function App() {
  return (
 
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Signup/>}/>
        <Route path='/home' element={<Main_page/>}/>
      </Routes>
    </Router>
  
  );
}

export default App;
