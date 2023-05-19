import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Navbar, Container, Button } from 'reactstrap';

function NavBarSchedule() {
  const location = useLocation();
  const currentPageURL = location.pathname; // Get the current page URL

  // Extract the week number from the current page URL
  const weekNumber = currentPageURL.split('/')[2];

  // Construct the URLs for LeetCode and Project buttons using the week number
  const leetcodeURL = `/schedule/${weekNumber}/leetcode`;
  const projectURL = `/schedule/${weekNumber}/project`;
  const zoomURL = `/schedule/${weekNumber}/zoom`;
  const prevURL = `/schedule/week${parseInt(weekNumber.substring(4)) == 1 ? "1" : (parseInt(weekNumber.substring(4))-1).toString()}/zoom`;
  const nextURL = `/schedule/week${parseInt(weekNumber.substring(4)) == 10 ? "10" : (parseInt(weekNumber.substring(4))+1).toString()}/zoom`;
  
  return (
    <Navbar className="d-flex justify-content-center mt-4">
      <Container tag="form" fluid className="d-flex justify-content-center">
        <NavLink to={prevURL}>
            <Button outline color="dark" className="me-2" type="button">
            {'<'} Prev Week
            </Button>
        </NavLink>
        <NavLink to={zoomURL}>
          <Button outline color={currentPageURL === zoomURL ? 'primary' : 'dark'} className="me-2" type="button">
            Zoom Lectures
          </Button>
        </NavLink>
        <NavLink to={leetcodeURL}>
          <Button outline color={currentPageURL === leetcodeURL ? 'primary' : 'dark'} className="me-2" type="button">
            LeetCode
          </Button>
        </NavLink>
        <NavLink to={projectURL}>
          <Button outline color={currentPageURL === projectURL ? 'primary' : 'dark'} className="me-2" type="button">
            Project
          </Button>
        </NavLink>
        <NavLink to={nextURL}>
            <Button outline color="dark" className="me-2" type="button">
            Next Week {'>'}
            </Button>
        </NavLink>
      </Container>
    </Navbar>
  );
}

export default NavBarSchedule;
