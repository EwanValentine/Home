import styles from './_Body.scss';
import React from 'react';
import Menu from '../Menu/Menu';

let { PropTypes } = React;

export default class Body extends React.Component {

  static defaultProps = {
    items: []
  };

  static propTypes = {
    items: PropTypes.array.isRequired
  };

  render() {
    return (
      <div className={styles.body}>
        <h1 className={styles.header}>Home Dashboard</h1>
        <Menu items={this.props.items} />
        
        <h2>Who's in?</h2>

        <ul>
          <li>Ewan</li>
        </ul>
        
      </div>
    );
  }
}
