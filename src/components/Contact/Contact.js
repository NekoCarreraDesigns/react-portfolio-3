import React from "react";
import "./Contact.css";

function Contact() {
    return (
        <div className="contact-me">
            <ul className="list-unstyled">
                <h2 className="holla-at-me">Contact Me</h2>
                <p className="holla-at-me">Text or Call me at 303-931-0974, not feeling that option, e-mail me at denvermaas@gmail.com</p>
                <li><i className="fab fa-instagram-square" /><a rel="noopener noreferrer" className="button2" target="_blank" href="https://www.instagram.com/LaVeyathan78">Instagram</a></li>
                <li><i className="fab fa-linkedin" /><a rel="noopener noreferrer" className="button2" target="_blank" href="https://www.linkedin.com/in/nekocarrera1978">Linkedin</a></li>
                <li><i className="fas fa-file" /><a rel="noopener noreferrer" className="button2" target="_blank" href="https://1drv.ms/w/s!BBBgULp6C0cCgxhpO_w6NsZDzlAH?e=ppaGqH">Resume´</a>
                    <li><i className="fab fa-github-square" /><a rel="noopener noreferrer" className="button2" target="_blank" href="https://github.com/NekoCarreraDesigns">Github</a></li>
                </li>
            </ul>
        </div>
    )
}

export default Contact;