import React from 'react';
import Appointment from './Appointment'

const AppointmentsList = ({appointments}) => (
        <div className="card mt-2 py-5">
            <div className="card-body">
                <h2 className="card-title text-center"> Admin list appointments here</h2>
                <div className="lista-citas">
                    {appointments.map(appointment => (
                        <Appointment
                        key={appointment.id}
                        appointment={appointment} />
                    ))}
                </div>
            </div>
        </div>
)

export default AppointmentsList;

