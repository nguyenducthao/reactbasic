import React from "react";
import ChildComponent from "./ChildComponent";
class MyComponent extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        arrayJobs: [
            { id: 'id1', title: 'Developer', salary: '500 $' },
            { id: 'id2', title: 'Tester', salary: '400 $' },
            { id: 'id3', title: 'Project manager', salary: '1000 $' }
        ]
    }
    handleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    handleSubmit = (event) => {
        console.log(this.state)
    }
    render() {
        return (
            <>
                <form>
                    <label htmlFor="fname">First name:</label>
                    <br />
                    <input
                        type="text"
                        value={this.state.firstName}
                        onChange={(event) => this.handleChangeFirstName(event)}
                    />
                    <br />
                    <label htmlFor="lname">Last name:</label>
                    <br />
                    <input
                        type="text"
                        value={this.state.lastName}
                        onChange={(event) => this.handleChangeLastName(event)}
                    />
                    <br />
                    <br />
                    <input
                        type="button"
                        value="Submit"
                        onClick={(event) => this.handleSubmit(event)} />
                </form>
                <ChildComponent
                    name={'child one'}
                    age={'25'}
                    arrayJobs={this.state.arrayJobs}
                />
            </>
        )
    }
}
export default MyComponent;