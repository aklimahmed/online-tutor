import React from 'react'
import BasicInfo from '../../components/TutorsProfile/BasicInfo'
import SubJectTeaches from '../../components/TutorsProfile/SubJectTeaches';
import TeachesAndFees from '../../components/TutorsProfile/TeachesAndFees';
import WeeklyTime from '../../components/TutorsProfile/WeeklyTime';

const TutorsProfile = () => {
    return (
        <div>
            <BasicInfo />
            <WeeklyTime/>
            <SubJectTeaches/>
            <TeachesAndFees/>
        </div>
    )
}

export default TutorsProfile
