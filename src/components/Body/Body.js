import React from "react";
import "./Body.css";

function Body() {
    return (
        <div className="sea-and-sand" >
            <img className="nicholas" alt="handsome-gentleman" src="./assets/Nicholas1.jpeg"></img>
            <img className="tech-1" alt="technology" src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"></img>
            <img className="tech-1" alt="technology" src="https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"></img>
            <p className="intro-1">Hello My name is Nicholas C. Maas, I am a graduate of the University of Denver Coding Boot Camp. I am a Full Stack Web Developer, I love to design, and enjoy the front-end because of my art background.
            I do enjoy the functionality of the Back end as well. Apps are made with the MERN stack, Currently learning Python, and Angular. Skills include rigorous testing, debugging, MVC, JSON, user authentication, coding, and reading of documentation, ORM, creating REST API.</p>

            <p className="intro-1" >Technologies I know: HTML5, CSS3, Bootstrap, Semantic UI,
            Reactstrap, Materialize, Handlebars, MongoDB, Express, Node, React, jQuery, AJAX, JavaScript, ES6, MySQL, Heroku, Github, GitBash, Jest. Have some legacy code that needs an update? I am also
            well versed in Progressive Web Apps, Not getting the search results you like? I am a sucker for some good Search Engine Optimization as well</p>
        </div>

    )
}

export default Body;