import React from 'react';
import styles from './Image.scss';

const Image = (props) => {
  let imageStyle = null;
  const path = props.path;
  switch(props.size){
    case 'small':
      imageStyle = styles.smallImage;
      break;
    case 'medium':
      imageStyle = styles.image;
      break;
    default:
      imageStyle = styles.image;
      break;
    }
  const image =       
        <a href={props.linkPath}><img 
          className={imageStyle}
          src={path} /></a>
  return (
    <div className={props.size ==='medium' 
    ? styles.imageContainer : styles.smallImagecontainer}>
      {image}
    </div>
  );
}

export default Image;