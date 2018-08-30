import React from 'react';
import style from './Education.scss';
import ExperienceBlurb from '../../ui/ExperienceBlurb/ExperienceBlurb';
import uwImage from '../../../assets/uw.png';
import suImage from '../../../assets/SU.png'
import thImage from '../../../assets/th.png';
import AppContainer from "../../ui/AppContainer/AppContainer";
import Layout from "../../ui/Layout/Layout";

class Education extends React.Component {
    render() {
        return(
            <div className={style.container}>
                <Layout>
                    <ExperienceBlurb
                        title={'University of Washington'}
                        description={'I did a BA in anthropology here. It was also during this time that I discovered that I liked coding and began to do it as a hobby.'}
                        image={uwImage}
                        url={'https://www.washington.edu/'}
                        urlName={'washington.edu'}
                    />
                    <ExperienceBlurb
                        title={'Stockholm University'}
                        description={'After developing an interest in global health through my anthropology studies I went on to study public health. I became interested in e-health and was coding even more, developing hobby python projects and small websites, I thought that I wanted to become a product manager in e health projects.'}
                        image={suImage}
                        url={'https://www.su.se/english/'}
                        urlName={'su.se'}
                    />
                    <ExperienceBlurb
                        title={'Teknikhögskolan'}
                        description={'I realized quickly that I wanted to code and not be a product manager, so I enrolled in java development school here. I took courses in programming fundamentals, web development, android, database fundamentals, API integration and more.'}
                        image={thImage}
                        url={'http://teknikhogskolan.se/'}
                        url2={'https://s3.eu-central-1.amazonaws.com/danielptuttle.com/static/javaCertificate.pdf'}
                        urlName={'teknikhogskolan.se/'}
                        url2Name={'Advanced java certification'}
                    />

                </Layout>
            </div>
        )
    }
}

export default Education;