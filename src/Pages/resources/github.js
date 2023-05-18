import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaGithub } from 'react-icons/fa';
import ResourcesSidebar from '../../Components/ResourcesSideBar';

const GitHub = () => {
  return (
    <div className="container-fluid px-0">
      <div className="row">
        <div className="col-lg-3 col-md-4">
          <div className="d-flex justify-content-start align-items-start h-100">
            <ResourcesSidebar />
          </div>
        </div>
        <div className="col-lg-8 col-md-7 bg-white p-4">
          <h1 className="mt-4 mb-4">An Overview of Git Version Control</h1>

          <h3 className="header">Introduction</h3>
          <p>
            GitHub is a web-based platform for version control and collaboration that allows developers to work together on
            projects. It uses Git, a distributed version control system, to track changes to files over time. With GitHub,
            you can easily contribute to open-source projects, manage your own repositories, and collaborate with other
            developers.
          </p>

          <h3 className="header">Key Features</h3>
          <ul>
            <li>Repository hosting and management</li>
            <li>Version control with Git</li>
            <li>Collaboration and pull requests</li>
            <li>Issue tracking and project management</li>
            <li>Code review and discussion</li>
          </ul>

          <h3 className="header">Getting started</h3>
          <p>
            <a href="https://ourcodingclub.github.io/tutorials/git/">
              <FaGithub className="mr-2" /> Intro to Github
            </a>
          </p>

          <h3 className="header">Additional Resources</h3>
          <p>
            <a href="https://nus-cs2103-ay2021s1.github.io/website/se-book-adapted/chapters/gitAndGithub.html">
              <FaGithub className="mr-2" /> CS2103's in-depth git version control guide
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GitHub;
