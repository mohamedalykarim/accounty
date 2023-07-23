import { Outlet } from "react-router-dom";

import { AppBar, Button, Typography } from '@mui/material';
import { useNavigate, useLocation } from "react-router-dom";

import useAuth from '../hook/useAuth'

import CottageIcon from '@mui/icons-material/Cottage';
import { Link } from 'react-router-dom';

import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect } from "react";







const Layout = () => {
    const { auth, setAuth } = useAuth()
    const navigate = useNavigate()


    const handleLogout = () => {

        setAuth(null)
        navigate('/login', { replace: true })
    }

    const handleLogin = () => {
        navigate('/login', { replace: true })
    }





    return (


        <main className="App">
            <header className="App-header">

                <AppBar position="static">
                    <Toolbar>
                        <Link to="/" style={{ textDecoration: "none" }}>
                            <CottageIcon size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                            />
                        </Link>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

                            Accounty Program

                        </Typography>
                        {
                            auth !== null ?
                                <Button color="inherit" onClick={handleLogout}>
                                    logout
                                </Button>
                                :
                                <Button color="inherit" onClick={handleLogin}>
                                    login
                                </Button>

                        }

                    </Toolbar>
                </AppBar>


            </header>
            <Outlet />
        </main>
    )
}

export default Layout