import React from 'react';
import { useState } from 'react';
import { Grid, Paper, Typography } from '@mui/material';

const DishCard = (props) => {
  
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    if (props.dish.description.length > 57) {
      setIsHovering(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  return (
    <Paper sx={{ p: 1, bgcolor: '#F8EAD1', color: 'black'}}>
    <Grid container alignItems="center">
      <Grid  item xs={8} container direction="column" alignItems="flex-start" justifyContent='space-between' spacing={1}>
      
      <Grid container direction='row' alignItems='flex-start' justifyContent='space-between' p={1}>
            <Grid item xs={10}><Typography variant="body1" sx={{ fontWeight: 'bold' }}>
              {props.dish.name}
            </Typography></Grid>
            {props.dish.isGlutenFree &&<Grid item xs={1}><img src="/gluten-free2.png" alt="gluten free" width='100%' sx={{ display: { xs: 'block', sm: 'inline-block' } }} /></Grid>}
            {props.dish.isVegetarian && <Grid item xs={1}><img src="/vegetarian.png" alt="vegetarian" width='100%' sx={{ display: { xs: 'block', sm: 'inline-block' } }} /></Grid>}
          
    </Grid> {/* end of row name, icons, items */}
          <Grid item style={{ position: 'relative' }}>
            <Typography variant="body2" sx={{ pt: 1 }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {props.dish.description.length > 57 ? props.dish.description.slice(0, 57) + "..." : props.dish.description}
            </Typography>
            {(isHovering && props.dish.description.length > 57 )&& 
                <Paper sx={{ position: 'absolute', zIndex: 1, p: 2 ,maxWidth:"24vh", bgcolor: '#3b3a38'}}>
                  <Typography variant="body2" color={"#F8EAD1"}>{props.dish.description}</Typography>
                </Paper>}
          </Grid>
          <Grid item>
            <Typography variant="body2" sx={{ pt: 1 }}>
              {`$${props.dish.price}`}
            </Typography>
          </Grid>
        
      </Grid>
      <Grid item xs={4}>
        <img src={props.dish.image} alt={props.dish.name} width="100%" />
      </Grid>
    </Grid>
  </Paper>
  );
};

export default DishCard;