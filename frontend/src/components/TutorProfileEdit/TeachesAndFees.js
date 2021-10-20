import { React, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { classes } from "../../jsonData/Classes";
import { curriculum } from "../../jsonData/Curriculum";
import { useDispatch } from "react-redux";
import { teachesAndFeesForm } from "../../actions/tutorActions";
import { currency } from "../../jsonData/Currency";

const TeachesAndFees = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(props.teachesAndFess);
  }, [props]);

  useEffect(() => {
    data
      ? setTeachesAndFees(data)
      : setTeachesAndFees([
          {
            id: uuidv4(),
            curriculum: "",
            class: "",
            currency: "BDT",
            batch: 0,
            single: 0,
          },
        ]);
  }, [data]);

  const dispatch = useDispatch();

  const [TeachesAndFees, setTeachesAndFees] = useState([]);
  const handleChangeInput = (id, event) => {
    const newTeachesAndFees = TeachesAndFees.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    setTeachesAndFees(newTeachesAndFees);
  };

  const handleAddFields = (e) => {
    e.preventDefault();
    setTeachesAndFees([
      ...TeachesAndFees,
      {
        id: uuidv4(),
        curriculum: "",
        class: "",
        currency: "BDT",
        batch: 0,
        single: 0,
      },
    ]);
  };

  const handleRemoveFields = (id) => {
    const values = [...TeachesAndFees];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setTeachesAndFees(values);
  };

  useEffect(() => {
    dispatch(teachesAndFeesForm(TeachesAndFees));
  });

  return (
    <div className="weeklyTime_div">
      <h6 className="time_heading">Class Teaches and Fees:</h6>
      <table>
        <thead>
          <tr>
            <th rowSpan="2">Curriculum</th>
            <th rowSpan="2">Class</th>
            <th rowSpan="2">Currency</th>
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
          {TeachesAndFees.map((inputField) => (
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
                    <option key={curr.curriculum} value={curr.curriculum}>
                      {curr.curriculum}
                    </option>
                  ))}
                </select>
              </td>
              <td data-label="Class">
                <select
                  className="form-select"
                  name="class"
                  value={inputField.class}
                  onChange={(event) => handleChangeInput(inputField.id, event)}
                >
                  <option style={{ display: "none" }}>Select Class</option>
                  {classes.map((val) => (
                    <option key={val.class} value={val.class}>
                      {val.class}
                    </option>
                  ))}
                </select>
              </td>
              <td data-label="Currency">
                <select
                  className="form-select"
                  name="currency"
                  value={inputField.currency}
                  onChange={(event) => handleChangeInput(inputField.id, event)}
                >
                  <option style={{ display: "none" }}>Select Currency</option>
                  {currency.map((val) => (
                    <option key={val.currency} value={val.currency}>
                      {val.currency}
                    </option>
                  ))}
                </select>
              </td>
              <td data-label="Batch/Group">
                <input
                  className="form-control"
                  type="number"
                  name="batch"
                  value={inputField.batch === 0 ? "" : inputField.batch} 
                  placeholder="Enter Amount e.g 120"
                  onChange={(event) => handleChangeInput(inputField.id, event)}
                />
              </td>
              <td data-label="One-on-One">
                <input
                  className="form-control"
                  type="number"
                  placeholder="Enter Amount e.g 350"
                  name="single"
                  value={inputField.single === 0 ? "" : inputField.single} 
                  onChange={(event) => handleChangeInput(inputField.id, event)}
                />
              </td>
              <td data-label="Action">
                <button
                  type="button"
                  className="btn-close"
                  disabled={TeachesAndFees.length === 1}
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
