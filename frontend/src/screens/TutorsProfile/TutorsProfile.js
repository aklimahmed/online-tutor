import React from 'react'
import BasicInfo from '../../components/TutorsProfile/BasicInfo'
import WeeklyTime from '../../components/TutorsProfile/WeeklyTime';
import AcademicQualification from '../../components/TutorsProfile/AcademicQualification'

const TutorsProfile = () => {
    return (
        <div>
            <BasicInfo />
            <AcademicQualification />
            <WeeklyTime/>
        </div>
    )
}

export default TutorsProfile
