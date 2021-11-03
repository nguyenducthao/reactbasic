import React from "react";
class AddComponent extends React.Component {
    state = {
        titleJob: '',
        salary: '',
    }
    handleChangeTitleJob = (event) => {
        this.setState({
            titleJob: event.target.value
        })
    }
    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log('check input data: ', this.state)
    }
    render() {
        return (
            <>
                <form>
                    <label htmlFor="fname">First name:</label>
                    <br />
                    <input
                        type="text"
                        value={this.state.titleJob}
                        onChange={(event) => this.handleChangeTitleJob(event)}
                    />
                    <br />
                    <label htmlFor="lname">Last name:</label>
                    <br />
                    <input
                        type="text"
                        value={this.state.salary}
                        onChange={(event) => this.handleChangeSalary(event)}
                    />
                    <br />
                    <br />
                    <input
                        type="submit"
                        value="Submit"
                        onClick={(event) => this.handleSubmit(event)} />
                </form>
            </>
        )
    }
}
export default AddComponent;