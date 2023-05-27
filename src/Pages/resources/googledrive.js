import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ResourcesSidebar from '../../Components/ResourcesSideBar';

const GoogleDrive = () => {
    return (
      <div className="container-fluid px-0">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="d-flex justify-content-start align-items-start h-100">
              <ResourcesSidebar />
            </div>
          </div>
          <div className="col-lg-8 col-md-7 bg-white p-4">
            <h1 className="mt-4 mb-4">Google Drive</h1>
  
            <h3 className="header">Extra Resources / Admin Information</h3>
            <p>In our google drive, you can find additional resources / admin information we will be uploading throughout the course</p>
            <a href="https://drive.google.com/drive/u/1/folders/1SGGxsAuhTjL4myfpMKyN-Op87ecowV51">Google Drive Link</a>
          </div>
        </div>
      </div>
    );
  };
  
  export default GoogleDrive;