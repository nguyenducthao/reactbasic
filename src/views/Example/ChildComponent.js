import React from "react";
class ChildComponent extends React.Component {
    state = {
        showJobs: false
    }
    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }
    handleOnClickDeleteJob = (job) => {
        this.props.deleteAJob(job)
    }
    render() {
        // let { name, age, arrayJobs } = this.props;
        let { arrayJobs } = this.props;
        let { showJobs } = this.state;
        return (
            <>
                {/* <div>Child component name: {name}, age: {age}</div> */}
                {!showJobs ?
                    <div><button onClick={() => this.handleShowHide()}>Show jobs list</button></div>
                    :
                    <>
                        <div className='arrayJobs'>
                            {
                                arrayJobs.map((item) => {
                                    return (
                                        <div key={item.id}>
                                            {item.id} - {item.title} - {item.salary} &nbsp;
                                            <span onClick={() => this.handleOnClickDeleteJob(item)}>x</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div><button onClick={() => this.handleShowHide()}>Hide jobs list</button></div>
                    </>
                }
            </>

        )
    }
}
export default ChildComponent;