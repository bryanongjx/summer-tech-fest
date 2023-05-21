import React from 'react';
import NavBarSchedule from '../../../Components/NavBarSchedule';

function Week8Project() {
  return (
    <>
      <h2 className="text-center" style={{ marginTop: '20px' }}>Week 8</h2>
      <NavBarSchedule />
      <div className="container-fluid px-0 d-flex justify-content-center">
        <div className="col-lg-8 col-md-7 bg-white p-4">
          <h1 className="mt-4 mb-4">Draft submission, oh no!</h1>

          <h3 className="header">Overview</h3>
          <p>
            This week will be the deadline of our draft submission, in order for us to keep track of your progress, and maybe let you know that you now have to "chiong" the next 2 weeks, but hopefully not. As such, please plan
            your schedule well and submit your drafts on time so that we are able to look through it and give you relevant feedback.
          </p>

          <h3 className="header">Draft Submission of Project</h3>
          <p>
            By the end of this week, you should have a Minimum Viable Product for us to test, but don't worry you do not have to worry about deployment yet. Most likely, we will just be cloning the repo and testing it for ourselves.
            We will probably be giving you details about this soon.
          </p>

          <h3 className="header">Draft Submission of Report</h3>
          <p>
            On top of you project, we would be collecting your draft reports. So do have them ready by the end of the week!
          </p>

          <h3 className="header">Extensions</h3>
          <p>
            By now, you should have a Minimum Viable Product out. It's time to work on some extensions. Think of some additional features that a user would benefit from, and to improve your app's user
            experience. After doing so, you can start implementing them!
          </p>

          <h3 className="header">Closing Remarks</h3>
          <p>
            We're almost there, let's push through the next 2 weeks :)
          </p>
        </div>
      </div>
    </>
  );
}

export default Week8Project;
