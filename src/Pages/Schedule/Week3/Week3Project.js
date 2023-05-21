import React from 'react';
import NavBarSchedule from '../../../Components/NavBarSchedule';

function Week3Project() {
  return (
    <>
      <h2 className="text-center" style={{ marginTop: '20px' }}>Week 3</h2>
      <NavBarSchedule />
      <div className="container-fluid px-0 d-flex justify-content-center">
        <div className="col-lg-8 col-md-7 bg-white p-4">
          <h1 className="mt-4 mb-4">Github, UI/UX, & more research..</h1>

          <h3 className="header">Overview</h3>
          <p>
            Welcome to week 3! This week we will get the foundation laid out for starting your project. We will begin with familiarizing yourself
            with GitHub & Git, where you will be managing your project's repository. Afterwards, we will do up a basic UI/UX design of your application and
            finish it up with more research.
          </p>

          <h3 className="header">GitHub Repo</h3>
          <p>
            At the end of the week, your team should have setup your project's GitHub repo and have all members successfully clone the repo locally. In addition,
            you should be familiar with the basic github features. Refer to "GitHub Version Control" under Resources. Don't worry if the git commands seems confusing at first,
            it takes practice which you will be doing throughout the rest of the weeks.
          </p>

          <h3 className="header">UI / UX Design</h3>
          <p>
            In the User Interface / User Experience (UI/UX) phase, you will be doing a mockup of how your application will look like. This will include how you want
            to style your application and the various pages / components you want it to include. For starters, we recommend using Figma to desing your application. By the end of this week,
            you should have done up a Figma Project so that the rest of the weeks will be smooth sailing, where you can just refer to your mockup's design. Of course, feel free to use other softwares
            to design your application, we only recommended Figma due to it's popularity.
          </p>
          <a href="https://www.figma.com/">Figma Official Website</a>

          <h3 className="header">More research</h3>
          <p>
            Well, needless to say you can't start developing an application immediately without having any idea of how to use the technologies you want to adopt. Well,
            here's the time to start researching. We have provided you with many resources on various popular technologies under our "Resources" tab. Feel free to pick the ones
            your team will be adopting and learn up on it.
          </p>

          <h3 className="header">Closing Remarks</h3>
          <p>
            As usual, a good foundation is key to enable the rest of the weeks to be smooth sailing. This week will be taxing, where you have to watch tons of videos to learn the technologies,
            learn about git commands, and create a design mockup. But trust us, it will be worth it in the coming weeks.
          </p>
        </div>
      </div>
    </>
  );
}

export default Week3Project;
