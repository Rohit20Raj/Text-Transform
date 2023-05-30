import React from 'react'

export default function (props) {
    const toUpperCase = (text) => {
        let newText = text.toUpperCase();
        return newText;
    }
    return (props.alert &&
        <div>
            <div className={`alert alert-${props.alert.type} mb-1`}role="alert">
                {props.alert.msg}
            </div>
        </div>
    )
}
