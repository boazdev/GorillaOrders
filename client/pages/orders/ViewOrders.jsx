import { Box, Container, CssBaseline, Grid, Typography} from '@mui/material';
import React from 'react'
import { useEffect, useState } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TopNavBar from '../../src/components/TopNavBar';
import CatNav from '../../src/components/CatNav';
import {styled} from '@mui/system'
import { getBackendWS, getBackendWS2 } from '../../src/utils/backendWsCRUD';
import Loading from '../../src/components/Loading';
import DishList from '../../src/components/DishList';
import RightOrdersCont from '../../src/components/RightOrdersCont';
const MyContainer = styled('div')({
  background:'darkred',
  maxHeight:'100%'
})

const ViewOrders = () => {
  const theme = createTheme();
  const [catList,setCatList] = useState([])
  const [isLoading,setIsLoading] = useState(true)
  const [dishList,setDishList]=useState([])
  const [filterDishList, setFilterDishList] = useState([])
  const [selectedCatId,setSelectedCatId] = useState("")
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
        //console.log(`first cat id: ${tempFirstCatId}`)
          console.log("dishes data: ")
          console.log(resp.data)
          setDishList(resp.data)
          setFilterDishList(resp.data.filter(item=>item._id===tempFirstCatId))
          setSelectedCatId(tempFirstCatId)
          setIsLoading(false)
  
  };
  

  fetchIt()
  },[])
  return (
    
    <ThemeProvider theme={theme}>
    <MyContainer>
      <CssBaseline />
      <Box sx={{width: '100%', height:'93vh'}}>
      <TopNavBar/>
      <Box
        sx={{
          marginTop: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor:'darkred'
          ,
          height:'100%'
        }}
      >
        
   
      {isLoading? 
        <Loading/>:
        <div style={{display:'flex', flexDirection:'row', alignContent:'space-between', gap:'2vh'}}>
          <div>
          <CatNav catList={catList} catFunc={setSelectedCatId}/> 
        <DishList dishList={dishList} selectedCatId={selectedCatId}/>
        </div>
        <div style={{height:"30vh", width:"30vh", backgroundColor:"orange", padding:"1vh"}}>
          {/* <Typography>Shit</Typography> */}
          <RightOrdersCont/>
        </div>
        </div>
        
        
        }
        
     
      </Box>
      
      </Box>
    </MyContainer>
      
      
  
  </ThemeProvider>
    
  )
}

export default ViewOrders