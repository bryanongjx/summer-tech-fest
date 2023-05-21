import React from 'react';
import NavBarSchedule from '../../../Components/NavBarSchedule';

function Week9Project() {
  return (
    <>
      <h2 className="text-center" style={{ marginTop: '20px' }}>Week 9</h2>
      <NavBarSchedule />
      <div className="container-fluid px-0 d-flex justify-content-center">
        <div className="col-lg-8 col-md-7 bg-white p-4">
          <h1 className="mt-4 mb-4">Consultation with mentors & User Guide</h1>

          <h3 className="header">Overview</h3>
          <p>
            We're coming near the end, it's time to start receiving feedback and drafting out a User Guide.
          </p>

          <h3 className="header">Consultation with mentors</h3>
          <p>
            This week we will be having a compulsary consultation with your mentors, where your team will be receiving feedback. Do schedule a meeting
            with your assigned mentors in your free time!
          </p>

          <h3 className="header">User Guide</h3>
          <p>
            In addition, we will be starting to draft a User Guide for your users. Refer to "User Guide" under the "Resources" tab.
          </p>

          <h3 className="header">Extensions</h3>
          <p>
            If you are still working on your extensions, feel free to do so!
          </p>

        </div>
      </div>
    </>
  );
}

export default Week9Project;
