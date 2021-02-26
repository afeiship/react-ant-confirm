import ReactDemokit from '@jswork/react-demokit';
import React from 'react';
import ReactDOM from 'react-dom';
import { message, Popconfirm } from 'antd';
import ReactAntConfirm from '../src/main';

import './assets/style.scss';

class App extends React.Component {
  handleClick = () => {
    message.success('你执行了 confirm 操作~');
  };

  render() {
    return (
      <ReactDemokit
        className="p-3 app-container"
        url="https://github.com/afeiship/react-ant-confirm">
        <div className="is-actions">
          <ReactAntConfirm onClick={this.handleClick}>删除</ReactAntConfirm>
          <ReactAntConfirm type="button" onClick={this.handleClick}>
            取消
          </ReactAntConfirm>

          <Popconfirm title="你请确认你的操作" onConfirm={this.handleClick}>
            <button className="button is-primary">
              完全自定义直接用antd原生的
            </button>
          </Popconfirm>
        </div>
      </ReactDemokit>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
