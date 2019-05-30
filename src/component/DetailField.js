import React from 'react';

const DetailField = (props) => {
    return (
        <div>
            <div className="form-group text-form-group">
                <textarea
                    onChange={props.handleOnChange}
                    className={props.className}
                    rows={props.row}
                    name={props.name}
                    placeholder={props.placeholder}
                    value={props.value}
                ></textarea>
            </div>
        </div>
    )
}

export default DetailField;
