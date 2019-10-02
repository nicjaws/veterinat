import React, { Component } from 'react';
import './bootstrap.min.css';
import Header from './components/Header';
import NuevaCita from './components/NuevaCita';
import AppointmentsList from './components/ListaCitas'; 


class App extends Component {
  state = { 
    appointments: []
   }

   createNewAppointment = datas => {
     // copiar el state actual
      const appointments = [...this.state.appointments, datas]
     // agregar el nuevo state
     this.setState({
       appointments 
      })
   }
  render() { 
    return ( 
      <div className="container">
        <Header 
        titulo='Administrator Veterinary Patients' />
        <div className="row">
          <div className="col-md-10 mx-auto">
            <NuevaCita 
              createNewAppointment={this.createNewAppointment}
            />
          </div>
          <div className="mt-5 col-md-10 mx-auto">
            <AppointmentsList appointments={this.state.appointments} /> 
          </div>
        </div>
      </div>
     );
  }
}
 

export default App;
