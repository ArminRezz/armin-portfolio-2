import React from 'react'
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ProgressBar from './ProgressBar';

function Skills() {
    return (
        <SkillsStyled>
            
                <Title title={'My Skills'} span={'my skills'} />
                <InnerLayout>
                    <div className="skills">
                        <ProgressBar 
                            title={'JAVA'}
                            width={'80%'}
                            text={'80%'}
                        />
                        <ProgressBar 
                            title={'C++'}
                            width={'90%'}
                            text={'90%'}
                        />
                        <ProgressBar 
                            title={'PYTHON'}
                            width={'85%'}
                            text={'85%'}
                        />
                        <ProgressBar 
                            title={'JavaScript'}
                            width={'60%'}
                            text={'60%'}
                        />
                        <ProgressBar 
                            title={'HTML'}
                            width={'95%'}
                            text={'95%'}
                        />
                        <ProgressBar 
                            title={'CSS'}
                            width={'75%'}
                            text={'75%'}
                        />
                        <ProgressBar 
                            title={'GIT'}
                            width={'75%'}
                            text={'75%'}
                        />
                        <ProgressBar 
                            title={'JSON'}
                            width={'75%'}
                            text={'75%'}
                        />
                        <ProgressBar 
                            title={'REACT'}
                            width={'75%'}
                            text={'75%'}
                        />
                        <ProgressBar 
                            title={'SQL'}
                            width={'75%'}
                            text={'75%'}
                        />
                    </div>
                </InnerLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default Skills;
