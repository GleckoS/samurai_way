import React, {Component} from "react";

export default class ProfileStatus extends Component {
    state = {
        editMode: false,
        status: this.props.profileStatus
    }
    activateEditMode = () => {
        this.setState({
            editMode:true
        })
    }
    disableEditMode = () => {
        this.setState({
            editMode:false,
        })
        this.props.updateProfileStatusThunkCreator(this.state.status)
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return (
            <div>{this.state.editMode
                ? <div>
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.disableEditMode} value={this.state.status}/>
                </div>
                : <div>
                    <span onClick={this.activateEditMode}>{this.props.profileStatus ? this.props.profileStatus : "Введите статус"}</span>
                </div>
            }
            </div>
        )
    }
}