import logo from './logo.svg';
import './App.css';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { AppBar, Typography } from '@mui/material';

import CottageIcon from '@mui/icons-material/Cottage';

import MainPage from './components/MainPage';
import CapitalAccount from './components/capital/CapitalAccount';
import AddUser from './components/users/AddUser';

function App() {

  return (
    <Router>
    <div className="App">

      <header className="App-header">
      <AppBar position="static" color="primary" style={{background:"#313131", padding:"5px"}}>
        
        <Typography variant='h5'>
        <Link to="/" style={{textDecoration:"none"}}>
          <CottageIcon sx={{ color: "#ffffff"}} fontSize="big" /> <span style={{textDecoration:"none", color:"#eab676"}}>Home </span>
        </Link>
        | Accounty Program
        </Typography>
      </AppBar>
      </header>

      <Routes>

      <Route path="/" element={<MainPage />} />
      <Route path="/capital-account" element={<CapitalAccount />} />
      <Route path="/add-user" element={<AddUser />} />
      </Routes>

    </div>
    </Router>
  );
}

export default App;
