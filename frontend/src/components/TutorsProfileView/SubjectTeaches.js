import React from "react";

const SubjectTeaches = () => {
  return (
    <div className="mt-5">
      <h5 className="qtext">Subject Teaches</h5>
      <table class="qualification_table mt-3">
        <thead>
          <tr>
            <th>
              <small>Focus</small>
            </th>
            <th>
              <small>Subject</small>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="Focus">
              <small>Primary</small>
            </td>
            <td data-label="Subjects">
              <small>Math</small>
            </td>
          </tr>
          <tr>
            <td data-label="Focus">
              <small>Scondary</small>
            </td>
            <td data-label="Subjects">
              <small>Management, Economics, Statistics</small>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SubjectTeaches;
