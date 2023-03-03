import React from "react";
import video from '../Media/video.mp4';
function Contect(props) {
    
    const clickHandler = () => {
        let input = document.getElementById('clientname');
        if ((input.value).split('').filter((ele) => { return ele !== ' ' && ele !== '\n' }).length === 0) {
            alert("Please Enter Details !")
        }
        else {

            alert("Data Submited.")
        }
    }
    return (
        <>
            <div className="head" >Content As</div>
            <div className="contectform" data-aos="zoom-in-up">
                <video autoPlay muted loop id="video">
                    <source src={video} type="video/mp4" />
                </video>
                <div className="side-head">
                    <p className="side-p">GET IN TOUCH</p>
                    <p className="side-p" id="question">Have a project ? We would love to help.</p>
                    <p className="side-p" ><a href="mailto:tushargadher123@gmail.com" id="mail">tushargadher123@gmail.com</a></p>
                </div>

                <div className="form">

                    <div className="formdiv">

                        <input type="text" name="name" placeholder="Your Name" id="clientname" />
                    </div>

                    <div className="formdiv">

                        <input type="email" name="email" placeholder="Your Email" id="clientemail" />

                    </div>
                    <div className="formdiv">

                        <input type="text" name="enquiry" placeholder="Tell us about your project" id="enquiry" />
                    </div>
                    <div className="formdiv">
                        <input type="text" name="mobile" placeholder="Your contect number" id="clientmobile" />
                    </div>
                    <input type="button" value="submit" className="btn-sub" onClick={clickHandler} />
                </div>
            </div>

        </>
    );
}
export default Contect;