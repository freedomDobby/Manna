import React from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';

const NewPersonBtn = styled.div`
  margin-top: 2vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface PersonBtnProps {
    ChangeFilter: () => void;
    title:string;
}

const PersonBtn: React.FC<PersonBtnProps> = ({ ChangeFilter,title }) => {
  return (
    <NewPersonBtn>
      <Button
        variant="outlined"
        sx={{
          width: "20vh",
          fontSize: "2vh",
          display: "flex",
          flexDirection: "column",
          border: "solid 3px black",
          borderRadius: "3vh",
          backgroundColor: "#f8e3ea",
          ":hover": {
            border: "solid 3px #f8e3ea",
          },
        }}
        onClick={ChangeFilter}
      >
        <p style={{ fontSize: "2vh", color: "black", fontWeight: "bold" }}>
          {title}
        </p>
        <p style={{ fontSize: "1.5vh", color: "black", fontWeight: "bold" }}>
          -5 마일리지
        </p>
      </Button>
    </NewPersonBtn>
  );
};

export default PersonBtn;
