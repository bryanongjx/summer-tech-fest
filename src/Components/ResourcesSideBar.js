import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@coreui/coreui/dist/css/coreui.min.css';
import { CSidebar, CSidebarNav, CNavItem, CNavGroup } from '@coreui/react';

const ResourcesSideBar = () => {
  return (
    <CSidebar>
      <CSidebarNav>
      <CNavGroup toggler="Getting Started">
          <CNavItem href="/resources/techstack">Tech Stacks</CNavItem>
          <CNavItem href="/resources/developmentlifecycles">Development Life Cycles</CNavItem>
          <CNavItem href="/resources/choosingyouride">Choosing your IDE</CNavItem>
        </CNavGroup>
        <CNavItem href="/resources/github">GitHub Version Control</CNavItem>

        <CNavGroup toggler="App Development">
          <CNavItem href="/resources/reactnative">React Native</CNavItem>
          <CNavItem href="/resources/flutter">Flutter</CNavItem>
          <CNavItem href="/resources/swift">Swift</CNavItem>
        </CNavGroup>

        <CNavGroup toggler="Web Development">
          <CNavItem href="/resources/reactjs">React.js</CNavItem>
          <CNavItem href="/resources/angular">Angular</CNavItem>
        </CNavGroup>

        <CNavGroup toggler="Back End">
          <CNavItem href="/resources/node">Node.js</CNavItem>
          <CNavItem href="/resources/database">Database Storage</CNavItem>
        </CNavGroup>

        <CNavItem href="/resources/userguide">User Guide</CNavItem>

      </CSidebarNav>
    </CSidebar>
  );
};

export default ResourcesSideBar;
