import React, {Component} from 'react';

class NuevaCita extends Component {
    state = {  }
    render() { 
        return (
        <div className="car mt-5 py-5">
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
                                name="pet"
                            />
                        </div>
                    </div> {/* form-group */}
                </form>
            </div>
        </div>  
        );
    }
}
 
export default NuevaCita;