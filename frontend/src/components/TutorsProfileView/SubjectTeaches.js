import { React, useState, useEffect } from "react";

const SubjectTeaches = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(props.subjectTeaches);
  }, [props]);

  const subject = data ? data.secondarySubjects : "";
  console.log(subject);

  return (
    <div className="mt-5">
      <h5 className="qtext">Subject Teaches</h5>
      <table className="qualification_table mt-3">
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
          {data ? (
            <tr>
              <td data-label="Focus">
                <small>Primary</small>
              </td>
              <td data-label="Subject">
                <small>{data.primarySubject}</small>
              </td>
            </tr>
          ) : (
            <tr></tr>
          )}
          {data ? (
            <tr>
              <td data-label="Focus">
                <small>Secondary</small>
              </td>
              <td data-label="subjects"><small>{`${data.secondarySubjects}`}</small></td>
            </tr>
          ) : (
            <tr></tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default SubjectTeaches;
