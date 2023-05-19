import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ResourcesSidebar from '../../Components/ResourcesSideBar';

const UserGuide = () => {
    return (
      <div className="container-fluid px-0">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="d-flex justify-content-start align-items-start h-100">
              <ResourcesSidebar />
            </div>
          </div>
          <div className="col-lg-8 col-md-7 bg-white p-4">
            <h1 className="mt-4 mb-4">User Guides</h1>
  
            <h3 className="header">What are user guide</h3>
            <p>
              As the name suggests, user guides are documentations for users to understand how to use your application. They include the
              key features of your application and how to use them.
            </p>

            <h3 className="header">How to write User Guides?</h3>
            <p>
              For a start, you can write your userguide in your a readme.md file. User guides are typically written using markdown language, hence the ".md" .
              Your user guide should be consise and not include techncical details of your application. Think of the reader as an everyday user
              of your application: "I just want to know how to use it, I don't care how it works".
            </p>

            <h3 className="header">Learning Markdown language</h3>
            <p>
              To write a user guide, you need to learn how to use markdown language. We have provided a link below for you to do so.
              <lu>
                <li>
                    <a href="https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax">Github markdown guide</a>
                </li>
              </lu>
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default UserGuide;