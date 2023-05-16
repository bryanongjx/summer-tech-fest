import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@coreui/coreui/dist/css/coreui.min.css';
import { CSidebar, CSidebarNav, CNavItem, CNavGroup } from '@coreui/react';

const ResourcesSideBar = () => {
  return (
    <CSidebar>
      <CSidebarNav className>
      <CNavGroup toggler="Getting Started">
          <CNavItem href="#">Content 3</CNavItem>

          <CNavItem href="#">Content 4</CNavItem>
        </CNavGroup>
        <CNavGroup toggler="Github Version Control">
          <CNavItem href="#">Content 3</CNavItem>

          <CNavItem href="#">Content 4</CNavItem>
        </CNavGroup>
        <CNavGroup toggler="App Development">
          <CNavItem href="#">Content 3</CNavItem>

          <CNavItem href="#">Content 4</CNavItem>
        </CNavGroup>

        <CNavGroup toggler="Web Development">
          <CNavItem href="#">Content 3</CNavItem>

          <CNavItem href="#">Content 4</CNavItem>
        </CNavGroup>

        <CNavGroup toggler="User Guide">
          <CNavItem href="#">Content 3</CNavItem>

          <CNavItem href="#">Content 4</CNavItem>
        </CNavGroup>

      </CSidebarNav>
    </CSidebar>
  );
};

const sidebar = { 
    'sidebar-color': "red" 
  }

export default ResourcesSideBar;
