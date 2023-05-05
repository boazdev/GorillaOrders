import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';

const DishCard = (props) => {
  return (
    <Paper sx={{ p: 2, bgcolor: '#FF8C00', color: 'black' }}>
      <Grid container alignItems="center">
        <Grid item xs={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <Typography variant="body1" sx={{ fontWeight: 'bold', pb: 1 }}>
            {props.dish.name}
          </Typography>
          <Typography variant="body2" sx={{ pt: 1 }}>
            {`$${props.dish.price}`}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <img src={props.dish.image} alt={props.dish.name} width="100%" />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default DishCard;