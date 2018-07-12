import React, {Component} from 'react';
import styles from './City.scss';
import Image from '../Image/Image';
import image1 from "../../../assets/daniel.png";
import image2 from "../../../assets/me.jpg";

class City extends Component {
  
  render() {
    return(
      <div className={styles.container}>
        <Image 
            size={"medium"} 
            path={image1} 
            path2={image2}
          />
      </div>
    )
  }
}

export default City;
