import React, {Component} from 'react';

class NuevaCita extends Component {
    state = {  }
    render() { 
        return (
        <div className="card mt-5 py-5">
            <div className="card-body">
                <h2 className="card-title text-center mb-5">
                    Fill up the formular to create a new appointment
                </h2>

                <form>
                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Pet´s name</label>
                        <div className="col-sm-8 col-lg-10">
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="Pet´s name"
                                name="owner"
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
                                name="pet"
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
                            />
                        </div>
                        <label className="col-sm-4 col-lg-2 col-form-label">Hour</label>
                        <div className="col-sm-8 col-lg-4">
                            <input 
                                type="time"
                                className="form-control"
                                name="hour"
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
                            >
                            </textarea>
                        </div>
                    </div> {/* form-group */}
                </form>
            </div>
        </div>  
        );
    }
}
 
export default NuevaCita;