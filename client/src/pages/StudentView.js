import React, { Component } from "react";
import StudentPay from "../Components/StudentPay";
import Header from "../Components/Header";
import StudentScheduler from "../Components/StudentScheduler";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Calendar from '../Components/Calendar';
import CalendarModal from '../Components/CalendarModal';

class StudentView extends Component {
    state= {
        //TODO write function to pull data for adjusting state
        name: "Student Name",
        tuitionOwed: 200,
        courseName: "Music 101", 
        monthlyFee: 100,
        date: "October 28, 2019",
        time: "3:00pm-4:00pm",
        teacherName: "Adam Anderson"
      };

    render() {
        return (
            
            <div>
            <Header name={this.state.name}/>
            <Container>
                <Row>
                    <Col>
                    <StudentScheduler teacherName={this.state.teacherName} courseName={this.state.courseName} monthlyFee={this.state.monthlyFee} />
                    <CalendarModal sessionPartner={this.state.teacherName} courseName={this.state.courseName}date={this.state.date} time={this.state.time}/>

                    </Col>
                    <Col>
                    <StudentPay tuitionOwed={this.state.tuitionOwed}/>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Calendar></Calendar>
                </Row>
            </Container>


            </div>
        )
    }
}

export default StudentView;