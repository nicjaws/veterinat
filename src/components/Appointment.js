import React from 'react'


const Appointment = ({appointment, eraseAppointment}) => (
    <div className="media mt-3">
        <div className="media-body">
            <h3 className="mt-0">{appointment.pet}</h3>
            <p className="card-text"><span>Owner´s name: </span>{appointment.owner}</p>
            <p className="card-text"><span>Date: </span>{appointment.date}</p>
            <p className="card-text"><span>Hour: </span>{appointment.hour}</p>
            <p className="card-text"><span>Symptoms: </span></p>
            <p className="card-text">{appointment.symptoms}</p>
            <button
            className="btn btn-danger"
            onClick={() => eraseAppointment(appointment.id)}
            >
                Borrar &times;
            </button>
        </div>
    </div>
);
 
export default Appointment;