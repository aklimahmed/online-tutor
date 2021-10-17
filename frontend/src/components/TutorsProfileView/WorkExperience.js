import { React, useState, useEffect } from "react";

const WorkExperience = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(props.WoExperience);
  }, [props]);

  return (
    <div className="mt-5">
      <h5 className="qtext">Work Experience</h5>
      <table className="qualification_table mt-3">
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
          {data ? (
            data.map((data) => (
              <tr key={data.id}>
                <td data-label="Institute">
                  <small>{data.institute}</small>
                </td>
                <td data-label="Designation">
                  <small>{data.designation}</small>
                </td>
                <td data-label="Period">
                  <small>{data.period}</small>
                </td>
                <td data-label="Verification">
                  <small>Verified</small>
                </td>
              </tr>
            ))
          ) : (
            <tr></tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default WorkExperience;
