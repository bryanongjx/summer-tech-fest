import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ResourcesSidebar from '../../Components/ResourcesSideBar';

const Swift = () => {
    return (
      <div className="container-fluid px-0">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="d-flex justify-content-start align-items-start h-100">
              <ResourcesSidebar />
            </div>
          </div>
          <div className="col-lg-8 col-md-7 bg-white p-4">
            <h1 className="mt-4 mb-4">Swift</h1>
  
            <h3 className="header">Introduction</h3>
            <p>
              Swift is a popular software for developing IOS Apps. 
            </p>

            <h3 className="header">Resources</h3>
            <ul>
              <li>
                <a href="https://www.swift.org/">Swift Official Website</a>
              </li>
              <li>
                <a href="https://www.youtube.com/watch?v=CwA1VWP0Ldw&ab_channel=SeanAllen-Build.Ship.Profit.">Swift Tutorial Video</a>
              </li>
              <li>
                <a href="https://www.freecodecamp.org/news/the-swift-handbook/">Swift Guide</a>
              </li>
              <li>
                <a href="https://docs.swift.org/swift-book/documentation/the-swift-programming-language/thebasics/">Swift Official Docs</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
  
  export default Swift;