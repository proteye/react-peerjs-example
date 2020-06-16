import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.less';

class Error extends Component {
  static propTypes = {
    path: PropTypes.string,
    errors: PropTypes.any,
  };

  renderItems() {
    const { path, errors } = this.props;

    if (!errors && !(errors instanceof Array) && !(errors instanceof Object)) {
      return null;
    }
    const errorItems = errors instanceof Array ? errors : [errors];
    const items = [];

    errorItems.map(item => {
      if (!item || !item.message) {
        return;
      }

      if (
        (item.path && item.path.indexOf(path) === 0 && path.length > 0) ||
        (item.path.length === 0 && path.length === 0) ||
        (!item.path && !path)
      ) {
        items.push(
          <div key={item.code} className="Error__item">
            {item.message}
          </div>,
        );
      }
    });
    return items;
  }

  render() {
    return <div className="Error">{React.Children.toArray(this.renderItems())}</div>;
  }
}

export default Error;
