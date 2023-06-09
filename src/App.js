import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import { User } from './Context/context';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import Orderpage from './pages/Orderpage';
import Responsepage from './pages/Responsepage';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { FacebookOutlined, Twitter, Instagram, MailOutline } from '@mui/icons-material';
import axios from 'axios';


function App() {
  const {user} = useContext(User);

  return (
    <Routes>
        <Route exact path="/" element={user.loggedIn ? <Home /> : <Navigate to="/login"/>} />
        <Route path="/register" element={user.loggedIn ? <Navigate to="/"/> : <Register />} />
        <Route path="/login" element={user.loggedIn ? <Navigate to="/" /> : <Login />} />
        <Route path={`/order/:id`} element={<Orderpage />} />
        <Route path={`/response/:id`} element={<Responsepage />} />
    </Routes>
  );
}

export default App;