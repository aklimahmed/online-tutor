import { React, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TeachesAndFees = () => {
  const curriculum = [
    { curriculum: "National Curriculum (Bangla Ver)" },
    { curriculum: "National Curriculum (English Ver)" },
    { curriculum: "English Medium (Cambridge) " },
    { curriculum: "English Medium (Edexcel) " },
    { curriculum: "Vocational" },
  ];

const classes = [
  { class: "Class-3" },
  { class: "Class-4" },
  { class: "Class-5" },
  { class: "Class-6" },
  { class: "Class-7"},
  { class: "Class-8" },
  { class: "Class-9" },
  { class: "Class-10" },
  { class: "Class-11" },
  { class: "Class-12"},
  { class: "PSC" },
  { class: "JSC" },
  { class: "SSC" },
  { class: "HSC" },
  { class: "O Level"},
  { class: "A Level"},
];

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
            <th rowSpan="2" style={{ width: "10%" }}>
              Action
            </th>
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
                  {curriculum.map((curr) => (
                    <option value={curr.curriculum}>{curr.curriculum}</option>
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
                  {classes.map((val) => (
                    <option value={val.class}>{val.class}</option>
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
