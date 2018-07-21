import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import style from './About.scss';
import image from '../../../assets/daniel2.png';
import images from '../../../assets/images.svg';
import usa from '../../../assets/usa.png';
import sweden from '../../../assets/sweden.png';


class About extends Component {

    constructor(props){
        super(props);
        this.state = {
            english: true,
            swedish: false
        }
    }

    englishText = () => {
        return(
            <div className={style.aboutText}>
                Hey! I'm Daniel. I'm from Seattle but have spent most of
                my adult life living in Stockholm Sweden. I'm a pretty relaxed person
                but I get very passionate and energetic when doing anything I care about.
                I really like my work which is is coding, so I tend to do it as a hobby too. But I have a ton of
                other interests and hobbies too. I like to cook, snowboard, ride
                my bike, be in the nature, play basketball, learn new languages,
                travel and meet new people.
            </div>
        )
    }

    swedishText = () => {
        return (
            <div className={style.aboutText}>
                Hej! Jag heter Daniel. Jag kommer från Seattle men har bott mest som en vuxen i Stockholm. Jag är en ganska lugn person
                men kan bli passionerad och ha mycket energi när jag gör nånting som jag tar på allvar.
                Jag gillar att jobba vilket är med kodning, så jag brukar också göra det som en hobby.
                Men jag har många andra intressen. Jag gillar att laga mat, åka snowboard, cykla, vara i naturen,
                spela basket, lära mig nya språk, resa, och träffa nya människor.
            </div>
        )
    }

    toggleEnglish = () => {
        this.setState({english: true, swedish: false})
    }

    toggleSwedish = () => {
        this.setState({english: false, swedish: true})
    }

    routeToSlideShow = () => {
        console.log('heyhey');
        this.props.history.push('/slideshow');
    }

    render(){
        return (
            <div className={style.container}>
                <div className={style.mainImageContainer}>
                    <img className={style.image} src={image} />
                    <button
                        disabled
                        onClick={this.routeToSlideShow}
                        className={style.imagesButton}>
                        <div className={style.toolTip}>Image slide show coming soon!</div>
                        <img className={style.images} src={images} /></button>
                </div>
                <div className={style.about}>
                    {this.state.english ? this.englishText() : this.swedishText() }
                    <div className={style.flagContainer}>
                        <img onClick={this.toggleEnglish} className={style.flag} src={usa} />
                        <img onClick={this.toggleSwedish} className={style.flag} src={sweden} />
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(About);