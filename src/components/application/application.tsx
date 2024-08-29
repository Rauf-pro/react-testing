import React from "react";

export const Application = () => {
  return (
    <>
      <h1>Job application form</h1>
      <h2>Section 1</h2>
      <p>All fields are mandatory</p>
      <span title="close">X</span>
      <img src="https://via.placeholder.com/150" alt="a person with laptop" />
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Fullname" value="Rauf" onChange={() => {}} />
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <textarea name="" id="bio"></textarea>
        </div>
        <div>
          {/* <label htmlFor="job-location">Job location</label> */}
          <label htmlFor="job-location">Name</label> 
          <select id="job-location">
            <option value="">Select a country</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="India">India</option>
            <option value="GB">United Kingdom</option>
          </select>
        </div>
        <div>
          <label>
            <input type="checkbox" id="terms" /> I agree to the terms and
            conditions
          </label>
        </div>
        <button>Submit</button>
      </form>
    </>
  );
};
