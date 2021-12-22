import React from 'react'
import styled from 'styled-components';
import { Link, animateScroll as scroll } from "react-scroll";
import avatar from '../img/avatar2.jpg';

function Navigation() { 
         
    return (
        <NavigationStyled>
            <div className="avatar" >
                <img src={avatar} alt="" onclicked={scroll.scrollToTop()} />
            </div>
            <ul className="nav-items">
                <li className="nav-item">
                    <Link
                    activeClass="active"
                    to="section1"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    >
                    Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                    activeClass="active"
                    to="section2"
                    spy={true}
                    smooth={true}
                    offset={60}
                    duration={500}
                    >
                    About
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                    activeClass="active"
                    to="section3"
                    spy={true}
                    smooth={true}
                    offset={60}
                    duration={500}
                    >
                    Resume
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                    activeClass="active"
                    to="section4"
                    spy={true}
                    smooth={true}
                    offset={60}
                    duration={500}
                    >
                    Portfolios
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                    activeClass="active"
                    to="section5"
                    spy={true}
                    smooth={true}
                    offset={60}
                    duration={500}
                    >
                    Blogs
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                    activeClass="active"
                    to="section6"
                    spy={true}
                    smooth={true}
                    offset={60}
                    duration={500}
                    >
                    Contact
                    </Link>
                </li>
            </ul>
            <footer className="footer">
                <p> @2021 <b> Armin Rezaiyan </b></p>
            </footer>
           
        </NavigationStyled>
    )
}

const NavigationStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    border-right: 1px solid var(--border-color);
    .avatar{
        width: 100%;
        border-bottom: 1px solid var(--border-color);
        text-align: center;
        padding: 1rem 0;
        img{
            width: 70%;
            border-radius: 25%;
            border: 8px solid var(--border-color);
        }
    }

    .nav-items{
        width: 100%;
        text-align: center;
        .active {
            background-color: var(--primary-color-light);
            color: white;
            a {
                text-decoration: underline; 
            }
        }
        li{
            display: block;
            a{
                display: block;
                padding: 1.2rem 0;
                position: relative;
                z-index: 10;
                text-transform: uppercase;
                transition: all .4s ease-in-out;
                font-weight: 600;
                font-size: 1rem;
                letter-spacing: 6px;
                &:hover{
                    cursor: pointer;
                    color: var(--white-color);
                }
                &::before{
                    content: "";
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 100%;
                    background-color: var( --primary-color);
                    opacity: 0.21;
                    z-index: -1;
                }
            }

            a:hover::before{
                width: 100%;
                height: 100%;
            }
        }
    }

    footer{
        border-top: 1px solid var(--border-color);
        width: 100%;
        p{
            padding: 1.3rem 0;
            font-size: 1.1rem;
            display: block;
            text-align: center;
        }
    }
`;
export default Navigation;
