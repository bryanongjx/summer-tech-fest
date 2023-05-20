import React from 'react';
import NavBarSchedule from '../../../Components/NavBarSchedule'
import { Container, Alert } from 'react-bootstrap';

function Week5Zoom() {
  const zoomLink = ''; // Replace with your actual Zoom link
  const zoomDateTime = 'May 25, 2023 3:00 PM'; // Replace with your actual Zoom meeting date and time

  return (
    <>
      <h2 className="text-center" style={{ marginTop: '20px' }}>Week 5</h2>
      <NavBarSchedule />

      <Container className="mt-4">
        {zoomLink ? (
          <Alert variant="info">
            <p>
              "Welcome Aboard" Zoom scheduled for {zoomDateTime}. Please click the link below to join:
            </p>
            <a href={zoomLink} target="_blank" rel="noopener noreferrer">
              Join Zoom Meeting
            </a>
          </Alert>
        ) : (
          <Alert variant="info">
            No zoom lectures for this week
          </Alert>
        )}
      </Container>
    </>
  );
}

export default Week5Zoom