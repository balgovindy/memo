import React from 'react';
import './../style/style.css';

const TitleField = (props) => {
    return (
        <div>
            <div className="form-group input-form-group">
                <input
                    onChange={props.handleOnChange}
                    type={props.type}
                    name={props.name}
                    placeholder={props.placeholder}
                    className={props.className}
                    autoComplete="off"
                    value={props.value}
                />
            </div>
        </div>
    )
}

export default TitleField;