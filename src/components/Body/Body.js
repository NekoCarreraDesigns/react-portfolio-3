import React from "react";
import "./Body.css";

function Body() {
    return (
        <div className="sea-and-sand" >
            <p className="intro">Hello My name is Nicholas C. Maas, I am a graduate of the University of Denver Coding Boot Camp. I am a Full Stack Web Developer, I love to design, and enjoy the front-end because of my art background.
            I do enjoy the functionality of the Back end as well. Apps are made with the MERN stack, Currently learning Python, and Angular. Skills include rigorous testing, debugging, MVC, JSON, user authentication, coding, and reading of documentation, ORM, creating REST API.</p>
            <img className="sunset-surf" alt="sunset-surfer" src="https://images.unsplash.com/photo-1475615787683-f1a161b002b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"></img>
            <img className="aerial" alt="aerial-san-diego" src="https://images.unsplash.com/photo-1544632795-2e45e65a8ce4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"></img>
            <img className="nicholas" alt="handsome-gentleman" src="./assets/Nicholas1.jpeg"></img>
            <p className="intro" >Technologies I know: HTML5, CSS3, Bootstrap, Semantic UI,
            Reactstrap, Materialize, Handlebars, Mongo, Express, Node, React, jQuery, AJAX, JavaScript, ES6, MySQL, Heroku, Github, GitBash, Jest. Have some legacy code that needs an update? I am also
            well versed in PWA, Not getting the search results you like? I am a sucker for some good SEO as well</p>
        </div>

    )
}

export default Body;