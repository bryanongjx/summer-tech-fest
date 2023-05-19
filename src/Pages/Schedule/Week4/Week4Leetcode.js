import React from 'react';
import NavBarSchedule from '../../../Components/NavBarSchedule'

function Week4Leetcode() {
  return (
    <>
      <h2 className="text-center" style={{'marginTop': '20px'}}>Week 4</h2>
      <NavBarSchedule />
      <div className="container text-center mt-5">
      <h2>Topic: Stack</h2>
      <h4 className="mt-4">Question of the week:</h4>
      <p>
        <a href="https://leetcode.com/problems/valid-parentheses/" target="_blank" rel="noopener noreferrer">
          Click here for the LeetCode question
        </a>
      </p>
    </div>
    </>
  );
}

export default Week4Leetcode;