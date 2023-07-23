import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from 'react-router-dom'

import { Container, TextField, Button, Typography } from "@mui/material";
import IconButton from '@mui/material/IconButton';

import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import InputAdornment from '@mui/material/InputAdornment';

import PersonIcon from '@mui/icons-material/Person';
import PasswordIcon from '@mui/icons-material/Password';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { login } from "../../core/Api";

import useAuth from '../../hook/useAuth'
import useRefershToken from "../../hook/useRefreshToken";


function Login() {
    const { auth, setAuth } = useAuth()

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const [usernameError, setUsernameError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [usernameErrorString, setUsernameErrorString] = useState("")
    const [passwordErrorString, setPasswordErrorString] = useState("")

    const refresh = useRefershToken()

    useEffect(() => {
        if (auth !== null) {
            navigate('/', { replace: true })
        }


    }, [auth])


    const handleLoginSubmit = async () => {
        if (username.length < 5) {
            setUsernameError(true)
            setUsernameErrorString("Username length is less than 5 letters")
        } else {
            setUsernameError(false)
            setUsernameErrorString("")

        }

        if (password.length < 5) {
            setPasswordError(true)
            setPasswordErrorString("Password length is less than 5 letters")

        } else {
            setPasswordError(false)
            setPasswordErrorString("")

        }

        try {
            const data = await login(username, password)
            if (data.status === false) {
                if (data.message === "User doesn't exists") {
                    setUsernameError(true)
                    setUsernameErrorString("User doesn't exists")
                    setPasswordError(false)
                    setPasswordErrorString("")
                }

                if (data.message === "Wrong password") {
                    setUsernameError(false)
                    setUsernameErrorString("")
                    setPasswordError(true)
                    setPasswordErrorString("Password isn't correct")
                }
            } else if (data.status === true) {
                const user = data?.data?.user;
                const token = data?.data?.token;
                //TODO save the token in cookies
                setAuth({ user, token })

                if (from === "/login") from = "/"

                navigate(from, { replace: true })
            }


        } catch (error) {
            console.log(error);
        }


    }




    return <Container>
        <br /><br /><br />
        <br /><br /><br />

        <Button onClick={() => refresh()}>refresh</Button>


        <Grid2 container spacing={3}>

            <Grid2 xl={3} lg={3} md={3} sm={1} xs={1} style={{ textAlign: "center" }}>
            </Grid2>


            <Grid2 xl={6} lg={6} md={6} sm={10} xs={10} style={{ textAlign: "center" }}>
                <TextField
                    error={usernameError}
                    required
                    fullWidth
                    id="outlined-required"
                    value={username}
                    onChange={(event) => {
                        setUsername(event.target.value);
                    }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><PersonIcon /></InputAdornment>,
                    }}
                    label="Username"
                />
                {usernameErrorString === "" ? null :
                    <Typography variant="body1" style={{ textAlign: "left", color: "Red", fontSize: "13px", marginTop: "5px" }}>{usernameErrorString}</Typography>
                }


                <Grid2 xl={3} lg={3} md={3} sm={1} xs={1} style={{ textAlign: "center" }}>
                </Grid2>







            </Grid2>


            <Grid2 xl={3} lg={3} md={3} sm={1} xs={1} style={{ textAlign: "center" }}>
            </Grid2>


            <Grid2 xl={3} lg={3} md={3} sm={1} xs={1} style={{ textAlign: "center" }}>
            </Grid2>

            <Grid2 xl={6} lg={6} md={6} sm={10} xs={10} style={{ textAlign: "center" }}>

                <TextField
                    error={passwordError}
                    fullWidth
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(event) => {
                        setPassword(event.target.value);
                    }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><PasswordIcon /></InputAdornment>,
                    }}
                    autoComplete="current-password"
                />

                {passwordErrorString === "" ? null :
                    <Typography variant="body1" style={{ textAlign: "left", color: "Red", fontSize: "13px", marginTop: "5px" }}>{passwordErrorString}</Typography>
                }


            </Grid2>

            <Grid2 xl={3} lg={3} md={3} sm={1} xs={1} style={{ textAlign: "center" }}>
            </Grid2>



            <Grid2 xl={3} lg={3} md={3} sm={1} xs={1} style={{ textAlign: "center" }}>
            </Grid2>

            <Grid2 xl={6} lg={6} md={6} sm={10} xs={10} style={{ textAlign: "center" }}>
                <IconButton aria-label="fingerprint" color="secondary" onClick={handleLoginSubmit}>
                    <span style={{ marginRight: "10px" }}>Login</span> <ArrowCircleRightIcon />
                </IconButton>
            </Grid2>

            <Grid2 xl={3} lg={3} md={3} sm={1} xs={1} style={{ textAlign: "center" }}>
            </Grid2>

            <Grid2 xl={12} lg={12} md={12} sm={12} xs={12} style={{ textAlign: "center" }}>
            </Grid2>
        </Grid2>


    </Container>
}


export default Login