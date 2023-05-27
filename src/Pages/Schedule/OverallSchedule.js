import React from 'react';

function OverallSchedule() {
  return (
    <div className="container mt-5">
      <h2 className="text-center">Overall Schedule</h2>
      <hr />
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Week</th>
            <th>Leetcode</th>
            <th>Project</th>
            <th>Zoom</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Arrays & Hashing</td>
            <td>Onboarding & Getting Started</td>
            <td>Welcome zoom</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Two Pointers</td>
            <td>Project ideation & Research</td>
            <td>-</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Sliding Window</td>
            <td>GitHub Repo Setup, UI/UX Design & more research</td>
            <td>-</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Stack</td>
            <td>Development of core features</td>
            <td>-</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Linked List</td>
            <td>Development of core features</td>
            <td>-</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Trees</td>
            <td>Development of main features</td>
            <td>-</td>
          </tr>
          <tr>
            <td>7</td>
            <td>Heap</td>
            <td>Development of main features</td>
            <td>-</td>
          </tr>
          <tr>
            <td>8</td>
            <td>BackTracking</td>
            <td>Draft Submission</td>
            <td>Resume Creation & Interview tips Workshop</td>
          </tr>
          <tr>
            <td>9</td>
            <td>Graphs</td>
            <td>Consultation w Mentors & User Guide</td>
            <td>-</td>
          </tr>
          <tr>
            <td>10</td>
            <td>Dynamic Programming</td>
            <td>Final Submission</td>
            <td>Briefing on final submission / Closing Ceremony</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default OverallSchedule;
