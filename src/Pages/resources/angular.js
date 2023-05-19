import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ResourcesSidebar from '../../Components/ResourcesSideBar';

const Angular = () => {
    return (
      <div className="container-fluid px-0">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="d-flex justify-content-start align-items-start h-100">
              <ResourcesSidebar />
            </div>
          </div>
          <div className="col-lg-8 col-md-7 bg-white p-4">
            <h1 className="mt-4 mb-4">Angular</h1>
  
            <h3 className="header">Introduction</h3>
            <p>
              Angular is a popular front-end framework for developing apps. 
            </p>

            <h3 className="header">Resources</h3>
            <ul>
              <li>
                <a href="https://angular.io/">Angular Official Website</a>
              </li>
              <li>
                <a href="https://www.youtube.com/watch?v=k5E2AVpwsko&ab_channel=ProgrammingwithMosh">Angular Tutorial Video</a>
              </li>
              <li>
                <a href="https://www.w3schools.com/angular/default.asp">Angular Guide</a>
              </li>
              <li>
                <a href="https://angular.io/docs">Angular Official Docs</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
  
  export default Angular;