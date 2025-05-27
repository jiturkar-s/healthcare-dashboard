import React, { useState } from 'react';
import humanBody from "../assets/icons/human-body.jpg";
import "../styles/dashboard.css";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Calemdar from "react-calendar";
import CustomCalendar from './CustomCalendar';

const activityData = [
  { name: 'Mon', activity: 3 },
  { name: 'Tue', activity: 6 },
  { name: 'Wed', activity: 4 },
  { name: 'Thu', activity: 5 },
  { name: 'Fri', activity: 2 },
  { name: 'Sat', activity: 7 },
  { name: 'Sun', activity: 4 },
]

export default function Dashboard() {
  const [date, setDate] = useState(new Date());
  return (
    // <div className='dashboard-container'>
    //   <h2 className='dashboard-title'>Dashboard</h2>
    //   <div className='dashboard-main'>
    //     {/* Left column */}
    //     <div className='body-status'>
    //       <div className='body-visuals'>
    //         <img src={humanBody} alt='Human-Body' className="human-body"/>
    //         <span className='heart-badge'>Healthy Heart</span>
    //         <span className='leg-badge'>Healthy Leg</span>
    //       </div>
    //       <div className='status-section'>
    //         <div className='lungs-status-card'>
    //           Lungs
    //         </div>
    //         <div className='teeth-status-card'>
    //           Teeth
    //         </div>
    //         <div className='bone-status-card'>
    //           Bone
    //         </div>
    //       </div>
    //     </div>

    //     {/* Right Column */}
    //     <div className='schedule-section'>
    //       <div className='calendar-box'>
    //         {/* week calendar mockup */}
    //         <div className='calendar-header'>October 2021</div>
    //         <div className='calendar-days'>
    //           {/* Render Days like Monday, Tuesday.... */}
    //         </div>
    //         <div className='appointments'>
    //           <div className='dentist-appointment'> Dentist </div>
    //           <div className='physiotherapy-appointment'> Physiotherapy </div>
    //         </div>
    //       </div>

    //       <div className='upcoming-schedule'>
    //         <h4>The Upcoming Schedule</h4>
    //         <div className='schedule-cards'>
    //           <div className='schedule-card'>Health Checkup</div>
    //           <div className='schedule-card'>Opthalmologist</div>
    //           <div className='schedule-card'>Cardiologist</div>
    //           <div className='schedule-card'>Neurologist</div>
    //         </div>
    //       </div>
    //     </div>

    //     {/* Acitivity Graph */}
    //     <div className='activity-graph'>
    //       <h4>Actitvity</h4>
    //       {/* Mockup or use bar style divs */}
    //     </div>
    //   </div>
    // </div>
    <>
      <h2 className='dashboard-title'>Dashboard</h2>
      <div className='dashboard-container'>

        <div className='left-section'>
          <div className="dashboard-center">
            <div className="body-image">
              <img src={humanBody} alt='Human Body' className='body-img' />
            </div>
            <div className="body-categories">
              <div className="card">
                <span role='img' aria-label='lungs'>🫁</span>
                <p>Lungs</p></div>
              <div className="card">
                <span role='img' aria-label='teeth'>🦷</span>
                <p>Teeth</p>
              </div>
              <div className="card">
                <span role='img' aria-label='bone'>🦴</span>
              <p>Bone</p>
              </div>
            </div>
          </div>

          <div className='activity-graph'>
            <h3>Acitivity</h3>
            <div className='chart-wrapper'>
              <ResponsiveContainer width="80%" height={160}>
                <BarChart data={activityData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="activity" fill='#4e79a7' radius={[3, 3, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className='right-section'>
          <div className='calendar-box'>
            <h3>Calendar</h3>
            {/* <Calemdar onChange={setDate} value={date}/> */}
            <CustomCalendar />
          </div>
          <div className='calendar-schedule'>
            <h3>Appointments</h3>
            <div className='schedule-card'>🦷 Dentist : 9.00-11.30</div>
            <div className='schedule-card'>🧘 Physiotherapy - 11.00-12.00</div>
          </div>

          <div className='upcoming-schedule'>
            <div className='schedule-card'>🩺 Health Checkup - Thursday - 11.00am</div>
            <div className='schedule-card'>🧠 Neurologist - Saturday - 16.00pm</div>
          </div>
        </div>
      </div>
    </>
  )
}
