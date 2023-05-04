// buttonStyles.js
import { darken } from '@mui/material/styles';

const buttonStyles = (activeColor) => ({
  borderRadius: '50%',
  minWidth: 0,
  width: '32px',
  height: '32px',
  background: activeColor,
  color: '#fff',
  '&:hover': {
    background: darken(activeColor, 0.1),
  },
  '&:disabled': {
    background: 'rgba(0, 0, 0, 0.12)',
    color: 'rgba(0, 0, 0, 0.26)',
  },
});

export default buttonStyles;