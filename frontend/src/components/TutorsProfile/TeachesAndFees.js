import { React, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TeachesAndFees = () => {
  const subject = [{ sub: "Physics" }, { sub: "Math" }, { sub: "English" }];

  const [inputFields, setInputFields] = useState([
    {
      id: uuidv4(),
      curriculum: "",
      class: "",
      batch: "",
      single: "",
    },
  ]);
  console.log(inputFields);
  const handleChangeInput = (id, event) => {
    const newInputFields = inputFields.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    setInputFields(newInputFields);
  };

  const handleAddFields = () => {
    setInputFields([
      ...inputFields,
      {
        id: uuidv4(),
        curriculum: "",
        class: "",
        batch: "",
        single: "",
      },
    ]);
  };

  const handleRemoveFields = (id) => {
    const values = [...inputFields];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setInputFields(values);
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
            <th rowSpan="2"  style={{width: '10%'}}>Action</th>
          </tr>
          <tr>
            <th>Batch/Group</th>
            <th>One-on-One</th>
          </tr>
        </thead>
        <tbody id="addMore">
          {inputFields.map((inputField) => (
            <tr key={inputField.id}>
              <td data-label="Curriculum">
                <select
                  id="Select"
                  className="form-select"
                  name="curriculum"
                  value={inputField.curriculum}
                  onChange={(event) => handleChangeInput(inputField.id, event)}
                >
                  <option style={{ display: "none" }}>Select Curriculum</option>
                  {subject.map((sub) => (
                    <option value={sub.sub}>{sub.sub}</option>
                  ))}
                </select>
              </td>
              <td data-label="Class">
                <select
                  id="Select"
                  className="form-select"
                  name="class"
                  value={inputField.class}
                  onChange={(event) => handleChangeInput(inputField.id, event)}
                >
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
                  name="batch"
                  placeholder="Enter Amount e.g 120"
                  value={inputField.batch}
                  onChange={(event) => handleChangeInput(inputField.id, event)}
                />
              </td>
              <td data-label="One-on-One">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter Amount e.g 350"
                  name="single"
                  value={inputField.single}
                  onChange={(event) => handleChangeInput(inputField.id, event)}
                />
              </td>
              <td data-label="Action">
                <button
                  type="button"
                  class="btn-close"
                  disabled={inputFields.length === 1}
                  aria-label="Close"
                  onClick={() => handleRemoveFields(inputField.id)}
                ></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleAddFields} className="addMore">
        + Add more
      </button>
    </div>
  );
};

export default TeachesAndFees;
