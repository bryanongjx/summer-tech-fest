import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RiStackLine } from 'react-icons/ri';
import ResourcesSidebar from '../../Components/ResourcesSideBar';

const ChoosingYourIde = () => {
    return (
      <div className="container-fluid px-0">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="d-flex justify-content-start align-items-start h-100">
              <ResourcesSidebar />
            </div>
          </div>
          <div className="col-lg-8 col-md-7 bg-white p-4">
            <h1 className="mt-4 mb-4">Choosing Your IDE</h1>
  
            <h3 className="header">Introduction</h3>
            <p>
              {/* Content */}
            </p>
  
            <h3 className="header">Key Features</h3>
            <p>
              {/* Content */}
            </p>
  
            <h3 className="header">Getting started</h3>
            <p>
              {/* Content */}
            </p>
  
            <h3 className="header">Additional Resources</h3>
            <p>
              {/* Content */}
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default ChoosingYourIde;