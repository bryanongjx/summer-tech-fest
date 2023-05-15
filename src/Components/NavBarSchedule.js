import React from 'react';
import { Link, useLocation } from 'react-router-dom';
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
        <Link to={prevURL}>
            <Button outline color="secondary" className="me-2" type="button">
            {'<'} Prev Week
            </Button>
        </Link>
        <Link to={zoomURL}>
          <Button outline color="primary" className="me-2" type="button">
            Zoom Lectures
          </Button>
        </Link>
        <Link to={leetcodeURL}>
          <Button outline color="primary" className="me-2" type="button">
            LeetCode
          </Button>
        </Link>
        <Link to={projectURL}>
          <Button outline color="primary" className="me-2" type="button">
            Project
          </Button>
        </Link>
        <Link to={nextURL}>
            <Button outline color="secondary" className="me-2" type="button">
            Next Week {'>'}
            </Button>
        </Link>
      </Container>
    </Navbar>
  );
}

export default NavBarSchedule;
