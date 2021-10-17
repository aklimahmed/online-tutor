import { React, useEffect, useState } from "react";

const ClassTeaches = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(props.teachesAndFess);
  }, [props]);

  return (
    <div className="mt-5">
      <h5 className="qtext">Class Teaches and Fees</h5>
      <table className="qualification_table mt-3">
        <thead>
          <tr>
            <th rowSpan="2">
              <small>Curriculum</small>
            </th>
            <th rowSpan="2">
              <small>Class</small>
            </th>
            <th colSpan="2" scope="col">
              <small>Fess per hour/session</small>
            </th>
          </tr>
          <tr>
            <th>
              <small>Batch/Group</small>
            </th>
            <th>
              <small>One-on-One</small>
            </th>
          </tr>
        </thead>
        <tbody>
          {data
            ? data.map((data) => (
                <tr key={data.id}>
                  <td data-label="Curriculum">
                    <small>{data.curriculum}</small>
                  </td>
                  <td data-label="Class">
                    <small>{data.class}</small>
                  </td>
                  <td data-label="Batch/Group">
                    <small>{data.batch} {data.currency}</small>
                  </td>
                  <td data-label="One-on-One">
                    <small>{data.single} {data.currency}</small>
                  </td>
                </tr>
              ))
            : <tr></tr>}
        </tbody>
      </table>
    </div>
  );
};

export default ClassTeaches;
