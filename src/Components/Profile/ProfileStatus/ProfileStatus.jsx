import React, {Component} from "react";

export default class ProfileStatus extends Component {
    state = {
        editMode: false
    }
    activateEditMode = () => {
        this.setState({
            editMode:true
        })
    }
    disableEditMode = () => {
        this.setState({
            editMode:false
        })
    }

    render() {
        return (
            <div>{this.state.editMode
                ? <div>
                    <input autoFocus={true} onBlur={this.disableEditMode} value={this.props.aboutMe}/>
                </div>
                : <div>
                    <span onClick={this.activateEditMode}>{this.props.aboutMe}</span>
                </div>
            }
            </div>
        )
    }
}