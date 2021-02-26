import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Popconfirm, Button, message } from 'antd';

const CLASS_NAME = 'react-ant-confirm';

export default class ReactAntConfirm extends Component {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    /**
     * The extended className for component.
     */
    className: PropTypes.string,
    /**
     * PopopConfirm title.
     */
    title: PropTypes.string,
    /**
     * Button/link style.
     */
    type: PropTypes.oneOf(['link', 'button']),
    /**
     * The children props.
     */
    childProps: PropTypes.object
  };

  static defaultProps = {
    title: '确认执行这个操作？',
    type: 'link',
    childProps: {}
  };

  handleCancel = () => {
    message.info('您取消了操作');
  };

  render() {
    const {
      className,
      onClick,
      type,
      children,
      childProps,
      ...props
    } = this.props;
    return (
      <Popconfirm
        onConfirm={onClick}
        onCancel={this.handleCancel}
        className={classNames(CLASS_NAME, className)}
        {...props}>
        {type === 'link' && <a {...childProps}>{children}</a>}
        {type === 'button' && (
          <Button size="small" {...childProps}>
            {children}
          </Button>
        )}
      </Popconfirm>
    );
  }
}
