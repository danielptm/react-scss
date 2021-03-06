import React, {Component} from 'react';
import style from './Experience.scss';
import ExperienceBlurb from '../../ui/ExperienceBlurb/ExperienceBlurb';
import levels from '../../../assets/levels.png';
import softronicimage from '../../../assets/softronic.png';
import repliorImage from '../../../assets/replior.jpg';
import nike from '../../../assets/nike.jpg';
import st from '../../../assets/theStandard.png';
import Skill from "../../ui/Skill/Skill";
import Dropdown from "../../ui/Dropdown/Dropdown";
import AppContainer from '../../ui/AppContainer/AppContainer';
import Layout from "../../ui/Layout/Layout";

class Experience extends Component {

    // Java/spring, javascript, react, react-native, python, typescript, angular5, vue, html/css, jsp and jsf, mysql,
    // nodejs. git, linux, Intellij, eclipse, webstorm, AWS (S3, elasticbeanstalk, RDS, route53, cloudfront), unit testing (karma, jasmine, junit),
    // integration testing, (protractor, selenium).

    skills = [
        {name: 'Java', domain: 'BE'},
        {name: 'Javascript', domain: 'FE'},
        {name: 'react', domain: 'FE'},
        {name: 'react-native', domain: 'FE'},
        {name: 'typescript', domain: 'other'},
        {name: 'angular5', domain: 'FE'},
        {name: 'vue', domain: 'FE'},
        {name: 'html', domain: 'FE'},
        {name: 'css', domain: 'FE'},
        {name: 'mysql', domain: 'BE'},
        {name: 'nodejs', domain: 'BE'},
        {name: 'git', domain: 'tools'},
        {name: 'linux', domain: 'BE'},
        {name: 'intellij', domain: 'tools'},
        {name: 'eclipse', domain: 'tools'},
        {name: 'webstorm', domain: 'tools'},
        {name: 'AWS', domain: 'other'},
        {name: 'S3', domain: 'other'},
        {name: 'SQS', domain: 'other'},
        {name: 'SNS', domain: 'other'},
        {name: 'ELB', domain: 'other'},
        {name: 'ASG', domain: 'other'},
        {name: 'Dynamodb', domain: 'BE'},
        {name: 'Terraform', domain: 'other'},
        {name: 'Docker', domain: 'other'},
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
            <Layout>
                <div>
                    <div className={style.skillHeader}>
                        Skills
                    </div>
                    <div className={style.skillsContainer}>
                        {this.skills.map((skill, index) => (<Skill key={index} name={skill.name} domain={skill.domain}/>))}
                    </div>
                </div>
                <div className={style.skillHeader}>
                    Work experience
                </div>
                <ExperienceBlurb
                    image={st}
                    title={'The Standard'}
                    urlName={'standard.com'}
                    description={'Worked on the global pricing team at Nike to provide services for internal business tools. The job entails working with springboot, java8, SQS, SNS, dynamodb, terraform, docker, splunk, redshift, jenkins, junit, mockito amongst other tools in Nike’s ecosystem.'}
                    url={'https://www.standard.com/'}
                />
                <ExperienceBlurb
                    image={nike}
                    title={'Nike'}
                    urlName={'nike.com'}
                    description={'Worked on the global pricing team at Nike to provide services for internal business tools. The job entails working with springboot, java8, SQS, SNS, dynamodb, terraform, docker, splunk, redshift, jenkins, junit, mockito amongst other tools in Nike’s ecosystem.'}
                    url={'http://nike.com'}
                />
                <ExperienceBlurb
                    image={levels}
                    title={'Levels'}
                    urlName={'wearelevels.se'}
                    description={'Worked with startups Afripods, Bowling Bookers, and Target aid as a full stack developer. With these startups I used javascript frameworks such as vue, react and angular, and for the backend node. For some projects we did test driven development, used AWS, Heroku.'}
                    url={'https://www.wearelevels.com'}
                />
                <ExperienceBlurb
                    image={softronicimage}
                    title={'Softronic'}
                    urlName={'softronic.se'}
                    description={'Built a new platform for health care providers with a team of 3 others. I worked with javaEE and angular. I built a new notification service that sent notifications through a mobile service provider. I also was the primary angular developer for that project and worked with the UX designer and did the whole interface for the new platform.'}
                    url={'https://www.softronic.se'}
                />
                <ExperienceBlurb
                    image={repliorImage}
                    title={'Replior'}
                    urlName={'replior.se'}
                    description={'Worked as a junior developer on a software platform for use in hospitals in Sweden. I helped maintain their primary product which was called trialonline. For it I did load testing with blazemeter, jmeter, beanshell, built integration tests with java/selenium, built REST api endpoints with JAXRS and spring and did a bit front simple front end stuff with HTML/css and javascript and JSP.'}
                    url={'http://www.replior.se'}
                />
            </Layout>
        )
    }
}

export default Experience;