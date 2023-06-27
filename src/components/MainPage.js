
import { React, useState } from "react";
import { Link, Navigate } from 'react-router-dom'

import { Container, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";


import capitalImg from "../assets/imgs/capital-png.png"
import Login from "./users/Login";
import useAuth from "../hook/useAuth";


function MainPage(props) {
    const { auth } = useAuth()



    return <>

        {auth?.user ? <Container>
            <br /><br /><br />
            <Grid2 container>
                <Grid2 xl={4} lg={4} md={4} sm={12} xs={12} style={{ textAlign: "center" }}>
                    <img src={capitalImg} alt="Capital" style={{ width: "100px", height: "100px" }} />
                    <Link to="/capital-account" >
                        <Typography variant="body1">Capital account</Typography>
                    </Link>
                </Grid2>

                <Grid2 xl={4} lg={4} md={4} sm={12} xs={12} style={{ textAlign: "center" }}>

                </Grid2>

                <Grid2 xl={4} lg={4} md={4} sm={12} xs={12} style={{ textAlign: "center" }}>

                </Grid2>
            </Grid2>
        </Container>

            :

            <Navigate to="/login" replace />


        }

    </>

}

export default MainPage