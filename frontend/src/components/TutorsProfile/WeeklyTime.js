import { React, useState } from "react";
import "./WeeklyTime.scss";

const WeeklyTime = () => {
  const [addMoreTime, setAddMoreTime] = useState(
    `<tr>
      <td>
        <input className="form-control" type="time" />
      </td>
      <td data-label="Sat">
        <input type="checkbox" />
      </td>
      <td data-label="Sun">
        <input type="checkbox" />
      </td>
      <td data-label="Mon">
        <input type="checkbox" />
      </td>
      <td data-label="Tue">
        <input type="checkbox" />
      </td>
      <td data-label="Wed">
        <input type="checkbox" />
      </td>
      <td data-label="Thu">
        <input type="checkbox" />
      </td>
      <td data-label="Fri">
        <input type="checkbox" />
      </td>
    </tr>`
  );

  const setTime = () => {
    const child = document.getElementById("addMoreTime");
    child.innerHTML += addMoreTime;
  };
  return (
    <div className="weeklyTime_div">
      <h6 className="time_heading">Weekly Time Avilablity for Teaching</h6>
      <div>
        <table>
          <thead>
            <tr>
              <th scope="col">Time</th>
              <th scope="col">Sat</th>
              <th scope="col">Sun</th>
              <th scope="col">Mon</th>
              <th scope="col">Tue</th>
              <th scope="col">Wed</th>
              <th scope="col">Thu</th>
              <th scope="col">Fri</th>
            </tr>
          </thead>
          <tbody id="addMoreTime">
            <tr>
              <td>
                <input className="form-control" type="time" />
              </td>
              <td data-label="Sat">
                <input type="checkbox" />
              </td>
              <td data-label="Sun">
                <input type="checkbox" />
              </td>
              <td data-label="Mon">
                <input type="checkbox" />
              </td>
              <td data-label="Tue">
                <input type="checkbox" />
              </td>
              <td data-label="Wed">
                <input type="checkbox" />
              </td>
              <td data-label="Thu">
                <input type="checkbox" />
              </td>
              <td data-label="Fri">
                <input type="checkbox" />
              </td>
            </tr>
          </tbody>
        </table>
        <button onClick={setTime} className="addMore">
          + Add more
        </button>
      </div>
    </div>
  );
};

export default WeeklyTime;
