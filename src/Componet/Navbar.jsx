import React, { useRef, useState } from "react";
import Resume from '../Media/Resume.pdf';
import Home from "./Home";
import About from "./About";
import Contect from './Contect';
import Portfolio from './Portfolio';

function Navbar(props) {
    const home = useRef(null);
    const about = useRef(null);
    const portfolio = useRef(null);
    const contact = useRef(null);
    const [visible, setVisible] = useState(false)


    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 350) {
            setVisible(true)
        }
        else if (scrolled <= 350) {
            setVisible(false)
        }
    };

    //to toggle top button
    window.addEventListener('scroll', toggleVisible)



    //to navigate user into different section
    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: "smooth"
        })
    }

    return (
        <>
            <div className={`${visible ? 'NavbarSide' : 'Navbar'}`}>
                <div className={`${visible ? 'NavSide' : 'Nav'}`} >
                    {visible ? '' :
                        <span id="myname" data-aos="zoom-in">{props.myname}</span>
                    }
                    <ul >
                        <li onClick={() => scrollToSection(home)} data-aos="zoom-in">Home</li>
                        <li onClick={() => scrollToSection(about)} data-aos="zoom-in">About</li>
                        <li onClick={() => scrollToSection(portfolio)} data-aos="zoom-in">PortFolio</li>
                        <li onClick={() => scrollToSection(contact)} data-aos="zoom-in">Contact</li>
                        <li data-aos="zoom-in" ><a href={Resume}>Resume</a></li>

                    </ul>
                    <span className="line" style={{ display: visible ? 'inline' : 'none' }}></span>
                </div>
            </div>


            <section ref={home} className="section">
                <Home />
            </section>
            <section ref={about} className="section">
                <About />
            </section>
            <section ref={portfolio} className="section">
                <Portfolio />
            </section>
            <section ref={contact} className="section">
                <Contect />
            </section>
        </>
    );
}
export default Navbar;