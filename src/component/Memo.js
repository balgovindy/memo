import React, { Component } from 'react';
import Memonote from './Memonote';

class Memo extends Component {
    constructor() {
        super();
        this.state = {
            currentOpenstate: ''
        }
    }
    handleMemoStatus = (e) => {
        const currentBlock = e.target.getAttribute('id').split('_')[1];
        switch (e.target.getAttribute('value')) {
            case 'Show':
                this.setState({
                    currentOpenstate: currentBlock
                })
                break;

            case 'Hide':
                this.setState({
                    currentOpenstate: ''
                })
                break;

            default:
                break;
        }
    }

    handleMemo = (e) => {
        const currentBlock = e.target.getAttribute('id').split('_')[1];
        let storageData = JSON.parse(localStorage.getItem('allData'));
        storageData.splice(currentBlock, 1);
        localStorage.setItem('allData', JSON.stringify(storageData));
        this.setState({
            ...this.state
        })
    }

    render() {
        const memoData = JSON.parse(localStorage.getItem('allData')) ?
            JSON.parse(localStorage.getItem('allData')).map((obj, i) => {
                return <Memonote
                    key={i}
                    id={`memo_${i}`}
                    title={obj.title}
                    detail={obj.detail}
                    time={obj.time}
                    handleMemoStatus={this.handleMemoStatus}
                    handleMemo={this.handleMemo}
                    display={this.state.currentOpenstate && this.state.currentOpenstate == i ? 'block' : 'none'}
                />
            }) : null
        return (
            <div>{memoData}</div>
        )
    }
}

export default Memo;