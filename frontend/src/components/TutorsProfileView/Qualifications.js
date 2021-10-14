import {React, useEffect, useState} from "react";
import "./Qualifications.scss";

const Qualifications = (props) => {

  const [data, setData] = useState([]);

  useEffect(() => {
    setData(props.Qualifications);
  }, [props]);


  return (
    <div className="mt-5">
      <h5 className="qtext">Qualifications</h5>
      <table className="qualification_table mt-3">
        <thead>
          <tr>
            <th>
              <small>Degree</small>
            </th>
            <th>
              <small>Subject (Major)</small>
            </th>
            <th>
              <small>Passing Year</small>
            </th>
            <th>
              <small>Result</small>
            </th>
            <th>
              <small>Institute</small>
            </th>
            <th>
              <small>Verification</small>
            </th>
          </tr>
        </thead>
        <tbody>
            {
              data ? 
              <tr style={data.sscDegree === ""  ? {display: "none"} : {}}>
                <td data-label="Degree"><small>{data.sscDegree ? "SSC" : ""}</small></td>
                <td data-label="Subject (Major)"><small>{data.sscDegree ? data.sscDegree : ""}</small></td>
                <td data-label="Passing Year"><small>{data.sscPassingYear ? data.sscPassingYear : ""}</small></td>
                <td data-label="Result"><small>{data.sscResult ? data.sscResult : ""}</small></td>
                <td data-label="Institute"><small>{data.sscInstitution? data.sscInstitution : ""}</small></td>
                <td data-label="Subject (Major)"><small>{data.sscDegree? "Verified" : ""}</small></td>
            </tr>:<tr></tr>
            }
            {
              data ? 
              <tr style={data.hscDegree === ""  ? {display: "none"} : {}}>
                <td data-label="Degree"><small>{data.hscDegree ? "HSC" : ""}</small></td>
                <td data-label="Subject (Major)"><small>{data.hscDegree ? data.hscDegree : ""}</small></td>
                <td data-label="Passing Year"><small>{data.hscPassingYear ? data.hscPassingYear : ""}</small></td>
                <td data-label="Result"><small>{data.hscResult ? data.hscResult : ""}</small></td>
                <td data-label="Institute"><small>{data.hscInstitution? data.hscInstitution : ""}</small></td>
                <td data-label="Subject (Major)"><small>{data.hscDegree? "Verified" : ""}</small></td>
            </tr>:<tr></tr>
            }
             {
              data ? 
              <tr style={data.graduationDegree === ""  ? {display: "none"} : {}}>
                <td data-label="Degree"><small>{data.graduationDegree ? "Graduation" : ""}</small></td>
                <td data-label="Subject (Major)"><small>{data.graduationDegree ? data.graduationDegree : ""}</small></td>
                <td data-label="Passing Year"><small>{data.graduationPassingYear ? data.graduationPassingYear : ""}</small></td>
                <td data-label="Result"><small>{data.graduationResult ? data.graduationResult : ""}</small></td>
                <td data-label="Institute"><small>{data.graduationInstitution? data.graduationInstitution : ""}</small></td>
                <td data-label="Subject (Major)"><small>{data.graduationDegree? "Verified" : ""}</small></td>
            </tr>:<tr></tr>
            }
            {
              data ? 
              <tr style={data.postGraduationDegree === ""  ? {display: "none"} : {}}>
                <td data-label="Degree"><small>{data.postGraduationDegree ? "Post-Graduation" : ""}</small></td>
                <td data-label="Subject (Major)"><small>{data.postGraduationDegree ? data.postGraduationDegree : ""}</small></td>
                <td data-label="Passing Year"><small>{data.postGraduationPassingYear ? data.postGraduationPassingYear : ""}</small></td>
                <td data-label="Result"><small>{data.postGraduationResult ? data.postGraduationResult : ""}</small></td>
                <td data-label="Institute"><small>{data.postGraduationInstitution? data.postGraduationInstitution : ""}</small></td>
                <td data-label="Subject (Major)"><small>{data.postGraduationDegree? "Verified" : ""}</small></td>
            </tr>:<tr></tr>
            }
            {
              data ? 
              <tr style={data.postGraduationDegree === ""  ? {display: "none"} : {}}>
                <td data-label="Degree"><small>{data.postGraduationDegree ? "Doctorate" : ""}</small></td>
                <td data-label="Subject (Major)"><small>{data.postGraduationDegree ? data.postGraduationDegree : ""}</small></td>
                <td data-label="Passing Year"><small>{data.doctoratePassingYear ? data.doctoratePassingYear : ""}</small></td>
                <td data-label="Result"><small>{data.doctorateResult? data.doctorateResult : ""}</small></td>
                <td data-label="Institute"><small>{data.doctorateInstitution? data.doctorateInstitution : ""}</small></td>
                <td data-label="Subject (Major)"><small>{data.postGraduationDegree? "Verified" : ""}</small></td>
            </tr>:<tr></tr>
            }
        </tbody>
      </table>
    </div>
  );
};

export default Qualifications;
