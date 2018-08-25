import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import style from './Header.scss';
import image from '../../../../assets/me.jpg';


class Header extends Component{

    constructor(props){
        super(props);
        this.state = {
            showHeader: false,
            aboutMePressed: false,
            experiencePressed: false,
            projectsPressed: false,
            skillsPressed: false,
            educationPressed: false
        }
    }

    toggleLink = (item) => {
        if(item === 'about') {
            this.setState({aboutMePressed: true});
            this.setState({experiencePressed: false});
            this.setState({projectsPressed: false});
            this.setState({skillsPressed: false});
            this.setState({educationPressed: false});
            this.routeToAbout();
        } else if(item==='experience') {
            this.setState({experiencePressed: true});
            this.setState({aboutMePressed: false});
            this.setState({projectsPressed: false});
            this.setState({skillsPressed: false});
            this.setState({educationPressed: false});
            this.routeToExperience();
        } else if(item==='skills') {
            this.setState({experiencePressed: false});
            this.setState({aboutMePressed: false});
            this.setState({projectsPressed: false});
            this.setState({skillsPressed: true});
            this.setState({educationPressed: false});
            this.routeToSkills();
        } else if(item === 'projects') {
            this.setState({experiencePressed: false});
            this.setState({aboutMePressed: false});
            this.setState({projectsPressed: true});
            this.setState({skillsPressed: false});
            this.setState({educationPressed: false});
            this.routeToProjects();
        } else if(item === 'education') {
            this.setState({experiencePressed: false});
            this.setState({aboutMePressed: false});
            this.setState({projectsPressed: false});
            this.setState({skillsPressed: false});
            this.setState({educationPressed: true});
            this.routeToEducation();

        }
    }

    routeToAbout = () => {
        this.deactivateRoutes();
        this.setState({aboutMePressed: true})
        this.props.history.push('/about');
    }

    routeToSkills = () => {
        this.deactivateRoutes();
        this.setState({skillsPressed: true})
        this.routeToProjects();
    };

    routeToCity() {
        this.deactivateRoutes();
        this.props.history.push('/');
    }

    routeToExperience() {
        this.deactivateRoutes();
        this.setState({experiencePressed: true})
        this.props.history.push('/experience');
    }

    routeToProjects() {
        this.deactivateRoutes();
        this.setState({projectsPressed: true})
        this.props.history.push('/projects');
    }

    routeToEducation(){
        console.log('HIHIHI');
        this.deactivateRoutes();
        this.setState({educationPressed: true});
        this.props.history.push('/education');
    }

    deactivateRoutes = () => {
        this.setState({
            showHeader: false,
            aboutMePressed: false,
            experiencePressed: false,
            projectsPressed: false,
            skillsPressed: false,
            educationPressed: false
        })
    }

    render() {
        return(
            <div className={style.container}>
                <img onClick={() => this.routeToCity()} className={style.image} src={image} />
                <ul>
                    <li
                        onClick={ () => this.toggleLink('about')}
                        className={this.state.aboutMePressed ? style.listItemPressed : style.listItem}>
                        <a>about</a></li>
                    <li
                        onClick={() => this.toggleLink('education')}
                        className={this.state.educationPressed ? style.listItemPressed : style.listItem}>
                        <a>education</a></li>
                    <li
                        onClick={() => this.toggleLink('experience')}
                        className={this.state.experiencePressed ? style.listItemPressed : style.listItem}>
                    <a>experience</a></li>
                    <li
                        onClick={() => this.toggleLink('projects')}
                        className={this.state.projectsPressed ? style.listItemPressed : style.listItem}>
                        <a>projects</a></li>
                </ul>
            </div>
        );
    }
}

export default withRouter(Header);