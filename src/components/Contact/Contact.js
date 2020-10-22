import React from "react";
import "./Contact.css";

function Contact() {
    return (
        <div className="contact-me">
            <ul className="list-unstyled">
                <h2 className="holla-at-me">Contact Me</h2>
                <br></br>
                <p className="holla-at-me">Text or Call me at 303-931-0974</p>
                <p className="holla-at-me">e-mail me at denvermaas@gmail.com</p>
                <br></br>
                <div>
                    <br></br>
                    <i className="icon fab fa-linkedin" /><a rel="noopener noreferrer" className="button2" target="_blank" href="https://www.linkedin.com/in/nekocarrera1978">Linkedin</a>
                    <br></br>
                    <i className="icon fas fa-file" /><a rel="noopener noreferrer" className="button2" target="_blank" href="https://docs.google.com/document/d/1r9NBjCkj_Q5LOli6ad242eGSwj20QfrdPi89Oz9QqGg/edit?usp=sharing">Resume´</a>
                    <br></br>
                    <i className="icon fab fa-github-square" /><a rel="noopener noreferrer" className="button2" target="_blank" href="https://github.com/NekoCarreraDesigns">Github</a>
                    <br></br>

                </div>
            </ul>
        </div>
    )
}

export default Contact;