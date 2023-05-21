import React from 'react';
import NavBarSchedule from '../../../Components/NavBarSchedule';

function Week5Project() {
  return (
    <>
      <h2 className="text-center" style={{ marginTop: '20px' }}>Week 5</h2>
      <NavBarSchedule />
      <div className="container-fluid px-0 d-flex justify-content-center">
        <div className="col-lg-8 col-md-7 bg-white p-4">
          <h1 className="mt-4 mb-4">Core Features, again..</h1>

          <h3 className="header">Overview</h3>
          <p>
            We're halfway there, welcome to week 5! This week, you will be continuing to implement the core features of your application, similar to last week. Hence, there
            won't be much to say. We understand that implementing core features will take some time, and hence have allocated this week as well for you to continue working on them.
          </p>

          <h3 className="header">Project Report</h3>
          <p>
            On top of implementing the core features, we recommend you to start drafting up your project's report, which includes the objective, processes, hurdles and outcome. This will be 
            part of your submission, so you can start working on it. As of now (when we made this website in week 0), we do not have a template for this, but possibly when you are reading this,
            we might have sent out a template for you.
          </p>

          <h3 className="header">Closing Remarks</h3>
          <p>
            Hmm.. Nothing much to say here but we wish you happy coding!
          </p>
        </div>
      </div>
    </>
  );
}

export default Week5Project;
