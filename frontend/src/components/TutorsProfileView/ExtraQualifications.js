import React from "react";

const ExtraQualifications = () => {
  return (
    <div className="mt-5">
      <h5 className="qtext">Extra Qualifications or Trainings</h5>
      <table class="qualification_table mt-3">
        <thead>
          <tr>
            <th>
              <small>Course Title</small>
            </th>
            <th>
              <small>Duration</small>
            </th>
            <th>
              <small>Passing Year</small>
            </th>
            <th>
              <small>Institute</small>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="Degree">
              <small>Masters of Business Administration (MBA)</small>
            </td>
            <td data-label="Subject (Major)">
              <small>Finance</small>
            </td>
            <td data-label="Passing Year">
              <small>Running</small>
            </td>
            <td data-label="Institute">
              <small>North South University</small>
            </td>
          </tr>
          <tr>
            <td data-label="Degree">
              <small>Masters of Business Administration (MBA)</small>
            </td>
            <td data-label="Subject (Major)">
              <small>Finance</small>
            </td>
            <td data-label="Passing Year">
              <small>Running</small>
            </td>
            <td data-label="Institute">
              <small>North South University</small>
            </td>
          </tr>
          <tr>
            <td data-label="Degree">
              <small>Masters of Business Administration (MBA)</small>
            </td>
            <td data-label="Subject (Major)">
              <small>Finance</small>
            </td>
            <td data-label="Passing Year">
              <small>Running</small>
            </td>
            <td data-label="Institute">
              <small>North South University</small>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ExtraQualifications;
