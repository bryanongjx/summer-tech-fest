import React from 'react';
import NavBarSchedule from '../../../Components/NavBarSchedule';

function Week4Project() {
  return (
    <>
      <h2 className="text-center" style={{ marginTop: '20px' }}>Week 4</h2>
      <NavBarSchedule />
      <div className="container-fluid px-0 d-flex justify-content-center">
        <div className="col-lg-8 col-md-7 bg-white p-4">
          <h1 className="mt-4 mb-4">Let's get started coding!</h1>

          <h3 className="header">Overview</h3>
          <p>
            Now that we have laid out the foundation, we can finally start coding! YESSS..! or maybe not. From this week onwards, our project milestone's will be relatively
            flexible, as different projects will have different functionalities and hence different checkpoints. But fear not, we will provide you with a rough timeline to keep
            your team on track.
          </p>

          <h3 className="header">Implementing Core Features</h3>
          <p>
            To start it off, we will try to build a Minimum Viable Product (MVP). What this means that is we will be starting to implement core features of our application
            "How do i know what are core feautres?" Well, a simple way to think about it would be to come up with a purpose for your application: for example I want to create a marketplace
            app for people to buy and sell things. After thinking of the purpose, think of what features are the MOST ESSENTIAL to your application. In our case, some core features would include:
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

          After we are done with these core features, we can then move on to implementing other features like order tracking, sending payment, etc. In any case, you should be able to clearly identify
          your application's core features and start working on them this week.

          <h3 className="header">More research</h3>
          <p>
            Welcome back to research. Of course, we understand that last week's agenda might have been abit tight for you to do sufficient research. So we have created this backlog
            for you to continue on researching into understanding the technologies you will be adopting.
          </p>

          <h3 className="header">Closing Remarks</h3>
          <p>
            Preferably, you should have made some progress in implementing some core features in your application, we definitely recommend starting with User Authentication as there are many
            guides online that teach you how to do so. But if you have just been continuing to research and learning up on the technologies, that's perfectly fine too! We have allocated more time next week
            to continue working on your application's core features.
          </p>
        </div>
      </div>
    </>
  );
}

export default Week4Project;
