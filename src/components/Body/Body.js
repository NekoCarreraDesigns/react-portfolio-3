import React from "react";
import "./Body.css";

function Body() {
    return (
        <div size="fluid" className="sea-and-sand" >
            <p className="intro-1">Hello, my name is Nicholas Maas, a graduate of the University of Denver coding boot camp. As a full stack web developer who is passionate about design, enjoys the front end because of an art background.
            Enjoys the functionality of the back end as well. Skills include testing, debugging, functional programming, object oriented programming, MVC, JSON, agile and scrum methodologies, user authentication, writing clean code, reading documentation, ORM, Mongoose ODM, REST API.</p>
            <img className="tech-1" alt="technology" src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"></img>
            <img className="nicholas" alt="handsome-gentleman" src="./assets/Nicholas1.jpeg"></img>
            <img className="tech-1" alt="technology" src="./assets/BootCampCert.png"></img>
            <p className="intro-1" >Technologies known: HTML5, CSS3, Bootstrap, Semantic UI,
            Reactstrap, Materialize, Handlebars, Jest, MongoDB, Angular, Express, Node, React, jQuery, AJAX, JavaScript, ES6, Python, NoSQL, MySQL, Heroku, Github, GitBash, also
            well versed in Progressive Web Applications.</p>
        </div>

    )
}

export default Body;