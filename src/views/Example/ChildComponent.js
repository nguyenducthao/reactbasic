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
                                        <div key={item.id}>{item.id} - {item.title} - {item.salary}</div>
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