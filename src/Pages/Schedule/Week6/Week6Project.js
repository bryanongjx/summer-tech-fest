import React from 'react';
import NavBarSchedule from '../../../Components/NavBarSchedule';

function Week6Project() {
  return (
    <>
      <h2 className="text-center" style={{ marginTop: '20px' }}>Week 6</h2>
      <NavBarSchedule />
      <div className="container-fluid px-0 d-flex justify-content-center">
        <div className="col-lg-8 col-md-7 bg-white p-4">
          <h1 className="mt-4 mb-4">More more more features!</h1>

          <h3 className="header">Overview</h3>
          <p>
            Hopefully, you should have laid out some core features of your application. This week, we will be focusing on implementing more features
          </p>

          <h3 className="header">Implementing Main Features</h3>
          <p>
            Similar to what you have done for core features, we will now be working on some main features. So.. what is the difference core and main features? Well, the
            distinction between the 2 is abit blurry. An example would bring us back to our marketplace app, where a core feature would be the marketplace for buyers to view products and A
            possible main feature would be buyers being able to keep track of their orders. Hope this gives you a rough understanding!
          </p>

          <h3 className="header">Mentor Consultation</h3>
          <p>
            While implementing your main features, feel free to consult our mentors to provide you with direction / advice. We're always willing to help out! :)
          </p>

          <h3 className="header">Closing Remarks</h3>
          <p>
            Let's get that grind!
          </p>
        </div>
      </div>
    </>
  );
}

export default Week6Project;
