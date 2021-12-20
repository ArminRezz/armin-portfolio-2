import React from 'react'
import styled from 'styled-components';
import resume from '../img/resume.jpg';
import miniArmin from '../img/miniArmin.JPG';
import PrimaryButton from './PrimaryButton';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={miniArmin} alt=""/>
            </div>
            <div className="right-content">
                <h4>I am <span> Armin Rezaiyan </span></h4>
                <p className="paragraph">
                    I have been proggramming since I was a kid. At first I began learning the basics of HTML, CSS, and JavaScript. 
                    I then began learning JAVA, Python and C++ at school. I have always been fascinated by technology, trying to always stay on the bleeding edge.
                    I love to solve difficult problems, and enjoy working with others. 
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality </p>
                        <p>Languages </p>
                        <p>Location</p>
                        <p>Service</p>
                    </div>
                    <div className="info">
                        <p> Armin Rezaiyan</p>
                        <p> 16 </p>
                        <p> Iranian/Hungarian - American </p>
                        <p> Farsi, Hungarian, English </p>
                        <p> Maryland </p>
                        <p> Web developer, Software engineer</p>
                    </div>
                </div>
                <PrimaryButton title={'DOWNLOAD CV'} />
            </div>
        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 95%;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;
export default ImageSection;
