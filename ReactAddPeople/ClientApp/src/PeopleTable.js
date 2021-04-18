import React from 'react';
import PeopleForm from './PeopleForm';
import PeopleRow from './PeopleRow';


class PeopleTable extends React.Component {
    state = {
        people: [],
        person: {
            firstName: "",
            lastName: "",
            age:""
        }
    };

    onAddClick = () => {
        let { person, people } = this.state;        
        people = [...people, person];
        this.setState({ people, person: { firstName: "", lastName: "", age: "" } });
    };

    firstNameChange = e => {
        let person = this.state.person;
        person.firstName = e.target.value
        this.setState({ person });
    };

    lastNameChange = e => {
        let person = this.state.person;
        person.lastName = e.target.value
        this.setState({ person });
    };

    ageChange = e => {
        let person = this.state.person;
        person.age = e.target.value
        this.setState({ person });
    };

    onClearClick = () => {
        this.setState({ people: [] });
    };

    render() {
        return (
            <div className="container">
                <PeopleForm
                    onAddClick={this.onAddClick}
                    onClearClick={this.onClearClick}
                    firstNameChange={this.firstNameChange}
                    lastNameChange={this.lastNameChange}
                    ageChange={this.ageChange}
                    person={this.state.person}
                />
                {this.state.people.length !== 0 ? 
                    <table className="table table-hover table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Age</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.people.map(p => {
                                return (
                                    < PeopleRow
                                        person={p}
                                    />)
                            })}
                        </tbody>
                    </table>: < h2> No people - be the first to add!</h2 >} ;                            
            </div>
        )
    }
}
export default PeopleTable;
