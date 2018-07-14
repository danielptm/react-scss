import React, {Component} from 'react';
import style from './About.scss';
import Header from '../../ui/containers/Header/Header';

class About extends Component {
    render(){
        return (
            <div className={style.container}>
                <Header />
                <h1>hihihi</h1>
            </div>
        )
    }
}

export default About;