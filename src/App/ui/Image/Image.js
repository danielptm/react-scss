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
    
    let image =       
          <a href={props.linkPath}><img 
            className={imageStyle}
            src={path} /></a>
    
    const enter = () =>{
      if(props.path2 != undefined){
        this.image = 
        <a href={props.linkPath}><img 
          className={imageStyle}
          src={props.path2} />
        </a>
      }
    }
    
  return (
    <div 
      onMouseEnter={enter}
      className={props.size ==='medium' 
      ? styles.imageContainer : styles.smallImagecontainer}>
        {image}
    </div>
  );
}

export default Image;