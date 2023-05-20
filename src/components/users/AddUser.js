import React, { useState } from "react";

import { Alert, Container, TextField } from "@mui/material";
import IconButton from '@mui/material/IconButton';

import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import InputAdornment from '@mui/material/InputAdornment';

import PersonIcon from '@mui/icons-material/Person';
import PasswordIcon from '@mui/icons-material/Password';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { addNewUser } from "../../core/Api";

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

function AddUser(){
    const [username, setUsername] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [isAdmin, setIsAdmin] = useState(true)
    const [isAdded, setIsAdded] = useState(false)
    const [isFailed, setIsFailed] = useState(false)
    const [isUserExists, setIsUserExists] = useState(false)


    const [usernameError, setUsernameError] = useState(false)
    const [nameError, setNameError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)


    const handleLoginSubmit = async ()=>{
        var errors = 0
        if(username.length < 5){
            setUsernameError(true)
            errors++
        }else{
            setUsernameError(false)
        }

        if(name.length < 5){
            setNameError(true)
            errors++

        }else{
            setNameError(false)
        }

        if(password.length < 5){
            errors++
            setPasswordError(true)
        }else{
            setPasswordError(false)
        }

       if(errors === 0){
            try {
                const data = await addNewUser(username, name, password, isAdmin)
                console.log(data.data);
                if(data.data.status === false){
                    if(data.data.message === "Username is exists"){
                        setIsUserExists(true)
                        setIsAdded(false)

                    }
                }else if(data.data.status === true){
                    setIsUserExists(false)
                    setIsAdded(true)
                }

            } catch (error) {
                console.log(error);
            }
       }


    }




    return <Container>
                    <br /><br /><br />
                    <br /><br /><br />



        <Grid2 container spacing={3}>

        <Grid2 xl={3} lg={3} md={3} sm={1} xs={1} style={{textAlign:"center"}}>
            </Grid2>

            <Grid2 xl={6} lg={6} md={6} sm={10} xs={10} style={{textAlign:"center"}}>
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

            </Grid2>

            <Grid2 xl={3} lg={3} md={3} sm={1} xs={1} style={{textAlign:"center"}}>
            </Grid2>



            <Grid2 xl={3} lg={3} md={3} sm={1} xs={1} style={{textAlign:"center"}}>
            </Grid2>

            <Grid2 xl={6} lg={6} md={6} sm={10} xs={10} style={{textAlign:"center"}}>
                <TextField
                    error={nameError}
                    required
                    fullWidth
                    id="outlined-required2"
                    value={name}
                    onChange={(event) => {
                        setName(event.target.value);
                      }}              
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><PersonIcon /></InputAdornment>,
                      }}                    
                    label="Name"
                />

            </Grid2>

            <Grid2 xl={3} lg={3} md={3} sm={1} xs={1} style={{textAlign:"center"}}>
            </Grid2>






        






            <Grid2 xl={3} lg={3} md={3} sm={1} xs={1} style={{textAlign:"center"}}>
            </Grid2>

            <Grid2 xl={6} lg={6} md={6} sm={10} xs={10} style={{textAlign:"center"}}>
               
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


            </Grid2>

            <Grid2 xl={3} lg={3} md={3} sm={1} xs={1} style={{textAlign:"center"}}>
            </Grid2>

            <Grid2 xl={3} lg={3} md={3} sm={1} xs={1} style={{textAlign:"center"}}>
            </Grid2>

            <Grid2 xl={6} lg={6} md={6} sm={10} xs={10} style={{}}>
                <FormControlLabel control={
                    <Checkbox value={isAdmin} onChange={(event) => {
                        setIsAdmin(event.target.value);
                      }}/>
                } label="Is Admininstration" />

            </Grid2>

            <Grid2 xl={3} lg={3} md={3} sm={1} xs={1} style={{textAlign:"center"}}>
            </Grid2>



            <Grid2 xl={3} lg={3} md={3} sm={1} xs={1} style={{textAlign:"center"}}>
            </Grid2>

            <Grid2 xl={6} lg={6} md={6} sm={10} xs={10} style={{textAlign:"center"}}>
                {isAdded ? 
                
                <Alert variant="filled" severity="success">
                User Added succesfully
                </Alert>
                
                : null }

                {isUserExists ? 
                    <Alert variant="filled" severity="warning">
                    User Already Exists
                    </Alert>
                
                : null}

                <br />
                <IconButton aria-label="fingerprint" color="secondary" onClick={handleLoginSubmit}>
                    <span style={{marginRight:"10px"}}>Add New User</span> <ArrowCircleRightIcon />
                </IconButton>
            </Grid2>

            <Grid2 xl={3} lg={3} md={3} sm={1} xs={1} style={{textAlign:"center"}}>
            </Grid2>


        </Grid2>


    </Container>
}


export default AddUser