import React from 'react';
import profile from '../Media/HomeProfile.png';
function About(props) {


    return (
        <>

            <div className="intro" >
            <div className="head" >About me</div>
                <div className="aboutme" data-aos="zoom-in">
                    <h4>ABOUT</h4>
                    <h1>KNOW MORE ABOUT ME</h1>
                    <div className='mydetail'>
                        <img src={profile} alt="Profile not available" />
                        <div className='detail'>
                            <h1 style={{ color: 'rgb(255, 127, 80)' }}>Web Developer & Web Designer</h1>
                            <p id='p'>I'm a Web Developer based in Surat. I went to Gandhi college in Surat.currently i'm pursuing bachelors of Information Technology from Goverment Engineering Collage, Gandhinager.I enjoy building Web apps, platforms, APIs and everything in between.When confronted with a challenge, may it be technical or not, I never give up until I found the solution. This might be what describes me best in my daily work.
                            </p>

                            <ul id='ul'>
                                <li> &#128310; <strong>Age : </strong>21 Year</li>
                                <li> &#x1F4DD; <strong>Degree : </strong>Information Techonology (BE)</li>
                                <li> &#128188; <strong>Expreience : </strong>Freshers (Ready to work)</li>
                            </ul>

                        </div>
                    </div>

                </div>

                
                    <div className="wrap-skill" data-aos="zoom-in">
                        <h1 style={{ color: 'rgb(255, 127, 80)' }}>TECHNICAL SKILLS</h1>
                        <div className="skillcontainer">
                            <div className="skill" data-aos="zoom-in-up">HTML
                                <div className="wrap-level"><div className="level nine"></div></div>
                            </div>
                            <div className="skill" data-aos="zoom-in-up">CSS
                                <div className="wrap-level"><div className="level nine"></div></div>
                            </div>
                            <div className="skill" data-aos="zoom-in-up">JavaScript
                                <div className="wrap-level"><div className="level eight"></div></div>
                            </div>
                            <div className="skill" data-aos="zoom-in-up">Python
                                <div className="wrap-level"><div className="level seven"></div></div>
                            </div>
                            <div className="skill" data-aos="zoom-in-up">C language
                                <div className="wrap-level"><div className="level eight"></div></div>
                            </div>
                            <div className="skill" data-aos="zoom-in-up">C++
                                <div className="wrap-level"><div className="level eight"></div></div>
                            </div>
                            <div className="skill" data-aos="zoom-in-up">PHP
                                <div className="wrap-level"><div className="level nine"></div></div>
                            </div>
                            <div className="skill" data-aos="zoom-in-up">Mysql
                                <div className="wrap-level"><div className="level eight"></div></div>
                            </div>
                            <div className="skill" data-aos="zoom-in-up">React JS
                                <div className="wrap-level"><div className="level eight"></div></div>
                            </div>
                            <div className="skill" data-aos="zoom-in-up">Bootstrap
                                <div className="wrap-level"><div className="level nine"></div></div>
                            </div>
                            <div className="skill" data-aos="zoom-in-up">Taliwind CSS
                                <div className="wrap-level"><div className="level eight"></div></div>
                            </div>
                            <div className="skill" data-aos="zoom-in-up">MongoDB
                                <div className="wrap-level"><div className="level seven"></div></div>
                            </div>
                            <div className="skill" data-aos="zoom-in-up">Express Js
                                <div className="wrap-level"><div className="level eight"></div></div>
                            </div>
                            <div className="skill" data-aos="zoom-in-up">Node Js
                                <div className="wrap-level"><div className="level nine"></div></div>
                            </div>
                        </div>
                    </div>
             
            </div>


        </>
    );

}
export default About;