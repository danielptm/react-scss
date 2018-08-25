import React from 'react';
import style from './Projects.scss';
import ExperienceBlurb from '../../ui/ExperienceBlurb/ExperienceBlurb';
import globatiImage from '../../../assets/gb.jpg';
import githubImage from '../../../assets/gh.png';
import peImage from '../../../assets/pe.png';
import AppContainer from '../../ui/AppContainer/AppContainer';
import Layout from "../../ui/Layout/Layout";

class Projects extends React.Component {

    render(){
        return(
            <Layout>
                <ExperienceBlurb
                    image={globatiImage}
                    url={'http://globati.com'}
                    urlName={'globati.com'}
                    title={'Globati'}
                    description={'I came up with an idea for a hobby project which became the basis of a company. ' +
                    'I designed and built the entire Globati platform (globati.com). This was built with angular, react-native, java, node and AWS for hosting and database services.' +
                    'It is hosted on 3 S3 buckets and connects through an API built with java/spring on an elastic beanstalk instance. ' +
                    'The mobile app was built with react-native and is available on Googleplay as well as Appstore. The app connects to an api written in node also on an elastic beanstalk. If you want to see the app in action, make sure to search for Stockholm. '
                    }
                />
                <ExperienceBlurb
                    image={githubImage}
                    url={'http://github.com/danielptm'}
                    urlName={'github.com/danielptm'}
                    title={'Github projects'}
                    description={
                        'This is my github account. There is not a whole lot available to the public partly because I deleted a bunch of old repos too that I was not doing anything on.' +
                        'Globati lives entirely in private repos. I can show the source for for those projects for interview purposes.' +
                        'Although there is some stuff there. Currently I am setting up seed projects in react and node that will be used by me as well as for future projects' +
                        'at the company I work for, so that we can get projects up and running quickly and in a consistent way.'
                    }
                />
                <ExperienceBlurb
                    image={peImage}
                    url={'https://github.com/danielptm/practice.git'}
                    urlName={'https://github.com/danielptm/practice'}
                    title={'Project Euler problems'}
                    description={'These are some of the problems that I have done projecteuler.net. The solutions are written in nodejs.' +
                    'I also take this opportunity to practice unit testing with mocha.'}
                />
            </Layout>
        )
    }
}

export default Projects;