import React from 'react';

const Submit = (props) => {
    return (
        <div className="text-center">
            <button
                type="button"
                className="btn btn-primary btn-lg"
                disabled={props.disabled}
                onClick={props.handleOnClick}
            >
                {props.text}
            </button>
        </div>

    )
}

export default Submit