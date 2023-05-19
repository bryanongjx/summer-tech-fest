import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ResourcesSidebar from '../../Components/ResourcesSideBar';

const ReactNative = () => {
    return (
      <div className="container-fluid px-0">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="d-flex justify-content-start align-items-start h-100">
              <ResourcesSidebar />
            </div>
          </div>
          <div className="col-lg-8 col-md-7 bg-white p-4">
            <h1 className="mt-4 mb-4">React Native</h1>
  
            <h3 className="header">Introduction</h3>
            <p>
              React Native is a popular front-end framework for developing IOS/Android applications. If you would like to adopt ReactNative, read up on the
              resources provided below.
            </p>

            <h3 className="header">Resources</h3>
            <ul>
              <li>
                <a href="https://reactnative.dev/">React Native Official Website</a>
              </li>
              <li>
                <a href="https://www.youtube.com/watch?v=0-S5a0eXPoc&t=5570s&ab_channel=ProgrammingwithMosh">React Native Tutorial Video</a>
              </li>
              <li>
                <a href="https://www.tutorialspoint.com/react_native/index.htm">React Native Guide</a>
              </li>
              <li>
                <a href="https://reactnative.dev/docs/getting-started">React Native Official Docs</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
  
  export default ReactNative;