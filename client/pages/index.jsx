import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container, Typography, Link, Box, Button,  } from '@mui/material';
import MyLink, { NextLinkComposed } from '../src/components/MyLink';
import Image from 'next/image'
const theme = createTheme({
  palette: {
	background: {
		default: '#e0e0e0',
	  },
    primary: {
      main: '#000022', // change this to your preferred primary color
    },
  },
});

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm" sx={{ mt: 8 }} style={{}} >
        <Typography variant="h3" align="center" gutterBottom color={theme.palette.primary.main}>
          Welcome to Gorilla Orders
        </Typography>
		{console.log("env: " +process.env.BACKEND_URL)}
        <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
			{/* <MuiLink href='/SignUp'>Register</MuiLink> */}
          {/* <Link href="/SignUp" underline="none" color={theme.palette.secondary.main}>
            Register
          </Link> */}
		  <Button variant='contained' LinkComponent={NextLinkComposed} to='SignUp'>Sign Up</Button>
		  {/* <MyLink href='/Login'>Shit</MyLink> */}
		  <Button variant='contained' LinkComponent={NextLinkComposed} to='Login'>LOGIN</Button>
		  <Button variant='contained' LinkComponent={NextLinkComposed} to='Admin'>Back Office</Button>
          {/* <Link href="#" underline="none" color={theme.palette.secondary.main}>
            Login
          </Link>
          <Link href="#" underline="none" color={theme.palette.secondary.main}>
            Back Office
          </Link> */}
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
		<img src="/gorillaLogo.jpg" alt="My Image" height="450vh" width="450vh"/>
		{/* <Image src="/gorillaLogo.jpg" alt="My Image" height="470vh" width="470vh"/> */}
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Home;