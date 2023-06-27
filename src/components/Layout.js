import { Outlet } from "react-router-dom";

import { AppBar, Typography } from '@mui/material';

import CottageIcon from '@mui/icons-material/Cottage';
import { Link } from 'react-router-dom';


const Layout = ()=>{
    return(

        
        <main className="App">
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
            <Outlet />
        </main>
    )
}

export default Layout