import React from "react";
import "./pinform.scss";
import Navinform from "../../components/navinform/Navinform";
import Coreinform from "../../components/coreinform/Coreinform";
import Personinfotable from "../personinfo/Personinfotable";
import {Routes, Route} from "react-router-dom";
import Results_m from "../results_m/Results_m";
import ExamSchedule from "../examschedule/ExamSchedule";
import Graduate from "../graduate/Graduate";

const P_information = () => {
    return (
        <>
            {/*<Coreinform/>*/}
            <Routes>
                <Route path='/' element={<Navinform/>}>
                    <Route index  element={<Personinfotable/>}/>
                    <Route path='results' element={<Results_m/>}/>
                    <Route path='exam-schedule' element={<ExamSchedule/>}/>
                    <Route path='graduate' element={<Graduate/>}/>
                </Route>
            </Routes>

        </>
    );
};

export default P_information;
