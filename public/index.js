import ReactAntConfirm from '../src/main';
import ReactDOM from 'react-dom';
import React from 'react';
import './assets/style.scss';

class App extends React.Component {
  componentDidMount() {}
  handleClick = (e) => {
    console.log('click!');
  };
  render() {
    return (
      <div className="app-container">
        <div className="inner">
          <ReactAntConfirm onClick={this.handleClick}>删除</ReactAntConfirm>
          <ReactAntConfirm type="button" onClick={this.handleClick}>
            取消
          </ReactAntConfirm>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
