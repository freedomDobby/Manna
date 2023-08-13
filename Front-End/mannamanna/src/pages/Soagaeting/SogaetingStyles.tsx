import React from 'react';
import { IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';

const HeartIconButtonStyle = styled(IconButton)`
  color: red;
  background-color: #d9cff4;
  border: solid 0.2rem black;
  border-radius: 50%;
  &:hover {
    background-color: white;
  }
`;

const MicVideoIconButtonStyle = styled(IconButton)`
  color: black;
  background-color: #d9cff4;
  border: solid 0.2rem black;
  border-radius: 50%;
  &:hover {
    background-color: white;
  }
`;

const TimePlusIconButtonStyle = styled(IconButton)`
  color: black;
  background-color: #ffffff;
  border: solid 0.2rem black;
  border-radius: 50%;
  &:hover {
    background-color: #ffcced;
  }
`;

interface SogaeIconButtonProps {
  children: any;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const HeartIconButton: React.FC<SogaeIconButtonProps> = ({ children, onClick }) => {
  return (
    <HeartIconButtonStyle onClick={onClick} size="large">
      {children}
    </HeartIconButtonStyle>
  );
};

export const MicVideoIconButton: React.FC<SogaeIconButtonProps> = ({ children, onClick }) => {
  return (
    <MicVideoIconButtonStyle onClick={onClick} size="large">
      {children}
    </MicVideoIconButtonStyle>
  );
};

export const TimePlusIconButton: React.FC<SogaeIconButtonProps> = ({ children, onClick }) => {
  return (
    <TimePlusIconButtonStyle onClick={onClick} size="large">
      {children}
    </TimePlusIconButtonStyle>
  );
};