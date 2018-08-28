import React, {Component} from 'react';
import Image from '../Image/Image';
import styles from './Footer.scss';
import image1 from '../../../assets/fb.png';
import image3 from '../../../assets/li.png';
import image4 from '../../../assets/download.png';

class Footer extends Component {
  render() {
    return (
      <div className={styles.footer}>
        <Image
          linkPath="https://www.facebook.com/daniel.tuttle.3152" 
          size="small" 
          path={image1} />
        <Image 
          linkPath="https://www.linkedin.com/feed/" 
          size="small" 
          path={image3} />

          <Image
              linkPath="https://s3.eu-central-1.amazonaws.com/danielptuttle.com/static/tuttleCv.pdf"
              size="small"
              path={image4} />

      </div>
    );
  }
}

export default Footer;
