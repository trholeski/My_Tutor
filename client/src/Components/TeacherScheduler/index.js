import React from "react";
// import logo from './images/logo-placeholder.png';
import Calendar from '../Calendar'
import Card from 'react-bootstrap/Card';
import RegistrInvite from "../RegistrInvite";
import EditStudent from "../EditStudent";

function TeacherScheduler(props) {
    console.log(props)
    return (
        <div>
            <div className="row mb-5">
                {/* <div className="col-md">
                    <Card>
                        <Card.Body>
                        <p className="font-weight-bold h2">Expected Monthly Income: ${props.monthlyIncome} </p>
                        <p className="font-weight-bold h2">Outstanding Fees: ${props.outstandingFees}</p>

                        <RegistrInvite 
                /> 

                <EditStudent />

                        </Card.Body>
                    </Card>
                    
                </div> */}
                {/* <div className="col-md">
                </div> */}
            </div>
            <div className="row ml-2 mr-2">
                <div className="col-md">
                    <Calendar
                    events= {props.events}
                    />
                </div>
            </div>
        </div>
    )
}

export default TeacherScheduler;