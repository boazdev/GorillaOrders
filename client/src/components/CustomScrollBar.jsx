import { styled } from '@mui/system';

const CustomScrollbar = styled('div')({
  overflowY: 'scroll',
  height: '77vh',
  scrollbarWidth: 'thin',
  '&::-webkit-scrollbar': {
    width: '6px',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: 'red',
    borderRadius: '10px',
  },
  paddingRight: '5px',
});

export default CustomScrollbar