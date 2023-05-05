import React from 'react';
import { styled } from '@mui/system';

const LoadingContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  width: '100%',
});

const Circle = styled('div')({
  width: '1.5rem',
  height: '1.5rem',
  borderRadius: '50%',
  backgroundColor: '#1976d2',
  animation: '$bounce 0.8s ease-in-out infinite alternate',
  '&:nth-of-type(2)': {
    animationDelay: '0.4s',
  },
  '&:nth-of-type(3)': {
    animationDelay: '0.8s',
  },
  '@keyframes bounce': {
    '0%': {
      transform: 'translateY(0)',
    },
    '100%': {
      transform: 'translateY(-1.5rem)',
    },
  },
});

const Loading = () => {
  return (
    <LoadingContainer>
      <Circle />
      <Circle />
      <Circle />
    </LoadingContainer>
  );
};

export default Loading;