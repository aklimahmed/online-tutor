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
              <tr>
                {data.sscDegree ? <td data-label="Degree"><small>SSC</small></td> : ""}
                {data.sscDegree ? <td data-label="Subject (Major)"><small>{data.sscDegree}</small></td> : ""}
                {data.sscPassingYear ? <td data-label="Passing Year"><small>{data.sscPassingYear}</small></td> : ""}
                {data.sscInstitution ? <td data-label="Institute"><small>{data.sscInstitution}</small></td> : ""}
                {data.sscDegree ? <td data-label="Subject (Major)"><small>Verified</small></td> : ""}
            </tr>:<tr></tr>
            }
            {
              data ? 
              <tr>
                {data.hscDegree ? <td data-label="Degree"><small>HSC</small></td> : ""}
                {data.hscDegree ? <td data-label="Subject (Major)"><small>{data.hscDegree}</small></td> : ""}
                {data.hscPassingYear ? <td data-label="Passing Year"><small>{data.hscPassingYear}</small></td> : ""}
                {data.hscInstitution ? <td data-label="Institute"><small>{data.hscInstitution}</small></td> : ""}
                {data.hscDegree ? <td data-label="Degree"><small>Verified</small></td> : ""}
            </tr>:<tr></tr>
            }
             {
              data ? 
              <tr>
                {data.graduationDegree ? <td data-label="Degree"><small>Graduation</small></td> : ""}
                {data.graduationDegree ? <td data-label="Subject (Major)"><small>{data.graduationDegree}</small></td> : ""}
                {data.graduationPassingYear ? <td data-label="Passing Year"><small>{data.graduationPassingYear}</small></td> : ""}
                {data.graduationInstitution ? <td data-label="Institute"><small>{data.graduationInstitution}</small></td> : ""}
                {data.graduationDegree ? <td data-label="Degree"><small>Verified</small></td> : ""}
            </tr>:<tr></tr>
            }
            {
              data ? 
              <tr>
                {data.postGraduationDegree ? <td data-label="Degree"><small>Post-Graduation</small></td> : ""}
                {data.postGraduationDegree ? <td data-label="Subject (Major)"><small>{data.postGraduationDegree}</small></td> : ""}
                {data.postGraduationPassingYear ? <td data-label="Passing Year"><small>{data.postGraduationPassingYear}</small></td> : ""}
                {data.postGraduationInstitution ? <td data-label="Institute"><small>{data.postGraduationInstitution}</small></td> : ""}
                {data.postGraduationDegree ? <td data-label="Degree"><small>Verified</small></td> : ""}
            </tr>:<tr></tr>
            }
            {
              data ? 
              <tr>
                {data.doctorateDegree ? <td data-label="Degree"><small>Doctorate</small></td> : ""}
                {data.doctorateDegree ? <td data-label="Subject (Major)"><small>{data.doctorateDegree}</small></td> : ""}
                {data.doctoratePassingYear ? <td data-label="Passing Year"><small>{data.doctoratePassingYear}</small></td> : ""}
                {data.doctorateInstitution ? <td data-label="Institute"><small>{data.doctorateInstitution}</small></td> : ""}
                {data.doctorateDegree ? <td data-label="Degree"><small>Verified</small></td> : ""}
            </tr>:<tr></tr>
            }
        </tbody>
      </table>
    </div>
  );
};

export default Qualifications;
