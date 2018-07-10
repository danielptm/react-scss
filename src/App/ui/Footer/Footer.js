import React, {Component} from 'react';
import Image from '../Image/Image';
import styles from './Footer.scss';
import image1 from '../../../assets/fb.png';
import image2 from '../../../assets/gb.png';
import image3 from '../../../assets/li.png';
import image4 from '../../../assets/gh.png';

class Footer extends Component {
  render() {
    return (
      <div className={styles.footer}>
        <Image
          linkPath="https://www.facebook.com/daniel.tuttle.3152" 
          size="small" 
          path={image1} />
        <Image
          linkPath="https://globati.com" 
          size="small" 
          path={image2} />
        <Image 
          linkPath="https://www.linkedin.com/feed/" 
          size="small" 
          path={image3} />
        <Image 
          linkPath="https://github.com/danielptm" 
          size="small" 
          path={image4} />
      </div>
    );
  }
}

export default Footer;
