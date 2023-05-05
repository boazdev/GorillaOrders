import React from 'react'
import { Box, Grid } from '@mui/material';
import DishCard from './DishCard';
import CustomScrollbar from './CustomScrollBar';

const DishList = (props) => {
    return (
      <CustomScrollbar>
        <Grid container spacing={2} sx={{ bgcolor: 'rgba(255, 140, 0, 0.15)', width: '750px', p: 2 ,}}>
          {props.dishList.filter(item=>item.categoryId===props.selectedCatId).map((dish) => (
            <Grid key={dish._id} item xs={6}>
              <DishCard dish={dish} />
            </Grid>
          ))}
        </Grid>
        </CustomScrollbar>
      /* </div> */
    );
  };
  
  export default DishList;
  
  
  
  
  
  
  
  
  
  
  
  
  


  