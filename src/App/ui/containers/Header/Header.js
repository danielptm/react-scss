import React, {Component} from 'react';
import style from './Header.scss';
import image from '../../../../assets/me.jpg';


class MainImage extends Component{

    constructor(props){
        super(props);
        this.state = {
            showHeader: false,
            aboutMePressed: false,
            experiencePressed: false
        }
    }

    toggleLink = (item) => {
        if(item === 'about') {
            this.setState({aboutMePressed: true});
            this.setState({experiencePressed: false});

        } else {
            this.setState({experiencePressed: true});
            this.setState({aboutMePressed: false})

        }
    }

    render() {
        return(
            <div className={style.container}>
                <img className={style.image} src={image} />
                <ul className={style.list}>
                    <li
                        onClick={ () => this.toggleLink('about')}
                        className={this.state.aboutMePressed ? style.listItemPressed : style.listItem}>
                        <a>about me</a></li>
                    <li
                        onClick={() => this.toggleLink('experience')}
                        className={this.state.experiencePressed ? style.listItemPressed : style.listItem}>
                    <a>experience</a></li>
                </ul>
            </div>
        );
    }
}

export default MainImage;