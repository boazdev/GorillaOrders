import React from 'react'
import { Box, Grid } from '@mui/material';
import DishCard from './DishCard';
import CustomScrollbar from './CustomScrollBar';

const dishList2 = [
    { _id: '1', name: 'Spaghetti Carbonara', price: 12, image: "https://www.madewithdelmonte.in/uploads/Tile%20-%20garlic-butter-pasta-tile.jpg" },
    { _id: '2', name: 'Margherita Pizza', price: 10, image: "https://www.madewithdelmonte.in/uploads/Tile%20-%20garlic-butter-pasta-tile.jpg" },
    { _id: '3', name: 'Lasagna', price: 15, image: "https://www.madewithdelmonte.in/uploads/Tile%20-%20garlic-butter-pasta-tile.jpg" },
    { _id: '4', name: 'Tiramisu', price: 8, image: "https://www.madewithdelmonte.in/uploads/Tile%20-%20garlic-butter-pasta-tile.jpg" },
    { _id: '5', name: 'Caprese Salad', price: 9, image: "https://www.madewithdelmonte.in/uploads/Tile%20-%20garlic-butter-pasta-tile.jpg" },
    { _id: '6', name: 'Chicken Parmesan', price: 13, image: "https://www.madewithdelmonte.in/uploads/Tile%20-%20garlic-butter-pasta-tile.jpg" },
  ,{ _id: '7', name: 'Caprese Salad', price: 22, image: "/vegetarian.png" },
  { _id: '8', name: 'Chicken Parmesan', price: 35, image: "/gluten-free2.png" },
];
const DishList = (props) => {
    return (
     /*  <div
        style={{
          overflowY: 'scroll',
          height: '77vh',
          scrollbarWidth: 'thin',
          scrollbarColor: 'red',
          paddingRight: '5px',
        }}
      > */
      <CustomScrollbar>
        <Grid container spacing={2} sx={{ bgcolor: 'rgba(255, 140, 0, 0.15)', width: '650px', p: 2 }}>
          {props.dishList.map((dish) => (
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
  
  
  
  
  
  
  
  
  
  
  
  
  


  