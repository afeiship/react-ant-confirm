# react-ant-confirm
> Popconfirm quick wrapper.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-ant-confirm
```

## properties
| Name       | Type   | Required | Default              | Description                           |
| ---------- | ------ | -------- | -------------------- | ------------------------------------- |
| className  | string | false    | -                    | The extended className for component. |
| title      | string | false    | '确认执行这个操作？' | PopopConfirm title.                   |
| type       | enum   | false    | 'link'               | Button/link style.                    |
| childProps | object | false    | {}                   | The children props.                   |


## usage
1. import css
  ```scss
  @import "~@jswork/react-ant-confirm/dist/style.css";

  // or use sass
  @import "~@jswork/react-ant-confirm/dist/style.scss";

  // customize your styles:
  $react-ant-confirm-options: ()
  ```
2. import js
  ```js
  import ReactDemokit from '@jswork/react-demokit';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import { message, Popconfirm } from 'antd';
  import ReactAntConfirm from '@jswork/react-ant-confirm';

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

  ```

## documentation
- https://afeiship.github.io/react-ant-confirm/


## license
Code released under [the MIT license](https://github.com/afeiship/react-ant-confirm/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-ant-confirm
[version-url]: https://npmjs.org/package/@jswork/react-ant-confirm

[license-image]: https://img.shields.io/npm/l/@jswork/react-ant-confirm
[license-url]: https://github.com/afeiship/react-ant-confirm/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-ant-confirm
[size-url]: https://github.com/afeiship/react-ant-confirm/blob/master/dist/react-ant-confirm.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-ant-confirm
[download-url]: https://www.npmjs.com/package/@jswork/react-ant-confirm
