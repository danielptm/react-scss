import React, {Component} from 'react';
import styles from './City.scss';
import Image from '../Image/Image';

class City extends Component {
  render() {
    return(
      <div className={styles.container}>
        <Image />
      </div>
    )
  }
}

export default City;
