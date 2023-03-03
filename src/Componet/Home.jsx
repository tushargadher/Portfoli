import React from "react";

import gif from '../Media/coding.gif'
function Home(props) {


    return (

        <>

            <div className="infocontainer">
              <div className="devinfo" data-aos="fade-left">
                    <span className="about">Hi, I'm</span>
                    <div className="name">
                        <span> TUSHAR GADHER </span>
                        <span> I craft WebSites 🛠. </span>
                    </div>
                    <div className="about">I'm a Web Developer and Designer based in Surat. I consider myself as a Programmer that turns coffee into code, able to adapt to all sorts of constraints, languages and technologies. I build complete and efficient products and love doing it. Don't hesitate to get in touch!</div>
                    <div className="social">
                        <div className="social-item">
                            <a href="https://www.linkedin.com/in/tushar-gadher-211bb2175/" >
                                <i className="fa-brands fa-linkedin"></i>
                            </a>
                        </div>
                        <div className="social-item">
                            <a href="https://www.facebook.com/tushar.gadher.568/" >
                                <i className="fa-brands fa-square-facebook"></i>
                            </a>
                        </div>
                        <div className="social-item">
                            <a href="https://wa.me/+919512887819" >
                                <i className="fa-brands fa-whatsapp"></i>
                            </a>
                        </div>
                        <div className="social-item">
                            <a href="https://www.instagram.com/tushargadher25/" >
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                        </div>
                        <div className="social-item">
                            <a href="https://github.com/tushargadher" >
                                <i className="fa-brands fa-github"></i>
                            </a>
                        </div>
                        <div className="social-item">
                            <a href="https://t.me/tushargadher" >
                                <i className="fa-brands fa-telegram"></i>
                            </a>
                        </div>
                       
                    </div>
                </div>
                <div className="devimg">
                    <img src={gif} alt="gif not found" data-aos="fade-right" />
                </div>
            </div>

        </>
    );
}
export default Home;