import { Input, InputAdornment, InputBase } from '@mui/material';
import { styled } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';
import {Grid,Typography} from '@mui/material';
const GridWrapper = styled('div')({
  background: 'darkred',
  padding: '1vh'
});


const StyledInput = styled(Input)({
    borderRadius: '4px',
    background: '#F8EAD1',
    '& input': {
      padding: '1vh',
      fontSize: '14px',
      lineHeight: '16px',
      textDecoration: 'none',
      border: 'none',
    },
  });

const RightOrdersCont = () => {
  return (
    <Grid container direction="column" sx={{ gap: '2vh' }}>
      <Grid item>
        <GridWrapper>
        <StyledInput
            disableUnderline
            placeholder="Search for a dish"
            startAdornment={
              <InputAdornment position="start" sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                <SearchIcon />
              </InputAdornment>
            }
          />
        </GridWrapper>
      </Grid>
      <Grid item>
        <GridWrapper>
          <Typography>Total to pay:</Typography>
        </GridWrapper>
      </Grid>
    </Grid>
  );
};

export default RightOrdersCont;




