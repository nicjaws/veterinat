import React, { Component } from 'react';
import './bootstrap.min.css';
import Header from './components/Header';
import NuevaCita from './components/NuevaCita';

class App extends Component {
  state = { 

   }

   createNewAppointment = datas => {
     console.log(datas)
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
        </div>
      </div>
     );
  }
}
 

export default App;
