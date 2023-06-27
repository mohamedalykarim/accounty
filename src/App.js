import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import MainPage from './components/MainPage';
import CapitalAccount from './components/capital/CapitalAccount';
import AddUser from './components/users/AddUser';
import Layout from './components/Layout';
import RequireAuth from './components/RequireAuth';
import Login from './components/users/Login';


function App() {

  return (
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path="/login" element={<Login />} />

          <Route element={<RequireAuth />} >
            <Route path="/" element={<MainPage />} />
            <Route path="/capital-account" element={<CapitalAccount />} />
            <Route path="/add-user" element={<AddUser />} />
          </Route>
        </Route>
      </Routes>
  );
}

export default App;
