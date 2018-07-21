import React, {Component} from 'react';
import style from './Experience.scss';
import ExperienceBlurb from '../../ui/ExperienceBlurb/ExperienceBlurb';
import image from '../../../assets/ddnd.png';
import softronicimage from '../../../assets/softronic.png';
import repliorImage from '../../../assets/replior.jpg';

class Experience extends Component {
    render() {
        return (
            <div className={style.container}>
                <div className={style.experienceContainer}>
                    <ExperienceBlurb
                        image={image}
                        title={'Digital development and Design and Levels'}
                        urlName={'Company site'}
                        description={'Worked with startups Afripods, Bowling Bookers, and Target aid as a full stack developer. With these startups I used javascript frameworks such as vue, react, angular, and for the backend node. For some projects we did test driven development, used AWS and Heroku.'}
                        url={'https://www.wearelevels.com'}
                    />
                    <ExperienceBlurb
                        image={softronicimage}
                        title={'Softronic'}
                        urlName={'Company site'}
                        description={'Worked as an inhouse consultant on the 1177.se platform. I worked with javaEE and angular which built a new portion of the platform.'}
                        url={'https://www.softronic.se'}
                    />
                    <ExperienceBlurb
                        image={repliorImage}
                        title={'Replior'}
                        urlName={'Company site'}
                        description={'Worked with java, javascript and blazemeter building automated integration tests and load tests.'}
                        url={'http://www.replior.se'}
                    />
                </div>
            </div>
        )
    }
}

export default Experience;