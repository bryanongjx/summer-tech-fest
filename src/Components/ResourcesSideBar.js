import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@coreui/coreui/dist/css/coreui.min.css';
import { CSidebar, CSidebarNav, CNavItem, CNavGroup } from '@coreui/react';
import { Link } from 'react-router-dom';

const ResourcesSideBar = () => {

  return (
    <CSidebar>
      <CSidebarNav>
        <CNavGroup toggler="Getting Started">
          <Link to={`/resources/techstack`} className="nav-link">Tech Stacks</Link>
          <Link to={`/resources/developmentlifecycles`} className="nav-link">Development Life Cycles</Link>
          <Link to={`/resources/choosingyouride`} className="nav-link">Choosing your IDE</Link>
        </CNavGroup>

        <CNavItem>
            <Link to={`/resources/github`} className="nav-link">GitHub Version Control</Link>
        </CNavItem>

        <CNavGroup toggler="App Development">
          <Link to={`/resources/reactnative`} className="nav-link">React Native</Link>
          <Link to={`/resources/flutter`} className="nav-link">Flutter</Link>
          <Link to={`/resources/swift`} className="nav-link">Swift</Link>
        </CNavGroup>

        <CNavGroup toggler="Web Development">
          <Link to={`/resources/reactjs`} className="nav-link">React.js</Link>
          <Link to={`/resources/angular`} className="nav-link">Angular</Link>
        </CNavGroup>

        <CNavGroup toggler="Back End">
          <Link to={`/resources/node`} className="nav-link">Node.js</Link>
          <Link to={`/resources/database`} className="nav-link">Database Storage</Link>
        </CNavGroup>
        
        <CNavItem>
            <Link to={`/resources/userguide`} className="nav-link">User Guide</Link>
        </CNavItem>

        <CNavItem>
            <Link to={`/resources/googledrive`} className="nav-link">Summer TechFest Google Drive</Link>
        </CNavItem>
      </CSidebarNav>
    </CSidebar>
  );
};

export default ResourcesSideBar;