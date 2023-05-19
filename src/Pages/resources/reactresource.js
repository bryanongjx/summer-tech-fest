import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ResourcesSidebar from '../../Components/ResourcesSideBar';

const ReactJs = () => {
    return (
      <div className="container-fluid px-0">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="d-flex justify-content-start align-items-start h-100">
              <ResourcesSidebar />
            </div>
          </div>
          <div className="col-lg-8 col-md-7 bg-white p-4">
            <h1 className="mt-4 mb-4">ReactJS</h1>
  
            <h3 className="header">Introduction</h3>
            <p>
              React.js is a popular front-end framework for developing web applications. If you would like to adopt Reactjs, read up on the
              resources provided below.
            </p>

            <h3 className="header">Resources</h3>
            <ul>
              <li>
                <a href="https://react.dev/">React Official Website</a>
              </li>
              <li>
                <a href="https://www.youtube.com/watch?v=SqcY0GlETPk&ab_channel=ProgrammingwithMosh">React Tutorial Video</a>
              </li>
              <li>
                <a href="https://www.w3schools.com/REACT/DEFAULT.ASP">React Guide</a>
              </li>
              <li>
                <a href="https://legacy.reactjs.org/docs/getting-started.html">React Official Docs</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
  
  export default ReactJs;