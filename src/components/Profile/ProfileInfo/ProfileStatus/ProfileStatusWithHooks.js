import React, {useState} from 'react';

export const ProfileStatusWithHooks = (props) => {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    const activateMode = () => {
        setEditMode(true)
    }
    const deactivateMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
            <div>
                <span onDoubleClick={activateMode}>{status || "----"}</span>
            </div>}

            {editMode &&
            <div>
                <input onChange={onStatusChange} onBlur={deactivateMode} autoFocus
                       value={status}/>
            </div>}
        </div>
    );
}

