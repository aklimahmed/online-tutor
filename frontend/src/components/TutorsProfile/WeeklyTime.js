import { React, useState } from "react";
import "./WeeklyTime.scss";

const WeeklyTime = () => {
  const [addMoreTime, setAddMoreTime] = useState(
    `<tr>
       <td data-label="From">
         <input class="form-control" type="time" />
       </td>
       <td data-label="To">
         <input class="form-control" type="time" />
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
              <th colSpan="2" scope="col">
                Time
              </th>
              <th rowSpan="2">Sat</th>
              <th rowSpan="2">Sun</th>
              <th rowSpan="2">Mon</th>
              <th rowSpan="2">Tue</th>
              <th rowSpan="2">Wed</th>
              <th rowSpan="2">Thu</th>
              <th rowSpan="2">Fri</th>
            </tr>
            <tr>
              <th>From</th>
              <th>To</th>
            </tr>
          </thead>
          <tbody id="addMoreTime">
            <tr>
              <td data-label="From">
                <input className="form-control" type="time" />
              </td>
              <td data-label="To">
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
