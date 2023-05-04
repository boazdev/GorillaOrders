import React, { useState } from 'react'

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import MLink from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
//import { Label } from '@mui/icons-material';
import LockIcon from '@mui/icons-material/Lock';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { createUserWs, loginUserWs, parseJwt } from '../src/utils/loginUtils';
/* import { createUserWs, loginCinemaWs } from '../Utils/loginUtils'; */
//import {SignUpBg} from '../styles/SignUpBg.module.css'
import { useRouter } from 'next/router';
const Copyright = (props) => {
    return (
      <Typography variant="body2" color="black" align="center" {...props}>
        {'Copyright © '}
        <MLink color="inherit" href="/">
          Gorilla Orders
        </MLink>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const Login = () => {
    const theme = createTheme();
    const [loginError,setLoginError] = useState(false)
    
    const [errorColor,setErrorColor] = useState(false)
    const router=useRouter()

    const [sendObj,setSendObj] = useState({username:"",password:""})
  const [errObj,setErrObj] = useState({usernameErr:"",passwordErr:""})

  const verifyFields = () => {
    let tmpErrObj={usernameErr:"",passwordErr:""}
    let isValid=true

    if(sendObj.username==='')
    {
      tmpErrObj.usernameErr="Username cannot be empty"
      isValid=false
    }

    
    
     
   
    if(sendObj.password.length<7)
    {
      tmpErrObj.passwordErr="Password must be greater than 6 characters"
      isValid=false
    }

    setErrObj(tmpErrObj)
    if(isValid)
      console.log('Login Form submitted successfully');
    return isValid
  }  

    const handleSubmit = async (event) => {
        event.preventDefault();
       let isValid = verifyFields()
        console.log(`is form valid:${isValid}`)
        let loginObj = {username:sendObj.username, password:sendObj.password}
        //let loginObj={...sendObj}
        console.log("sending obj:")
        console.table(loginObj)
        
        
          let resp = await loginUserWs(loginObj)  
          
          if(resp.status==401)
          {
            setLoginError(resp.data.error)
            setErrorColor(!errorColor)
          }
          else if(resp.status==200)
          {
            //decode token and add user data to redux store
            //
            //console.log(resp.data)
            let data = parseJwt(resp.data.token)
            console.table(data)
            localStorage.setItem('token',resp.data.token)
            /* let loginObj = {username: data.username, permissionList: data.permissions,
                 fullname:data.userData.firstname+" " + data.userData.lastname, token:resp.data.token}
            dispatch(loginAction(loginObj)) */
            //let loginObj = {userId:data._id, nickname:data.nickname, token:resp.data.token}
            /* console.log("login obj dispatching:")
            console.log(loginObj) */
            /* dispatch(loginAction(loginObj))
            dispatch(setPrivChatItems([]))
            navigate("/homepage/chats") */
            router.push('orders/ViewOrders')
          }
          

      };

  return (
   
        <ThemeProvider theme={theme}>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 6,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockIcon/>
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            sx={{input: { color: 'black' }, "& .MuiFormLabel-root": {
              color: 'black'
          },
          "& .MuiFormLabel-root.Mui-focused": {
              color: 'black'
          }} }
            //autoComplete="username"
            onChange = {(e)=>setSendObj({...sendObj,username:e.target.value})}
            autoFocus
          />

            <Typography variant='caption' sx={{color:theme.palette.error.main}}>{errObj.usernameErr}</Typography>


            
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            sx={{input: { color: 'blue' }, "& .MuiFormLabel-root": {
              color: 'black'
          },
          "& .MuiFormLabel-root.Mui-focused": {
              color: 'black'
          }} }
          onChange = {(e)=>setSendObj({...sendObj,password:e.target.value})}
            //autoComplete="current-password"
          />
        <Typography variant='caption' sx={{color:theme.palette.error.main}}>{errObj.passwordErr}</Typography>
            
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
                
          >
           Sign In
          </Button>
          {loginError&& 
          <Typography  variant="h7" color={errorColor?"red":"orange"}>
          {loginError}
        </Typography>}
          
          <Grid container>
                  {/* <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid> */}
                  <Grid item>
                    <MLink href="/SignUp" variant="body2" >
                    {"Don't have an account? Sign Up"}
                    </MLink>
                  </Grid>
                </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  </ThemeProvider>
  )
}

export default Login