import React, {Component} from 'react';
import styles from './Image.scss';

class Image extends Component {
  render() {
    return (
      <div>
        <img className={styles.image} src={require("../../../assets/daniel.png")} />
      </div>
    );
  }
}

export default Image;