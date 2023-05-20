import React from 'react';
import NavBarSchedule from '../../../Components/NavBarSchedule';

function Week2Project() {
  return (
    <>
      <h2 className="text-center" style={{ marginTop: '20px' }}>Week 2</h2>
      <NavBarSchedule />
      <div className="container-fluid px-0 d-flex justify-content-center">
        <div className="col-lg-8 col-md-7 bg-white p-4">
          <h1 className="mt-4 mb-4">Project Ideation and Research!</h1>

          <h3 className="header">Overview</h3>
          <p>
            This week, you will be finalizing the project ideation stage, where your team should decide on what software you wish to develop. Afterwards,
            we will be doing research of the relevant technologies you need to build your project.
          </p>

          <h3 className="header">Project Ideation</h3>
          <p>
            At the end of the week, your team should have decided on the following:
          </p>
          <lu>
            <ol>
                1. Category of project, but feel free to choose a project apart from the ones we listed
            </ol>
            <ol>
                2. Type of Project (Website, IOS App, Android App, Downloadable Software, etc)
            </ol>
            <ol>
                3. Technologies needed to build your project
            </ol>
        </lu>

          <h3 className="header">Tech Stack</h3>
          <p>
            On top of the Project Ideation, we aim to have finalized our Tech Stack by the end of the week, and have done research into it. Meaning, your team should be on the same page
            on what technologies you wish to adopt to build your project. Refer to "Tech Stack" under "Resources" page to get a better understanding.
          </p>

          <h3 className="header">Closing Remarks</h3>
          <p>
            It is important to have finalized these details by the end of the week so that your team can start learning up on the relevant technologies next week. Preferably,
            your team should not change your project's category and techstack halfway through the course as it will cause a massive hurdle  (speaking from experience).
          </p>
        </div>
      </div>
    </>
  );
}

export default Week2Project;
