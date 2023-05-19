import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ResourcesSidebar from '../../Components/ResourcesSideBar';

const Flutter = () => {
    return (
      <div className="container-fluid px-0">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="d-flex justify-content-start align-items-start h-100">
              <ResourcesSidebar />
            </div>
          </div>
          <div className="col-lg-8 col-md-7 bg-white p-4">
            <h1 className="mt-4 mb-4">Flutter</h1>
  
            <h3 className="header">Introduction</h3>
            <p>
              Flutter is a popular software for developing IOS Apps. 
            </p>

            <h3 className="header">Resources</h3>
            <ul>
              <li>
                <a href="https://flutter.dev/">Flutter Official Website</a>
              </li>
              <li>
                <a href="https://www.youtube.com/watch?v=CD1Y2DmL5JM&ab_channel=FlutterMapp">Flutter Tutorial Video</a>
              </li>
              <li>
                <a href="https://www.solutelabs.com/blog/flutter-tutorial-for-beginners-step-by-step-guide">Flutter Guide</a>
              </li>
              <li>
                <a href="https://docs.flutter.dev/">Flutter Official Docs</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
  
  export default Flutter;