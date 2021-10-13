import {React, useEffect, useState} from "react";
import "./Qualifications.scss";

const Qualifications = (props) => {

  const [data, setData] = useState([]);

  useEffect(() => {
    setData(props.Qualifications);
  }, [props]);

  return (
    <div className="mt-5">
      <h5 className="qtext">Qualifications</h5>
      <table class="qualification_table mt-3">
        <thead>
          <tr>
            <th>
              <small>Degree</small>
            </th>
            <th>
              <small>Subject (Major)</small>
            </th>
            <th>
              <small>Passing Year</small>
            </th>
            <th>
              <small>Institute</small>
            </th>
            <th>
              <small>Verification</small>
            </th>
          </tr>
        </thead>
        <tbody>
            <tr>
                <td data-label="Degree"><small>Masters of Business Administration (MBA)</small></td>
                <td data-label="Subject (Major)"><small>Finance</small></td>
                <td data-label="Passing Year"><small>Running</small></td>
                <td data-label="Institute"><small>North South University</small></td>
                <td data-label="Verification"><small>Verified</small></td>
            </tr>
            <tr>
                <td data-label="Degree"><small>Masters of Business Administration (MBA)</small></td>
                <td data-label="Subject (Major)"><small>Finance</small></td>
                <td data-label="Passing Year"><small>Running</small></td>
                <td data-label="Institute"><small>North South University</small></td>
                <td data-label="Verification"><small>Verified</small></td>
            </tr>
            <tr>
                <td data-label="Degree"><small>Masters of Business Administration (MBA)</small></td>
                <td data-label="Subject (Major)"><small>Finance</small></td>
                <td data-label="Passing Year"><small>Running</small></td>
                <td data-label="Institute"><small>North South University</small></td>
                <td data-label="Verification"><small>Verified</small></td>
            </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Qualifications;
