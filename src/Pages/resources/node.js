import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ResourcesSidebar from '../../Components/ResourcesSideBar';

const NodeJs = () => {
    return (
      <div className="container-fluid px-0">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="d-flex justify-content-start align-items-start h-100">
              <ResourcesSidebar />
            </div>
          </div>
          <div className="col-lg-8 col-md-7 bg-white p-4">
            <h1 className="mt-4 mb-4">Node.js</h1>
  
            <h3 className="header">Introduction</h3>
            <p>
                Node.js is an open source, cross-platform runtime environment and library that is used for running web applications outside the client’s browser.
            </p>
            <p>
                It is used for server-side programming, and primarily deployed for non-blocking, event-driven servers, such as traditional web sites and back-end API services, but was originally designed with real-time, push-based architectures in mind. Every browser has its own version of a JS engine, and node.js is built on Google Chrome’s V8 JavaScript engine.
            </p> 
            <p>
                Sounds a bit complicated, right?
            </p>
            <p>
                In simple terms, what this means is that entire sites can be run using a unified ‘stack’, which makes development and maintenance quick and easy, allowing you to focus on meeting the business goals of the project.
            </p>

            <h3 className="header">Resources</h3>
            <ul>
              <li>
                <a href="https://nodejs.org/en">Node Official Website</a>
              </li>
              <li>
                <a href="https://www.youtube.com/watch?v=TlB_eWDSMt4">Node Tutorial Video</a>
              </li>
              <li>
                <a href="https://www.w3schools.com/nodejs/">Node Guide</a>
              </li>
              <li>
                <a href="https://nodejs.org/en/docs">Node Official Docs</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
  
  export default NodeJs;