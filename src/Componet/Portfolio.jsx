import React from "react";
import p1img from '../Media/project1.png';
import p2img from '../Media/project2.png';
import p3img from '../Media/project3.png';
import p4img from '../Media/project4.png';
import p5img from '../Media/project5.png';
import p6img from '../Media/project6.png';
import p7img from '../Media/project7.png';
import p8img from '../Media/project8.png';
import p9img from '../Media/project9.png';
import p10img from '../Media/project10.png';
import p11img from '../Media/project11.png';
import p12img from '../Media/project12.png';
function Portfolio(props) {



    return (
        <>
            <div className="work" >
                <div className="head" >MY WORK</div>
                <div id="proje" >PROJECTS</div>
                <div className="projectContainer">
                    <div className="project" data-aos="zoom-out-right">
                        <img src={p10img} alt="not found" className="proImg" />
                        <p>CloudNotes is a web-based application designed to help users store and manage their notes online on the cloud.for Front-end we used ReactJs and for Back-end we use MongnoDb database.we also use express js for improving the security of application.</p>
                        <a title="Deploy Soon...">View Project</a>
                    </div>
                    <div className="project" data-aos="zoom-out-right">
                        <img src={p11img} alt="not found" className="proImg" />
                        <p>inMovies is a comprehensive movie/series finder website designed to help users search and discover their favorite movie/series easily. The website is developed with the help of React js and Material ui.</p>
                        <a href="https://tushargadher.github.io/inMovies/" >View Project</a>
                    </div>
                    <div className="project" data-aos="zoom-out-right">
                        <img src={p1img} alt="not found" className="proImg" />
                        <p>This website is text analayzer tool which can convert any text into lowercase to uppercase, uppercase to lowercase and count the number of word and many more. this website is developed with the help of Bootstrap and ReactJs.</p>
                        <a href="https://tushargadher.github.io/TextBlend/" >View Project</a>
                    </div>
                </div>
            </div>
            <div className="work" >
                <div className="projectContainer">

                    <div className="project" data-aos="zoom-out-left">
                        <img src={p2img} alt="not found" className="proImg" />
                        <p>Excel Weather provide realtime weather report of given city.it also provide information about wind speed, humidity and cloud density of place. this website is develop from scratch with html, css, javascript and for fetching weather data we used Rapid API.</p>
                        <a href="https://tushargadher.github.io/ExcelWeather/" >View Project</a>
                    </div>
                    <div className="project" data-aos="zoom-out-left">
                        <img src={p3img} alt="not found" className="proImg" />
                        <p>SnakeMania is a casual game, You can control your snake using arrow keys.as long as you eat food the length of snake increase.this website/game is develop from scratch with html, css, javascript.</p>
                        <a href="https://tushargadher.github.io/SnakeGame/" >View Project</a>
                    </div>
                    <div className="project" data-aos="zoom-out-left">
                        <img src={p4img} alt="not found" className="proImg" />
                        <p>In this project i created the clone version of most popular music player spotify. for now it hav limited music. i used html, css and javaScript to develop this web music player from scratch .</p>

                        <a href="https://tushargadher.github.io/Spotify/" >View Project</a>
                    </div>

                </div>
            </div>

            <div className="work" >
                <div className="projectContainer">
                    <div className="project" data-aos="zoom-out-right">
                        <img src={p5img} alt="not found" className="proImg" />
                        <p>KeepNote. Capture what's on your mind ,Add notes, lists and many more thing you wnat to note.in this project user can write their note and can read any time.this project is develop from scratch with the help of Html, css and JavaScript.</p>
                        <a href="https://tushargadher.github.io/KeepNote/" >View Project</a>
                    </div>
                    <div className="project" data-aos="zoom-out-right">
                        <img src={p6img} alt="not found" className="proImg" />
                        <p>Tic Tac Toe is a two-player game in which the objective is to take turns and mark the correct spaces in a 3x3 grid.whoever complete first 3X3 is the winner. this website / game is develop from scratch with the help of html, css, javascript.</p>
                        <a href="https://tushargadher.github.io/Tic-Tac-Toe-Game/" >View Project</a>
                    </div>
                    <div className="project" data-aos="zoom-out-right">
                        <img src={p7img} alt="not found" className="proImg" /><p>
                            Todo list is useful to note down the tasks you need to complete or things that you want to do.in this project user can add task as much as they want to add.after finishing task user can delete task from list.
                        </p>

                        <a href="https://tushargadher.github.io/ToDoList/" >View Project</a>
                    </div>
                </div>
            </div>
            <div className="work">
                <div className="projectContainer">

                    <div className="project" data-aos="zoom-out-left">
                        <img src={p12img} alt="not found" className="proImg" />
                        <p>ImageCarousel is a website that provide a slideshow of images or videos. The images are arranged in a horizontal row and can be scrolled through using arrows.this project is develop from scratch with the help of Html, Css and JavaScript.</p>
                        <a href="https://tushargadher.github.io/ImageCarousal/" >View Project</a>
                    </div>
                    <div className="project" data-aos="zoom-out-left">
                        <img src={p8img} alt="not found" className="proImg" />
                        <p>In this project user can get the total numbr of word and character while typing in the input box.this project is develop from scratch with the help of Html, Css and JavaScript. </p>
                        <a href="https://tushargadher.github.io/WordCount/" >View Project</a>
                    </div>
                    <div className="project" data-aos="zoom-out-left">
                        <img src={p9img} alt="not found" className="proImg" />
                        <p>This Project is simple Calculator in which user can perform simple calculation like addition, multiplication, subtraction and division.this project is develop from scratch with the help of Html, Css and JavaScript.</p>
                        <a href="https://tushargadher.github.io/cal.github.io/simplecal.html">View Project</a>
                    </div>

                </div>
            </div>


 
        </>
    );
}

export default Portfolio;