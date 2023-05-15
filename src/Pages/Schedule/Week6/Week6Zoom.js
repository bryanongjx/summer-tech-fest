import React from 'react';
import NavBarSchedule from '../../../Components/NavBarSchedule'
import { Container, Alert } from 'react-bootstrap';

function Week6Zoom() {
  return (
    <>
      <h2 className="text-center">Week 6</h2>
      <NavBarSchedule />
      <Container className="mt-4">
        <Alert variant="info">No zoom lectures for this week</Alert>
      </Container>
    </>
  );
}

export default Week6Zoom