import React from 'react';
import NavBarSchedule from '../../../Components/NavBarSchedule'
import { Container, Alert } from 'react-bootstrap';

function Week5Zoom() {
  return (
    <>
      <h2 className="text-center" style={{'marginTop': '20px'}}>Week 5</h2>
      <NavBarSchedule />
      <Container className="mt-4">
        <Alert variant="info">No zoom lectures for this week</Alert>
      </Container>
    </>
  );
}

export default Week5Zoom