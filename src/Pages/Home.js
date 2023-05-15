import React from 'react';

function Home() {
  return (
    <div className="container text-center mt-5">
      <h1>
        Welcome to Summer Techfest{' '}
        <span role="img" aria-label="Party Popper Emoji">
          🎉
        </span>
      </h1>
      <p className="mt-3">
        Use this website to keep track of the weekly schedules and get any resources we will be adopting during this course.
      </p>
      <div className="image-container mt-5 mb-4">
        <img
          src={require('../assets/vscodepicture.webp')}
          alt="VSCode"
          className="img-fluid"
        />
      </div>
      <h2 className="mt-5">What You Will Be Doing Throughout Summer TechFest</h2>
      <div className="text-center">
        <p>
          In Summer TechFest, we aim to prepare you to land your first internship. We will be focusing on the following aspects:
        </p>
        <ul className="list-unstyled text-left mx-auto" style={{ maxWidth: 'fit-content' }}>
          <li>LeetCode</li>
          <li>A software development project</li>
          <li>Resume creation / Interview skills</li>
        </ul>
      </div>
      <p className="mt-5">
        Brought to you by NUS Computing Club's 25th Academic Liaison Cell
      </p>
    </div>
  );
}

export default Home;
