import React from 'react';


export default function Sidebar() {
  return (
    <aside className='sidebar'>
        <div className='logo'>
            Health<span className='highlight'>Care</span> 
        </div>
        <nav className='nav'>
            <div className='tools-label'>General</div>
            <ul>
                <li className='active'>
                    Dashboard
                </li>
                <li>History</li>
                <li>Calendar</li>
                <li>Appointments</li>
                <li>Statistics</li>
            </ul>
            <div className='tools-label'>Tools</div>
            <ul>
                <li>Chat</li>
                <li>Support</li>
            </ul>
            <div className='setting'>Settings</div>
        </nav>
    </aside>
  )
}
