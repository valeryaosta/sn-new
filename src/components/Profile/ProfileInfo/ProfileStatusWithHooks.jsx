import React, {useEffect, useState} from 'react';
import style from '../Profile.module.css'

const ProfileStatusWithHooks = (props) => {

    const [status, setStatus] = useState(props.status)
    const [editMode, setEditMode] = useState(false)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <>
            {!editMode &&
            <div className={style.content}>
                <span onDoubleClick={activateEditMode}><b>Status:</b> {props.status}</span>
            </div>
            }
            {editMode &&
            <div className={style.content}>
                <input className={style.input} autoFocus onBlur={deactivateEditMode}
                       value={status} onChange={onStatusChange}
                />
            </div>
            }
        </>
    );

}

export default ProfileStatusWithHooks;