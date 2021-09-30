import React from "react";

const TeachesAndFees = () => {
  const subject = [{ sub: "Physics" }, { sub: "Math" }, { sub: "English" }];

  const createMore =
    `
    <tr>
            <td data-label="Curriculum">
              <select id="Select" class='form-select'>
                <option style={{ display: "none" }}>Select Curriculum</option>
                ${subject.map((sub) => (
                  `<option value=${sub.sub}>${sub.sub}</option>`
                ))}
              </select>
            </td>
            <td data-label="Class">
              <select id="Select" class="form-select">
                <option style={{ display: "none" }}>Select Class</option>
                ${subject.map((sub) => (
                  `<option value=${sub.sub}>${sub.sub}</option>`
                ))}
              </select>
            </td>
            <td data-label="Batch/Group">
              <input
                class="form-control"
                type="text"
                placeholder="Enter Amount e.g 120"
              />
            </td>
            <td data-label="One-on-One">
              <input
                class="form-control"
                type="text"
                placeholder="Enter Amount e.g 350"
              />
            </td>
          </tr>
    `

  const addMore = () => {
    const addNew = document.getElementById("addMore");
    addNew.innerHTML += createMore;
  };
  return (
    <div className="weeklyTime_div">
      <h6 className="time_heading">Class Teaches and Fees:</h6>
      <table>
        <thead>
          <tr>
            <th rowSpan="2">Curriculum</th>
            <th rowSpan="2">Class</th>
            <th colSpan="2" scope="col">
              Fess per hour/session
            </th>
          </tr>
          <tr>
            <th>Batch/Group</th>
            <th>One-on-One</th>
          </tr>
        </thead>
        <tbody id="addMore">
          <tr>
            <td data-label="Curriculum">
              <select id="Select" className="form-select">
                <option style={{ display: "none" }}>Select Curriculum</option>
                {subject.map((sub) => (
                  <option value={sub.sub}>{sub.sub}</option>
                ))}
              </select>
            </td>
            <td data-label="Class">
              <select id="Select" className="form-select">
                <option style={{ display: "none" }}>Select Class</option>
                {subject.map((sub) => (
                  <option value={sub.sub}>{sub.sub}</option>
                ))}
              </select>
            </td>
            <td data-label="Batch/Group">
              <input
                className="form-control"
                type="text"
                placeholder="Enter Amount e.g 120"
              />
            </td>
            <td data-label="One-on-One">
              <input
                className="form-control"
                type="text"
                placeholder="Enter Amount e.g 350"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <button onClick={addMore} className="addMore">
        + Add more
      </button>
    </div>
  );
};

export default TeachesAndFees;
