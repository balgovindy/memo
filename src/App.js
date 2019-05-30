import React, { Component } from 'react';
import Header from './component/Header';
import TitleField from './component/TitleField';
import DetailField from './component/DetailField';
import Submit from './component/Submit';
import Memo from './component/Memo';
import './style/style.css';

class App extends Component {
  state = {
    isDisabled: true,
    title: '',
    detail: '',
    time: ''
  }

 
  handleOnChange = (e) => {
    switch (e.target.getAttribute('name')) {
      case 'title':
        this.setState({
          ...this.state,
          title: e.target.value
        }, this.enableSubmit);
        break;
      case 'detail':
        this.setState({
          ...this.state,
          detail: e.target.value
        });
        break;
      default:
        break;
    }

  }

  enableSubmit = () => {
    this.setState({
      ...this.state,
      isDisabled: !this.state.title.length > 0
    })
  }

  handleOnClick = (e) => {
    this.setState({
      ...this.state,
      isDisabled: true,
      time: new Date().toLocaleString()
    }, this.addLocalStorageData);
  }

  addLocalStorageData() {
    let memoData = JSON.parse(localStorage.getItem('allData'));
    if (!memoData) memoData = [];
    memoData.push({
      title: this.state.title,
      detail: this.state.detail ? this.state.detail : 'No Detail',
      time: this.state.time
    })
    localStorage.setItem('allData', JSON.stringify(memoData));
    this.setState({
      title: '',
      detail: ''
    });
  }

  render() {
    return (
      <div>
        <Header />
        <TitleField
          handleOnChange={this.handleOnChange}
          type="text"
          name="title"
          placeholder="Note Title"
          className="form-control titleInput"
          value={this.state.title}
        />

        <DetailField
          handleOnChange={this.handleOnChange}
          className="form-control"
          name="detail"
          row="3"
          placeholder="Note Details"
          value={this.state.detail}
        />

        <Submit
          text="Add Note"
          disabled={this.state.isDisabled}
          handleOnClick={this.handleOnClick}
        />
        <div id="line"></div>

        <Memo />
      </div>
    );
  }
}


export default App;
