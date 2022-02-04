import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={'Resume'} span={'resume'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Internships'} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={'2021 - Present'} 
                        title={'Software Engineering Internship'}
                        subTitle={'Vortex Vector LLC'}
                        text={
                        <ul>
                            <br></br>
                            <li> -  Utilizing HTML, JavaScript, Node.js, Java, SQL, and GIT for web development. </li> 
                            <br></br>
                            <li> -  Employing Java to search, sort, and change CSV and Amazon DynamoDB, JSON files with the purpose of analyzing/comparing hardware specifications and prices. </li> 
                            <br></br>
                            <li> -  Familiarity with GitHub branching, pull request, peer review, and DevOps environment. </li> 
                            <br></br>
                            <li> -  Working in an agile development environment, participating in daily scrum meetings, and using Trello for task management. </li> 
                        </ul>} 
                    />
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational Qualifications'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem 
                        year={'2021 - 2023'} 
                        title={'Associates Degree in Computer Science'}
                        subTitle={'Germantown Montgomery College'}
                        text={'Focus in STEM and Computer Science related classes.'}
                    />
                    <ResumeItem 
                        year={'2019 - 2023'} 
                        title={'High School Diploma'}
                        subTitle={'Thomas S. Wootton High School'}
                        text={'Focus in STEM and Computer Science related classes. Participant of the AOIT(Academy of Information Techonology) and STARS(Science, Technology, and Research).'} 
                    />
                </div>
            </InnerLayout>
        </ResumeStyled>    
    );
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default Resume
