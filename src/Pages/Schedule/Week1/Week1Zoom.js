import React from 'react';
import NavBarSchedule from '../../../Components/NavBarSchedule';
import { Container, Alert } from 'react-bootstrap';

function Week1Zoom() {
  return (
    <>
      <h2 className="text-center">Week 1</h2>
      <NavBarSchedule />
      <Container className="mt-4">
        <Alert variant="info">No zoom lectures for this week</Alert>
      </Container>
    </>
  );
}

export default Week1Zoom;
