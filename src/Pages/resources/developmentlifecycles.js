import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RiStackLine } from 'react-icons/ri';
import ResourcesSidebar from '../../Components/ResourcesSideBar';

const DevelopmentLifeCycles = () => {
    return (
      <div className="container-fluid px-0">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="d-flex justify-content-start align-items-start h-100">
              <ResourcesSidebar />
            </div>
          </div>
          <div className="col-lg-8 col-md-7 bg-white p-4">
            <h1 className="mt-4 mb-4">Development Life Cycles</h1>
            <h3 className="header">What are development life cycles?</h3>
            <p>
              A Development life cycle is a structured way / methodology used in software development to guide the process of developing
              softwares as a team. Think of it as a roadmap that outlines the steps and activities involved in creating a software product. In summer techfest,
              you need not be too strict about maintaining a perfect development life cycle but you should try to adopt some of the common practices. We would advice you
              to adopt the scrum methodology with weekly sprints for summer techfest.
            </p>
  
            <h3 className="header">Waterfall model</h3>
            <p>
              <a href="https://www.techtarget.com/searchsoftwarequality/definition/waterfall-model#:~:text=The%20waterfall%20model%20is%20a,the%20edge%20of%20a%20cliff.">Click here to read</a>
            </p>
  
            <h3 className="header">Agile Model</h3>
            <p>
              <a href="https://www.interviewbit.com/blog/agile-model/#:~:text=A%20software%20development%20approach%20based,start%20of%20the%20development%20phase.">Click here to read</a>
            </p>
  
            <h3 className="header">Scrum Methodology</h3>
            <p>
              <a href="https://www.nimblework.com/agile/scrum-methodology/">Click here to read</a>
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default DevelopmentLifeCycles;