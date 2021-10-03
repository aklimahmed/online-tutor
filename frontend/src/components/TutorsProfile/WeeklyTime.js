import { React, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./WeeklyTime.scss";

const WeeklyTime = () => {
  const [inputFields, setInputFields] = useState([
    {
      id: uuidv4(),
      from: "",
      to: "",
      sat: "",
      sun: "",
      mon: "",
      tue: "",
      wed: "",
      thu: "",
      fri: "",
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
        from: "",
        to: "",
        sat: "",
        sun: "",
        mon: "",
        tue: "",
        wed: "",
        thu: "",
        fri: "",
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
      <table>
        <thead>
          <tr>
            <th colSpan="4" scope="col">
              Time
            </th>
            <th rowSpan="2">Sat</th>
            <th rowSpan="2">Sun</th>
            <th rowSpan="2">Mon</th>
            <th rowSpan="2">Tue</th>
            <th rowSpan="2">Wed</th>
            <th rowSpan="2">Thu</th>
            <th rowSpan="2">Fri</th>
            <th rowSpan="2">Action</th>
          </tr>
          <tr>
            <th colSpan="2">From</th>
            <th colSpan="2">To</th>
          </tr>
        </thead>
        <tbody id="addMoreTime">
          {inputFields.map((inputField) => (
            <tr key={inputField.id}>
              <td colSpan="2" data-label="From">
                <input
                  className="form-control"
                  type="time"
                  name="from"
                  onChange={(event) => handleChangeInput(inputField.id, event)}
                />
              </td>
              <td colSpan="2" data-label="To">
                <input
                  className="form-control"
                  type="time"
                  name="to"
                  onChange={(event) => handleChangeInput(inputField.id, event)}
                />
              </td>
              <td data-label="Sat">
                <input
                  type="checkbox"
                  name="sat"
                  onChange={(event) => handleChangeInput(inputField.id, event)}
                />
              </td>
              <td data-label="Sun">
                <input
                  type="checkbox"
                  name="sun"
                  onChange={(event) => handleChangeInput(inputField.id, event)}
                />
              </td>
              <td data-label="Mon">
                <input
                  type="checkbox"
                  name="mon"
                  onChange={(event) => handleChangeInput(inputField.id, event)}
                />
              </td>
              <td data-label="Tue">
                <input
                  type="checkbox"
                  name="tue"
                  onChange={(event) => handleChangeInput(inputField.id, event)}
                />
              </td>
              <td data-label="Wed">
                <input
                  type="checkbox"
                  name="wed"
                  onChange={(event) => handleChangeInput(inputField.id, event)}
                />
              </td>
              <td data-label="Thu">
                <input
                  type="checkbox"
                  name="thu"
                  onChange={(event) => handleChangeInput(inputField.id, event)}
                />
              </td>
              <td data-label="Fri">
                <input
                  type="checkbox"
                  name="fri"
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
        + Add more{" "}
      </button>
    </div>
  );
};

export default WeeklyTime;
