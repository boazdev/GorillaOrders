import React from 'react';
import { styled } from '@mui/system';
import { Box, Button, Container, Divider, Grid, Typography } from '@mui/material';
import buttonStyles from '../../styles/buttonStyles';
const CarouselContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  overflowX: 'auto',
  scrollbarWidth: 'none',
  backgroundColor: '#F8EAD1',
  
  '-ms-overflow-style': 'none',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
  /* '& > *': {
    marginRight: '5vh', // added margin between LinkButtons
  }, */
});

const LinkButton = styled('button')(({ theme, selected }) => ({
    cursor: 'pointer',
    fontSize: '18px',
    fontWeight: selected ? 'bold' : 'normal',
    textDecoration: selected ? 'underline' : 'none',
    border: 'none',
    background: 'none',
    color: theme.palette.text.primary,
    marginLeft:'5vh',
    //marginRight: '2.5vh', // added margin between LinkButtons
    '&:last-child': {
      marginRight: '0vh', // override margin for last item
    }  
  }));
  

const CatNav = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  
  const handlePrev = () => {
    setActiveIndex((activeIndex) => activeIndex - 1);
  };

  const handleNext = () => {
    setActiveIndex((activeIndex) => activeIndex + 1);
  };
  


  const foodCategories = [
    'Burgers',
    'Pizza',
    'Tacos',
    'Sushi',
    'Pasta',
    'Salads',
    'Desserts',
    'Drinks',
  ];

  const [selectedCategory, setSelectedCategory] = React.useState(foodCategories[0]);
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div style={{ width: "650px" }}>
  <Box sx={{ backgroundColor: "#F8EAD1" }}>
    <Grid
      item
      container
      spacing={1}
      direction={"row"}
      alignItems="center"
      justifyContent="space-between"
      sx={{ maxWidth: "100%", margin: "0 auto" }}
    >
      <Grid item xs={1}>
      <Button
  disabled={activeIndex === 0}
  onClick={handlePrev}
  variant="contained"
  color="primary"
  size="small"
  sx={buttonStyles('#FF8C00')}
>
  {'<'}
</Button>
      </Grid>
      <Grid item xs={10}>
        <CarouselContainer>
          {foodCategories
            .slice(activeIndex, activeIndex + 5)
            .map((category) => (
              <LinkButton key={category}
              selected={selectedCategory === category} 
              onClick={() => handleCategoryClick(category)}
              >{category}</LinkButton>
            ))}
        </CarouselContainer>
      </Grid>
      <Grid item xs={1}>
      <Button
  disabled={activeIndex + 5 >= foodCategories.length}
  onClick={handleNext}
  variant="contained"
  color="primary"
  size="small"
  sx={buttonStyles('#FF8C00')}
>
  {'>'}
</Button>
      </Grid>
    </Grid>
    <br/>
  </Box>
  <Divider sx={{ borderBottom: '2px solid grey' }} />
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "50px",
      backgroundColor: "#F8EAD1",
    }}
  >
    <Typography>{"- " +selectedCategory+" -"}</Typography>
  </Box>
</div>

  );
};

export default CatNav;