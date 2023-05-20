import React from 'react';
import NavBarSchedule from '../../../Components/NavBarSchedule';

function Week1Project() {
  return (
    <>
      <h2 className="text-center" style={{ marginTop: '20px' }}>Week 1</h2>
      <NavBarSchedule />
      <div className="container-fluid px-0 d-flex justify-content-center">
        <div className="col-lg-8 col-md-7 bg-white p-4">
          <h1 className="mt-4 mb-4">Blast off!</h1>

          <h3 className="header">Getting Started</h3>
          <p>
            Welcome to Summer TechFest! For starters, let us introduce you on how the project development is going to go. To keep your team's
            project on track, we recommend closely following the milestone's we have set for you each week under the 'project' tab. By doing so,
            we hope to guide you to complete your project in 10 weeks. Of course, this is not a module, so we won't be strict on your progress.
            Ultimately it is up to your team on how much effort you want to put in and what you wish to take away from this 10 weeks.
          </p>

          <h3 className="header">Overview of Summer TechFest</h3>
          <p>
            In case you haven't already noticed, on top of your team's project we have also planned individual LeetCode practice questions for 
            you to practice weekly. Our aim for Summer TechFest is simple: helping you to land your first internship. As such, we have structured Summer TechFest as follows:
          </p>
          <lu>
            <li>
                Team Based Software Project
            </li>
            <li>
                Weekly individual Leetcode Practice
            </li>
            <li>
                Resume Creation & Interview Prep at the end of the course
            </li>
        </lu>

          <h3 className="header">Agenda for the week</h3>
          <p>
            This week will be relatively "chill". We are having a welcome zoom, where you can find the link to under the 'zoom' tab, and
            will be compulsary for all participants to attend. Afterwards, you can start to ideate as a team on the project you wish to develop and familiarize yourself
            with this website as this will be your primary source for the entire 10 weeks.
          </p>

          <h3 className="header">Closing Remarks</h3>
          <p>
            Well, that's it for this week, stay tuned to the welcome zoom for more information!
          </p>
        </div>
      </div>
    </>
  );
}

export default Week1Project;
