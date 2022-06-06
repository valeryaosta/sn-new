import React from 'react';
import style from '../Profile.module.css'

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return (
            <>
                {!this.state.editMode &&
                <div className={style.content}>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                </div>
                }
                {this.state.editMode &&
                <div className={style.content}>
                    <input className={style.input} autoFocus onBlur={this.deactivateEditMode}
                           value={this.state.status} onChange={this.onStatusChange}
                    />
                </div>
                }

            </>
        );
    }

}

export default ProfileStatus;