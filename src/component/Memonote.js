import React from 'react';
import './../style/style.css'
const MemoNote = (props) => {
    return (
        <div className="memoWrapper">
            <span className="titletext">{props.title}</span>
            <div>
                <span className="memodate">{props.time}</span>
                <button
                    className="memodetail memobutton"
                    id={props.id}
                    onClick={props.handleMemoStatus}
                    value={props.display == 'none' ? 'Show' : 'Hide'}
                >
                    {props.display == 'none' ? 'Show' : 'Hide'}
                </button>
                <button
                    className="memoremove memobutton"
                    id={props.id}
                    onClick={props.handleMemo}
                >
                    Remove
                </button>
            </div>
            <div style={{ display: props.display }}>
                <div className="titleLine"></div>
                <div className="detailText">
                    {props.detail}
                </div>
            </div>
        </div>
    )
}

export default MemoNote;
