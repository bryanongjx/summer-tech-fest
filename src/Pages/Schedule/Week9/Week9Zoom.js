import React from 'react';
import NavBarSchedule from '../../../Components/NavBarSchedule'
import { Container, Alert } from 'react-bootstrap';

function Week9Zoom() {
  return (
    <>
      <h2 className="text-center" style={{ marginTop: '20px' }}>Week 9</h2>
      <NavBarSchedule />
      <Container className="mt-4">
        <Alert variant="info">No zoom lectures for this week</Alert>
      </Container>
    </>
  );
}

export default Week9Zoom