import React from 'react';
import NavBarSchedule from '../../../Components/NavBarSchedule';
import { Container, Alert } from 'react-bootstrap';

function Week1Zoom() {
  const zoomLink = 'https://nus-sg.zoom.us/j/82461516498?pwd=UFR5ZXI1eDR1SE1FR0xQdDBxTFRtUT09'; // Replace with your actual Zoom link
  const zoomDateTime = 'May 28, 2023 11:30 AM'; // Replace with your actual Zoom meeting date and time

  return (
    <>
      <h2 className="text-center" style={{ marginTop: '20px' }}>Week 1</h2>
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

export default Week1Zoom;
