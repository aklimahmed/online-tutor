import { React, useState } from "react";
import "./WeeklyTime.scss";

const WeeklyTime = () => {
  const DeleteTableRow = (e) => {
    const row = e.parentNode.parentNode;
    row.parentNode.removeChilde(row);
  };

  const hh = () => {
    console.log("hh");
  };

  const setTime = () => {
    const itemsDiv = document.getElementById("addMoreTime");
    const itemDiv = document.createElement("tr");
    const itemInfo = `
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
    <td data-label="Action">
      <p onclick="hh()" class="delete">
        &#10006;
      </p>
    </td>`;
    itemDiv.innerHTML = itemInfo;
    itemsDiv.appendChild(itemDiv);
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
              <th rowSpan="2">Action</th>
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
              <td data-label="Action">
                <p className="right">&#10004;</p>
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
