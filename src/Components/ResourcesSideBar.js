import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@coreui/coreui/dist/css/coreui.min.css';
import { CSidebar, CSidebarNav, CNavItem, CNavGroup } from '@coreui/react';

const ResourcesSideBar = () => {
  const basePath = '/summer-tech-fest'; // Replace with your desired base path

  return (
    <CSidebar>
      <CSidebarNav>
        <CNavGroup toggler="Getting Started">
          <CNavItem href={`${basePath}/resources/techstack`}>Tech Stacks</CNavItem>
          <CNavItem href={`${basePath}/resources/developmentlifecycles`}>Development Life Cycles</CNavItem>
          <CNavItem href={`${basePath}/resources/choosingyouride`}>Choosing your IDE</CNavItem>
        </CNavGroup>
        <CNavItem href={`${basePath}/resources/github`}>GitHub Version Control</CNavItem>

        <CNavGroup toggler="App Development">
          <CNavItem href={`${basePath}/resources/reactnative`}>React Native</CNavItem>
          <CNavItem href={`${basePath}/resources/flutter`}>Flutter</CNavItem>
          <CNavItem href={`${basePath}/resources/swift`}>Swift</CNavItem>
        </CNavGroup>

        <CNavGroup toggler="Web Development">
          <CNavItem href={`${basePath}/resources/reactjs`}>React.js</CNavItem>
          <CNavItem href={`${basePath}/resources/angular`}>Angular</CNavItem>
        </CNavGroup>

        <CNavGroup toggler="Back End">
          <CNavItem href={`${basePath}/resources/node`}>Node.js</CNavItem>
          <CNavItem href={`${basePath}/resources/database`}>Database Storage</CNavItem>
        </CNavGroup>

        <CNavItem href={`${basePath}/resources/userguide`}>User Guide</CNavItem>
      </CSidebarNav>
    </CSidebar>
  );
};

export default ResourcesSideBar;
