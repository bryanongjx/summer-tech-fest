import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ResourcesSidebar from '../Components/ResourcesSideBar';

const Resources = () => {
  return (
    <div className="row">
        <div className="col-3">
          <ResourcesSidebar />
        </div>
        <div className="col-9 d-flex flex-column justify-content-start align-items-start">
          {/* Content of your Resources page */}
          <h1>Resources Page</h1>
          <p>Here is the content of your Resources page.</p>
        </div>
    </div>
  );
};

export default Resources;
