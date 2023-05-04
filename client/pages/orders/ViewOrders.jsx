import { Box, Container, CssBaseline, Typography} from '@mui/material';
import React from 'react'
import { useEffect, useState } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TopNavBar from '../../src/components/TopNavBar';
import CatNav from '../../src/components/CatNav';
import {styled} from '@mui/system'

const MyContainer = styled('div')({
  background:'darkred',
  height:'400px'
})
const ViewOrders = () => {
  const theme = createTheme();
  return (
    
    <ThemeProvider theme={theme}>
    {/* <Container component="main" maxWidth="xl" sx={{backgroundColor:"red", m:0}}> */}
    <MyContainer>
      <CssBaseline />
      <Box sx={{width: '100%'}}>
      <TopNavBar/>
      <Box
        sx={{
          marginTop: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor:'darkred'
        }}
      >
        
      <Typography variant='h1'>Orders</Typography>
      <CatNav/>
      </Box>
      </Box>
    </MyContainer>
      
      
    {/* </Container> */}
  </ThemeProvider>
    
  )
}

export default ViewOrders