import React from 'react';

const Notification = ({notificationState}) => {
    const notificationStyle = {
        background: 'lightgrey',
        fontSize: '20px',
        borderStyle: 'solid',
        borderRadius: '5px',
        padding: '10px',
        marginBottom: '10px'
    }

    if (notificationState === null) {
        return null
    }
    if (notificationState.message === null || notificationState.message === undefined) {
        return null
    }
    
    return (
        <div style={notificationStyle} className={notificationState.type}>
            {notificationState.message}
        </div>
    )
}
 
export default Notification;
