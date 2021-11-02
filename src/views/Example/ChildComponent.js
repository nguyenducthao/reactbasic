import React from "react";
class ChildComponent extends React.Component {
    render() {
        let { name, age, arrayJobs } = this.props;
        return (
            <>
                <div>Child component name: {name}, age: {age}</div>
                <div className='arrayJobs'>
                    {
                        arrayJobs.map((item) => {
                            return (
                                <div key={item.id}>{item.id} - {item.title} - {item.salary}</div>
                            )
                        })
                    }
                </div>
            </>
        )
    }
}
export default ChildComponent;