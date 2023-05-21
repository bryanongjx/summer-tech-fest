import React from 'react';
import NavBarSchedule from '../../../Components/NavBarSchedule';

function Week10Project() {
  return (
    <>
      <h2 className="text-center" style={{ marginTop: '20px' }}>Week 10</h2>
      <NavBarSchedule />
      <div className="container-fluid px-0 d-flex justify-content-center">
        <div className="col-lg-8 col-md-7 bg-white p-4">
          <h1 className="mt-4 mb-4">It's the final countdown, du du du du.. !</h1>

          <h3 className="header">End Game</h3>
          <p>
            Congratulations, you've made it! It's finally time to submit your project, and head back to school.. :")
          </p>

          <h3 className="header">Submission Details</h3>
          <p>
            We will be collecting 3 things from you for your submission, which we will announce how to do so to you soon:  
          </p>
          <lu>
            <ol>
                1. User Authentication (User Sign Up / Log in)
            </ol>
            <ol>
                2. Buyers having a Marketplace dashboard to view products from sellers
            </ol>
            <ol>
                3. Sellers being able to List products
            </ol>
          </lu>

          <h3 className="header">Deployment</h3>
          <p>
            This will be an optional requirement, but why not see the deployment of your application? We haven't included any deployment resources
            for you, but feel free to research on deployment (Netlify, Github Pages, etc) and deploy your application. After all, wouldn't it be nice to see your
            work being out there?
          </p>

          <h3 className="header">Contributing to this website</h3>
          <p>
            If you are curious on the creation of this website, we have included the github repo's link below. Well, it was done within 5 days, so there's definitely room
            for improvement! Feel free to reach out to the organizing committee if you are interested in improving the website! Or if you simply want to check out
            how the website was coded, feel free as well!
          </p>
          <a href ="https://github.com/bryanongjx/summer-tech-fest">https://github.com/bryanongjx/summer-tech-fest</a>

          <h3 className="header">Closing Remarks</h3>
          <p>
            Well, we would all like to express our sincerest gratitude for sticking with us throughout these 10 weeks, it definitely wasn't easy, but we hope you have learnt a thing 
            or 2 about software development. All the best in landing your next internship! :)
          </p>

        </div>
      </div>
    </>
  );
}

export default Week10Project;
