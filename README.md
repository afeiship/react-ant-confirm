# react-ant-confirm
> Popconfirm quick wrapper.

## installation
```shell
npm install -S @feizheng/react-ant-confirm
```

## update
```shell
npm update @feizheng/react-ant-confirm
```

## properties
| Name       | Type   | Default              | Description                           |
| ---------- | ------ | -------------------- | ------------------------------------- |
| className  | string | -                    | The extended className for component. |
| title      | string | '确认执行这个操作？' | PopopConfirm title.                   |
| type       | enum   | 'link'               | Button/link style.                    |
| childProps | object | {}                   | The children props.                   |


## usage
1. import css
  ```scss
  @import "~@feizheng/react-ant-confirm/dist/style.scss";

  // customize your styles:
  $react-ant-confirm-options: ()
  ```
2. import js
  ```js
  import ReactAntConfirm from '@feizheng/react-ant-confirm';
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

  ```

## documentation
- https://afeiship.github.io/react-ant-confirm/
