import React from "react";
import styled from "styled-components";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import DoneIcon from "@material-ui/icons/Done";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";


const List: React.FC = () => {
  return (
    <Container>
      <AccessTimeIcon fontSize="large" />
      <Content>Description</Content>
      <DoneAndRemoveArea>
        <DoneIcon color="primary" />
        <EditIcon color="error" />
        <DeleteForeverIcon color="secondary" />
      </DoneAndRemoveArea>
    </Container>
  );
}

export default List;

const Container = styled.div`
  max-height: 120px;
  min-width: 500px;
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-radius: 10px;
  margin: 10px 0;
  box-shadow: 10px 10px 5px rgba(98, 108, 124, 0.15);
  border: 1.5px solid rgba(98, 108, 124, 0.15);
`;

const Content = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
  padding: 15px;
`;

const DoneAndRemoveArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
