import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
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
              An Integrated Development Environment is basically where you write code, to put it simply. We recommend using VSCode. 
              Why? Because VSCode is goated and I am biased. You can add alot of useful extensions as well! But feel free to checkout other
              editors like Intellij or Sublime Text.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default ChoosingYourIde;