import React from "react";

const WorkExperience = () => {
  return (
    <div className="mt-5">
      <h5 className="qtext">Work Experience</h5>
      <table class="qualification_table mt-3">
        <thead>
          <tr>
            <th>
              <small>Institute</small>
            </th>
            <th>
              <small>Designation</small>
            </th>
            <th>
              <small>Period</small>
            </th>
            <th>
              <small>Verification</small>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="Degree">
              <small>North South University</small>
            </td>
            <td data-label="Subject (Major)">
              <small>Scheduling Associate</small>
            </td>
            <td data-label="Passing Year">
              <small>2017 - 2019</small>
            </td>
            <td data-label="Verification">
              <small>Verified</small>
            </td>
          </tr>
          <tr>
            <td data-label="Degree">
              <small>North South University</small>
            </td>
            <td data-label="Subject (Major)">
              <small>Scheduling Associate</small>
            </td>
            <td data-label="Passing Year">
              <small>2017 - 2019</small>
            </td>
            <td data-label="Verification">
              <small>Verified</small>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WorkExperience;
