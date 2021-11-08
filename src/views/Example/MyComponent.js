import React from "react";
import AddComponent from "./AddComponent";
import ChildComponent from "./ChildComponent";
class MyComponent extends React.Component {
    state = {
        arrayJobs: [
            { id: 'id1', title: 'Developer', salary: '500' },
            { id: 'id2', title: 'Tester', salary: '400' },
            { id: 'id3', title: 'Project manager', salary: '1000' }
        ]
    }
    addNewJob = (job) => {
        this.setState({
            arrayJobs: [...this.state.arrayJobs, job]
        })
    }
    deleteAJob = (job) => {
        let currentJobs = this.state.arrayJobs
        currentJobs = currentJobs.filter(item => item.id !== job.id)
        this.setState({
            arrayJobs: currentJobs
        })
    }
    render() {
        return (
            <>
                <AddComponent
                    addNewJob={this.addNewJob} />

                <ChildComponent
                    arrayJobs={this.state.arrayJobs}
                    deleteAJob={this.deleteAJob}
                />
            </>
        )
    }
}
export default MyComponent;