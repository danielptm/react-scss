import React, {Component} from 'react';
import style from './Experience.scss';
import ExperienceBlurb from '../../ui/ExperienceBlurb/ExperienceBlurb';
import image from '../../../assets/ddnd.png';
import softronicimage from '../../../assets/softronic.png';
import repliorImage from '../../../assets/replior.jpg';
import Skill from "../../ui/Skill/Skill";
import Dropdown from "../../ui/Dropdown/Dropdown";

class Experience extends Component {

    // Java/spring, javascript, react, react-native, python, typescript, angular5, vue, html/css, jsp and jsf, mysql,
    // nodejs. git, linux, Intellij, eclipse, webstorm, AWS (S3, elasticbeanstalk, RDS, route53, cloudfront), unit testing (karma, jasmine, junit),
    // integration testing, (protractor, selenium).

    skills = [
        {name: 'Java', domain: 'BE'},
        {name: 'Javascript', domain: 'FE'},
        {name: 'react', domain: 'FE'},
        {name: 'react-native', domain: 'FE'},
        {name: 'python', domain: 'BE'},
        {name: 'typescript', domain: 'other'},
        {name: 'angular5', domain: 'FE'},
        {name: 'vue', domain: 'FE'},
        {name: 'html', domain: 'FE'},
        {name: 'css', domain: 'FE'},
        {name: 'jsp', domain: 'FE'},
        {name: 'jsf', domain: 'FE'},
        {name: 'mysql', domain: 'BE'},
        {name: 'nodejs', domain: 'other'},
        {name: 'git', domain: 'tools'},
        {name: 'linux', domain: 'BE'},
        {name: 'intellij', domain: 'tools'},
        {name: 'eclipse', domain: 'tools'},
        {name: 'webstorm', domain: 'tools'},
        {name: 'AWS', domain: 'other'},
        {name: 'S3', domain: 'other'},
        {name: 'elastic beanstalk', domain: 'BE'},
        {name: 'RDS', domain: 'BE'},
        {name: 'route53', domain: 'other'},
        {name: 'cloudfront', domain: 'other'},
        {name: 'unit testing', domain: 'tools'},
        {name: 'karma/jasmine', domain: 'other'},
        {name: 'junit', domain: 'BE'},
        {name: 'integration test', domain: 'FE'},
        {name: 'protractor', domain: 'FE'},
        {name: 'selenium', domain: 'FE'},
    ];

    filter = (domain) => {
        if(domain != 'all') {
            return this.skills.filter((skill) => domain === skill.domain);
        }else {
            return this.skills;
        }
    }

    render() {
        return (
            <div className={style.container}>
                <div className={style.experienceContainer}>
                    <div>
                        <div className={style.skillHeader}>
                            Skills
                        </div>
                        {/*<Dropdown*/}
                            {/*filter={this.filter.bind(this)}*/}
                            {/*skills={this.skills}*/}
                        {/*/>*/}
                        <div className={style.skillsContainer}>
                            {this.skills.map((skill, index) => (<Skill key={index} name={skill.name} domain={skill.domain}/>))}
                        </div>
                    </div>
                    <ExperienceBlurb
                        image={image}
                        title={'Digital development and Design and Levels'}
                        urlName={'wearelevels.se'}
                        description={'Worked with startups Afripods, Bowling Bookers, and Target aid as a full stack developer. With these startups I used javascript frameworks such as vue, react, angular, and for the backend node. For some projects we did test driven development, used AWS and Heroku.'}
                        url={'https://www.wearelevels.com'}
                    />
                    <ExperienceBlurb
                        image={softronicimage}
                        title={'Softronic'}
                        urlName={'softronic.se'}
                        description={'Worked as an inhouse consultant on the 1177.se platform. I worked with javaEE and angular which built a new portion of the platform.'}
                        url={'https://www.softronic.se'}
                    />
                    <ExperienceBlurb
                        image={repliorImage}
                        title={'Replior'}
                        urlName={'replior.se'}
                        description={'Worked with java, javascript and blazemeter building automated integration tests and load tests.'}
                        url={'http://www.replior.se'}
                    />
                </div>
            </div>
        )
    }
}

export default Experience;