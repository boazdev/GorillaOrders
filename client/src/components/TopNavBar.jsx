import React from 'react'
import { Box, Button, Typography,button } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import { useRouter } from 'next/router';
const TopNavBar = () => {
  const router= useRouter()
  return (
    <Box sx={{
        marginTop: 0,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor:'black',
        justifyContent:'space-between',
        height:"7vh"
      }}
      maxWidth='100%'>
        {/* <Typography variant='h3' color='#F8EAD1'>Menu</Typography> */}
        <Button variant='outlined' startIcon={<MenuIcon/>} sx={{color:'#F8EAD1'}}>Menu</Button>
        <Typography variant='h4' color='#F8EAD1'>Gorilla Restaurant</Typography>
        <Button variant='outlined' startIcon={<LogoutIcon/>} sx={{color:'#F8EAD1'}} onClick={()=>router.push('/')}>Logout</Button>
        
    </Box>
    
  )
}

export default TopNavBar