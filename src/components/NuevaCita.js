import React, {Component} from 'react';

class NuevaCita extends Component {
    state = { 
        appointment : {
            pet: '',
            owner: '',
            date: '',
            hour: '',
            symptoms: ''
        },
        error: false
     }
        // Cuando el usuario escribe en los inputs
     handleChange = (e) => {
         //colocar lo que el usuario escribe en el state
         this.setState({
             appointment: {
                 ...this.setState.appointment,
                 [e.target.name] : e.target.value
             }
         })
     }

     // cuando el usuario envia el formulario
     handleSubmit = e => {
         e.preventDefault(); 

         // extraer los valores del state
        const { pet, owner, date, hour, symptoms } = this.state.appointment; 
         // validar que todos los campos esten llenos
         if (pet === '' || owner === '' || date === '' || hour === '' || symptoms === '' ) {
            this.setState({
                error: true
            });
            //detener la ejecucion
            return;
         }
         console.log('despues del if');

         // agregar la cita al state de la app
     }
    render() { 
        return (
        <div className="card mt-5 py-5">
            <div className="card-body">
                <h2 className="card-title text-center mb-5">
                    Fill up the formular to create a new appointment
                </h2>

                <form onSubmit={this.handleSubmit}>
                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Pet´s name</label>
                        <div className="col-sm-8 col-lg-10">
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="Pet´s name"
                                name="pet"
                                onChange={this.handleChange}
                                value={this.state.appointment.pet}
                            />
                        </div>
                    </div> {/* form-group */}

                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Owner´s name</label>
                        <div className="col-sm-8 col-lg-10">
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="Owner´s name"
                                name="owner"
                                onChange={this.handleChange}
                                value={this.state.appointment.owner}
                            />
                        </div>
                    </div> {/* form-group */}

                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Date</label>
                        <div className="col-sm-8 col-lg-4">
                            <input 
                                type="date"
                                className="form-control"
                                name="date"
                                onChange={this.handleChange}
                                value={this.state.appointment.date}
                            />
                        </div>
                        <label className="col-sm-4 col-lg-2 col-form-label">Hour</label>
                        <div className="col-sm-8 col-lg-4">
                            <input 
                                type="time"
                                className="form-control"
                                name="hour"
                                onChange={this.handleChange}
                                value={this.state.appointment.hour}
                            />
                        </div>
                    </div> {/* form-group */}

                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Symptoms</label>
                        <div className="col-sm-8 col-lg-10">
                            <textarea
                                className="form-control"
                                name="symptoms"
                                placeholder="Describe the symptoms"
                                onChange={this.handleChange}
                                value={this.state.appointment.symptoms}
                            >
                            </textarea>
                        </div>
                    </div> {/* form-group */}

                    <input type="submit" className="py-3 mt-2 btn btn-success btn-block" value="add new appointment" />
                </form>
            </div>
        </div>  
        );
    }
}
 
export default NuevaCita;