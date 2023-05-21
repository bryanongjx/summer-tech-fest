import React from 'react';
import NavBarSchedule from '../../../Components/NavBarSchedule';

function Week7Project() {
  return (
    <>
      <h2 className="text-center" style={{ marginTop: '20px' }}>Week 7</h2>
      <NavBarSchedule />
      <div className="container-fluid px-0 d-flex justify-content-center">
        <div className="col-lg-8 col-md-7 bg-white p-4">
          <h1 className="mt-4 mb-4">Main Features, again</h1>

          <h3 className="header">Overview</h3>
          <p>
            This week we will be continuing to work on the main features of our application.
          </p>

          <h3 className="header">Draft Submission</h3>
          <p>
            We will be having a draft submission next week, so try to aim to complete your application's main features by the end of this week, and work on your
            Project Report.
          </p>

          <h3 className="header">Closing Remarks</h3>
          <p>
            Happy Coding!
          </p>
        </div>
      </div>
    </>
  );
}

export default Week7Project;
