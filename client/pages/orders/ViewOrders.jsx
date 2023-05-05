import { Box, Container, CssBaseline, Typography} from '@mui/material';
import React from 'react'
import { useEffect, useState } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TopNavBar from '../../src/components/TopNavBar';
import CatNav from '../../src/components/CatNav';
import {styled} from '@mui/system'
import { getBackendWS, getBackendWS2 } from '../../src/utils/backendWsCRUD';
import Loading from '../../src/components/Loading';
import DishList from '../../src/components/DishList';
const MyContainer = styled('div')({
  background:'darkred',
  height:'400px'
})

const ViewOrders = () => {
  const theme = createTheme();
  const [catList,setCatList] = useState([])
  const [isLoading,setIsLoading] = useState(true)
  const [dishList,setDishList]=useState([])
  const [filterDishList, setFilterDishList] = useState([])
  useEffect(()=>{
    const fetchIt = async () => {

      let resp = await getBackendWS("categories")
      if (resp.status==401)
        {
          console.log(resp.data.error)
          return
        }
          console.log("categories data: ")
          console.log(resp.data)
          setCatList(resp.data)
         let tempFirstCatId= resp.data[0]._id
          resp = await getBackendWS("dishes")
      if (resp.status==401)
        {
          console.log(resp.data.error)
          return
        }
          console.log("dishes data: ")
          console.log(resp.data)
          setDishList(resp.data)
          setFilterDishList(resp.data.filter(item=>item._id===tempFirstCatId))
          setIsLoading(false)
      //console.log(resp)
      
      
      //console.log(tempMembersList)
      
      //dispatch(setEditData(tempMoviesList))
      //console.log("movie view all page render")
  };
  
  //console.log("context:" + menuOption)
  //printFunc()
  fetchIt()
  },[])
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
        
      {/* <Typography variant='h1'>Orders</Typography> */}
      {isLoading? 
        <Loading/>:
        <div>
          <CatNav catList={catList} setFilterDishList={setFilterDishList}/> 
        <DishList dishList={dishList}/>
        </div>
        
        }
        
     
      </Box>
      
      </Box>
    </MyContainer>
      
      
    {/* </Container> */}
  </ThemeProvider>
    
  )
}

export default ViewOrders