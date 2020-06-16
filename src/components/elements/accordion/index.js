import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import themes from '@utils/themes';

import './style.less';

class Accordion extends Component {
  static propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
    title: PropTypes.node,
    theme: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    disabled: PropTypes.bool,
  };

  static defaultProps = {
    disabled: false,
    theme: 'default',
  };

  state = {
    isOpen: true,
  };

  handleClick = () => {
    const { isOpen } = this.state;
    const { disabled } = this.props;

    this.setState({
      isOpen: disabled ? isOpen : !isOpen,
    });
  };

  render() {
    const { isOpen } = this.state;
    const { theme, title, children, disabled } = this.props;

    return (
      <div
        className={cn(`Accordion`, themes('Accordion', theme))}
        onClick={this.onClick}
        disabled={disabled}
      >
        <div
          className={cn('Accordion__header', themes('Accordion__header', theme))}
          onClick={this.handleClick}
        >
          <div className={'Accordion__title'}>{title}</div>
        </div>

        <div className={cn('Accordion__collapse', { Accordion__collapse_open: isOpen })}>
          <div className={'Accordion__body'}>{children}</div>
        </div>
      </div>
    );
  }
}

export default Accordion;
