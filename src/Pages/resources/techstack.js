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
                For summer techfest, you should try to pick popular tech stacks. Your tech stack should include a 
                
                <ul>1. A frontend framework: React, Angular, etc,</ul>
                <ul>2. A server-side backend framework: Nodejs, etc. </ul>
                <ul>3. A database storage system: MongoDB, Firebase, SQL, etc.</ul>

                Popular tech stacks include: MERN stack, MEAN stack
              </p>
            </div>
            <div>
              <h3 className="header">So.. what tech stack should i use?</h3>
              <p>
                It depends. Before you even start coding, go google "top tech stacks for app development" for example if you want to create an app.
                Do your research and discuss among on your team what technologies you want to adopt.
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
