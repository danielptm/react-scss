import React, {Component} from 'react';
import styles from './City.scss';
import MainImage from '../containers/MainImage/MainImage';


class City extends Component {
  
  render() {
    return(
      <div className={styles.container}>
        <MainImage />
      </div>
    )
  }
}

export default City;
