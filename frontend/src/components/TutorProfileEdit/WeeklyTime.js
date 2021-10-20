import { React, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./WeeklyTime.scss";
import { useDispatch } from "react-redux";
import { weeklyTimeForm } from "./../../actions/tutorActions";

const WeeklyTime = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(props.weeklyTime);
  }, [props]);

  useEffect(() => {
    data
      ? setWeeklyTime(data)
      : setWeeklyTime([
          {
            id: uuidv4(),
            from: "",
            to: "",
            sat: false,
            sun: false,
            mon: false,
            tue: false,
            wed: false,
            thu: false,
            fri: false,
          },
        ]);
  }, [data]);

  const dispatch = useDispatch();

  const [weeklyTime, setWeeklyTime] = useState([]);

  const handleChangeInput = (id, event) => {
    const newWeeklyTime = weeklyTime.map((i) => {
      if (id === i.id) {
        if (event.target.name === "from" || event.target.name === "to") {
          i[event.target.name] = event.target.value;
        } else {
          i[event.target.name] = event.target.checked;
        }
      }
      return i;
    });

    setWeeklyTime(newWeeklyTime);
  };

  const handleAddFields = (e) => {
    e.preventDefault();
    setWeeklyTime([
      ...weeklyTime,
      {
        id: uuidv4(),
        from: "",
        to: "",
        sat: false,
        sun: false,
        mon: false,
        tue: false,
        wed: false,
        thu: false,
        fri: false,
      },
    ]);
  };

  const handleRemoveFields = (id) => {
    const values = [...weeklyTime];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setWeeklyTime(values);
  };

  useEffect(() => {
    dispatch(weeklyTimeForm(weeklyTime));
  });

  return (
    <div className="weeklyTime_div">
      <h6 className="time_heading">Weekly Time Availability for Teaching:</h6>
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
          {weeklyTime.map((inputField) => (
            <tr key={inputField.id}>
              <td colSpan="2" data-label="From">
                <input
                  className="form-control"
                  type="time"
                  name="from"
                  value={inputField.from}
                  onChange={(event) => handleChangeInput(inputField.id, event)}
                />
              </td>
              <td colSpan="2" data-label="To">
                <input
                  className="form-control"
                  type="time"
                  name="to"
                  value={inputField.to}
                  onChange={(event) => handleChangeInput(inputField.id, event)}
                />
              </td>
              <td data-label="Sat">
                <input
                  type="checkbox"
                  checked={inputField.sat === true}
                  name="sat"
                  onChange={(event) => handleChangeInput(inputField.id, event)}
                />
              </td>
              <td data-label="Sun">
                <input
                  type="checkbox"
                  name="sun"
                  checked={inputField.sun === true}
                  onChange={(event) => handleChangeInput(inputField.id, event)}
                />
              </td>
              <td data-label="Mon">
                <input
                  type="checkbox"
                  name="mon"
                  checked={inputField.mon === true}
                  onChange={(event) => handleChangeInput(inputField.id, event)}
                />
              </td>
              <td data-label="Tue">
                <input
                  type="checkbox"
                  name="tue"
                  checked={inputField.tue === true}
                  onChange={(event) => handleChangeInput(inputField.id, event)}
                />
              </td>
              <td data-label="Wed">
                <input
                  type="checkbox"
                  name="wed"
                  checked={inputField.wed === true}
                  onChange={(event) => handleChangeInput(inputField.id, event)}
                />
              </td>
              <td data-label="Thu">
                <input
                  type="checkbox"
                  name="thu"
                  checked={inputField.thu === true}
                  onChange={(event) => handleChangeInput(inputField.id, event)}
                />
              </td>
              <td data-label="Fri">
                <input
                  type="checkbox"
                  name="fri"
                  checked={inputField.fri === true}
                  onChange={(event) => handleChangeInput(inputField.id, event)}
                />
              </td>
              <td data-label="Action">
                <button
                  type="button"
                  className="btn-close"
                  disabled={WeeklyTime.length === 1}
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
