import React from "react";

const ClassTeaches = () => {
  return (
    <div className="mt-5">
      <h5 className="qtext">Class Teaches and Fees</h5>
      <table class="qualification_table mt-3">
      <thead>
          <tr>
            <th rowSpan="2"><small>Curriculum</small></th>
            <th rowSpan="2"><small>Class</small></th>
            <th colSpan="2" scope="col">
            <small>Fess per hour/session</small>
            </th>
          </tr>
          <tr>
            <th><small>Batch/Group</small></th>
            <th><small>One-on-One</small></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="Curriculum">
              <small>Bangla Version</small>
            </td>
            <td data-label="Class">
              <small>9 to 10</small>
            </td>
            <td data-label="Batch/Group">
              <small>TK.150</small>
            </td>
            <td data-label="One-on-One">
              <small>TK.350</small>
            </td>
          </tr>
          <tr>
            <td data-label="Curriculum">
              <small>English Version</small>
            </td>
            <td data-label="Class">
              <small>9 to 10</small>
            </td>
            <td data-label="Batch/Group">
              <small>TK.150</small>
            </td>
            <td data-label="One-on-One">
              <small>TK.350</small>
            </td>
          </tr>
          <tr>
            <td data-label="Curriculum">
              <small>Vocational</small>
            </td>
            <td data-label="Class">
              <small>9 to 10</small>
            </td>
            <td data-label="Batch/Group">
              <small>TK.150</small>
            </td>
            <td data-label="One-on-One">
              <small>TK.350</small>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ClassTeaches;
