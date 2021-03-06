import React, {Component} from 'react';
import style from './MainImage.scss';
import image1 from '../../../../assets/daniel.png';
import image2 from '../../../../assets/me.jpg';
import Layout from "../../Layout/Layout";

class MainImage extends Component{

    constructor(props){
        super(props);
        this.state = {image: image1}
    }

    switchImage = () => {
        this.setState({
            image: this.state.image === image1 ? image2 : image1
        })
    };

    render() {
        return(
              <div className={style.imageContainer}>
                <img onMouseEnter={this.switchImage} className={style.image} src={this.state.image} />
              </div>
        );
    }
}

export default MainImage;