import React from "react";
import "./Body.css";

function Body() {
    return (
        <div size="fluid" className="sea-and-sand" >
            <p className="intro-1">Hello my name is Nicholas Maas, I am a graduate of the University of Denver Coding Boot Camp. I am a Full Stack Web Developer, I love to design, and enjoy the front-end because of my art background.
            I do enjoy the functionality of the Back end as well. Skills include testing, debugging, MVC, JSON, user authentication, coding, and reading of documentation, ORM, REST API.</p>
            <img className="tech-1" alt="technology" src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"></img>
            <img className="nicholas" alt="handsome-gentleman" src="./assets/Nicholas1.jpeg"></img>
            <img className="tech-1" alt="technology" src="./assets/BootCampCert.png"></img>
            <p className="intro-1" >Technologies I know: HTML5, CSS3, Bootstrap, Semantic UI,
            Reactstrap, Materialize, Handlebars, MongoDB, Angular, Express, Node, React, jQuery, AJAX, JavaScript, ES6, Python, MySQL, Heroku, Github, GitBash, Jest. Have some legacy code that needs an update? I am also
            well versed in Progressive Web Applications.</p>
        </div>

    )
}

export default Body;