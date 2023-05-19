import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ResourcesSidebar from '../Components/ResourcesSideBar';

const Resources = () => {
  return (
    <div className="container-fluid px-0">
    <div className="row">
      <div className="col-lg-3 col-md-4">
        <div className="d-flex justify-content-start align-items-start h-100">
          <ResourcesSidebar />
        </div>
      </div>
      <div className="col-lg-8 col-md-7 bg-white p-4">
        <h1 className="mt-4 mb-4">Resources</h1>

        <h3 className="header">Getting Started</h3>
        <p>
          Navigate the side bar on the left!
        </p>
      </div>
    </div>
  </div>
  );
};

export default Resources;
