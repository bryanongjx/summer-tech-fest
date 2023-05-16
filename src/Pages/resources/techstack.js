import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RiStackLine } from 'react-icons/ri';

const TechStack = () => {
  return (
    <div className="container">
      <h1 className="mt-4 mb-4">Tech Stacks</h1>

      <h2>What are Tech Stacks?</h2>
      <p className="paragraph">
        A tech stack refers to the combination of programming languages, tools, frameworks, and libraries used by a
        development team to create a web or mobile application. It is a crucial decision that affects the performance,
        scalability, and overall success of the project.
      </p>

      <h2>Picking the Right Tech Stack</h2>
      <p className="paragraph">
        Choosing the right tech stack depends on various factors such as the project requirements, development team's
        expertise, budget, and timeline. A well-selected tech stack can improve productivity, reduce costs, and enhance
        the quality of the end product.
      </p>

      <h2>Resources</h2>
      <p>
        <a href="https://careerfoundry.com/en/blog/web-development/what-is-a-tech-stack/">
          <RiStackLine className="mr-2" /> What Is a Tech Stack? A Beginner's Guide to Web Development Technology Stacks
        </a>
      </p>
    </div>
  );
};

export default TechStack;
