//import { extend } from 'jquery';
import React from 'react';

class PeopleForm extends React.Component {
    render() {
        
        return (
            <div className="jumbotron row">
                <div className="col-md-3">
                    <input type="text" placeholder="First Name" className="form-control" value={this.props.person.firstName} onChange={this.props.firstNameChange} />
                </div>
                <div className="col-md-3">
                    <input type="text" className="form-control" placeholder="Last Name" value={this.props.person.lastName} onChange={this.props.lastNameChange} />
                </div>
                <div className="col-md-3">
                    <input type="text" className="form-control" placeholder="Age" value={this.props.person.age} onChange={this.props.ageChange} />
                </div>
                <div className="col-md-1">
                    <button className="btn btn-success" onClick={this.props.onAddClick}>Add!</button>
                </div>
                <div className="col-md-2">
                    <button className="btn btn-danger" onClick={this.props.onClearClick} > Clear Table</button>
                </div>
            </div>
            )
    }
}
export default PeopleForm;