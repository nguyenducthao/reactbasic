import React from "react";
import AddComponent from "./AddComponent";
import ChildComponent from "./ChildComponent";
class MyComponent extends React.Component {
    state = {
        arrayJobs: [
            { id: 'id1', title: 'Developer', salary: '500 $' },
            { id: 'id2', title: 'Tester', salary: '400 $' },
            { id: 'id3', title: 'Project manager', salary: '1000 $' }
        ]
    }
    render() {
        return (
            <>
                <AddComponent />

                <ChildComponent
                    arrayJobs={this.state.arrayJobs}
                />
            </>
        )
    }
}
export default MyComponent;