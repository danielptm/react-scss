import React, {Component} from 'react';
import styles from './City.scss';
import MainImage from '../containers/MainImage/MainImage';
import Header from '../../ui/containers/Header/Header';

import image1 from "../../../assets/daniel.png";
import image2 from "../../../assets/me.jpg";

class City extends Component {
  
  render() {
    return(
      <div className={styles.container}>
        <Header/>
        <MainImage />
      </div>
    )
  }
}

export default City;
