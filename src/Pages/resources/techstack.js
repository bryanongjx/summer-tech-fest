import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RiStackLine } from 'react-icons/ri';
import ResourcesSidebar from '../../Components/ResourcesSideBar';

const TechStack = () => {
  return (
    <div className="container-fluid px-0">
      <div className="row">
        <div className="col-lg-3 col-md-4">
          <div className="d-flex justify-content-start align-items-start h-100">
            <ResourcesSidebar />
          </div>
        </div>
        <div className="col-lg-8 col-md-7 bg-white">
          <div className="p-4">
            <h1>Tech Stacks</h1>
            <div>
              <h3 className="header">What are Tech Stacks?</h3>
              <p className="paragraph">
                A tech stack refers to the combination of programming languages, tools, frameworks, and libraries used by a
                development team to create a web or mobile application. It is a crucial decision that affects the performance,
                scalability, and overall success of the project.
              </p>
            </div>
            <div>
              <h3 className="header">Picking the Right Tech Stack</h3>
              <p className="paragraph">
                Choosing the right tech stack depends on various factors such as the project requirements, development team's
                expertise, budget, and timeline. A well-selected tech stack can improve productivity, reduce costs, and enhance
                the quality of the end product.
              </p>
            </div>
            <div>
              <h3 className="header">Resources</h3>
              <p>
                <a href="https://careerfoundry.com/en/blog/web-development/what-is-a-tech-stack/" className="d-flex align-items-center">
                  <RiStackLine className="mr-2" />
                  What Is a Tech Stack? A Beginner's Guide to Web Development Technology Stacks
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
