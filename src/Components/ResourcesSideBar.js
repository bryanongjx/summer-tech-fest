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
          <CNavItem href="#">React Native</CNavItem>
          <CNavItem href="#">Flutter</CNavItem>
          <CNavItem href="#">Swift</CNavItem>
          <CNavItem href="#">XCode</CNavItem>
        </CNavGroup>

        <CNavGroup toggler="Web Development">
          <CNavItem href="#">React.js</CNavItem>
          <CNavItem href="#">Angular</CNavItem>
        </CNavGroup>

        <CNavGroup toggler="Back End">
          <CNavItem href="#">Node.js</CNavItem>
          <CNavItem href="#">Database Storage</CNavItem>
        </CNavGroup>

        <CNavItem href="#">User Guide</CNavItem>

      </CSidebarNav>
    </CSidebar>
  );
};

export default ResourcesSideBar;
