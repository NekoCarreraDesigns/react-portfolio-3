import React from "react";
import "./Card.css"

function Card() {
    return (
        <div size="fluid">
            <ul className="list-inline">
                <li>
                    <h1 id="signage" className="mt-0 mb-1">Weather Dashboard</h1>
                    <img id="weather-dash" className="img-fluid" src="./assets/WeatherDash.png" alt="palm-trees" />
                    <div className="media-body">
                        <p id="menu"> The app uses the Open Weather API, and jQuery to function, Bootstrap for the front end. App helped conquer API woes that were plaguing the skill set at the time.
                        </p>
                        <button style={{ backgroundColor: 'slateblue' }} type="button" className="btn btn-primary btn-lg"><a className="button" href="https://nekocarreradesigns.github.io/weather-dashboard/">Whew it's a scorcher!</a></button>
                        <button style={{ backgroundColor: 'slateblue' }} type="button" className="btn btn-primary btn-lg"><a className="button" href="https://github.com/NekoCarreraDesigns/weather-dashboard">Check Out The Code!</a></button>
                    </div>
                </li>
                <li className="list-inline">
                    <h1 id="signage" className="mt-0 mb-1">Employee Tracker</h1>
                    <img id="employee-pic" className="img-fluid" src="./assets/EmployeeTracker.png" alt="employee-tracker" />
                    <div className="media-body">
                        <p id="menu"> Employee tracker uses the command line to view departments, add departments, view employees, add
                        employees, view employees by specific departments, view employees by their manager, change employee roles,
                        employees can also be removed if needed. The app uses MySQL, Node.js, and Express.js
                        </p>
                        <button style={{ backgroundColor: 'slateblue' }} type="button" className="btn btn-primary btn-lg"><a className="button" href="https://drive.google.com/file/d/1zig7CcZptLKOcA2tOe6vp0-Af3fkD2nQ/view">Manage your crew!</a></button>
                        <button style={{ backgroundColor: 'slateblue' }} type="button" className="btn btn-primary btn-lg"><a className="button" href="https://github.com/NekoCarreraDesigns/employee-tracker">Check Out The Code!</a></button>
                    </div>
                </li>
                <li className="list-inline">
                    <h1 id="signage" className="mt-0 mb-1">Hockey Quiz</h1>
                    <img id="hockey-pic" className="img-fluid" src="./assets/hockey quiz pic.png" alt="hockey" />
                    <div className="media-body">
                        <p id="menu"> Quiz app that uses HTML, CSS3, and vanilla JavaScript for functionality, this started a love affair with JavaScript
                        </p>
                        <button style={{ backgroundColor: 'slateblue' }} type="button" className="btn btn-primary btn-lg"><a className="button" href="https://NekoCarreraDesigns.github.io/Hockey-Quiz">Drop The Puck!</a></button>
                        <button style={{ backgroundColor: 'slateblue' }} type="button" className="btn btn-primary btn-lg"><a className="button" href="https://github.com/NekoCarreraDesigns/Hockey-Quiz">Check Out The Code!</a></button>
                    </div>
                </li>
                {/* <li className="list-inline">
                    <h1 id="signage" className="mt-0 mb-1">Team Generator</h1>
                    <img id="team-pic" className="img-fluid" src="./assets/TeamGen.png" alt="team-generator" />
                    <div className="media-body">
                        <p id="menu"> Uses Node.js, and the command line prompts to generate the profile cards, with role specific questions and icons for each team member, with data
                        about the specific team member. the app uses the inquirer npm for the questions, and the command line to
                        generate html content, the app also uses jest for testing purposes.
                        </p>
                        <button style={{ backgroundColor: 'slateblue' }} type="button" className="btn btn-primary btn-lg"><a className="button" href="https://drive.google.com/file/d/1so5yskli4EY3dHFrP0g877eq1efzan0s/view">Squad up!</a></button>
                        <button style={{ backgroundColor: 'slateblue' }} type="button" className="btn btn-primary btn-lg"><a className="button" href="https://github.com/NekoCarreraDesigns/team-profile-generator">Check Out The Code!</a></button>
                    </div>
                </li> */}
                <li className="list-inline">
                    <h1 id="signage" className="mt-0 mb-1">Fitness Tracker</h1>
                    <img id="fitness-pic" className="img-fluid" src="./assets/FitnessTracker2.png" alt="team-generator" />
                    <div className="media-body">
                        <p id="menu">Fitness Tracker app allows you to track your workouts, with a MongoDB database, Express backend, using
                        Semantic UI for the front end, the app also uses Mongoose ORM, ES6, app also uses Node.js, and some jQuery.
                        </p>
                        <button style={{ backgroundColor: 'slateblue' }} type="button" className="btn btn-primary btn-lg"><a className="button" href="https://obscure-citadel-27419.herokuapp.com/">Do You Even Lift!</a></button>
                        <button style={{ backgroundColor: 'slateblue' }} type="button" className="btn btn-primary btn-lg"><a className="button" href="https://github.com/NekoCarreraDesigns/fitness-tracker">Check Out The Code!</a></button>
                    </div>
                </li>
                <li className="list-inline">
                    <h1 id="signage" className="mt-0 mb-1">Employee Directory</h1>
                    <img id="note-pic" className="img-fluid" src="./assets/EmployeeDirectory.png" alt="note-taker" />
                    <div className="media-body">
                        <p id="menu">App built using React, some CSS3, and Bootstrap, allows you to filter employees in ascending or descending order by date of birth, name, email, or phone number 
                       </p>
                        <button style={{ backgroundColor: 'slateblue' }} type="button" className="btn btn-primary btn-lg"><a className="button" href="https://nekocarreradesigns.github.io/react-employee-directory/">Look Up An Employee</a></button>
                        <button style={{ backgroundColor: 'slateblue' }} type="button" className="btn btn-primary btn-lg"><a className="button" href="https://github.com/NekoCarreraDesigns/react-employee-directory">Check Out The Code!</a></button>
                    </div>
                </li>
                <li className="list-inline">
                    <h1 id="signage" className="mt-0 mb-1">Blues and Brews</h1>
                    <img id="note-pic" className="img-fluid" src="./assets/bluesandbrews.png" alt="note-taker" />
                    <div className="media-body">
                        <p id="menu"> The first project which I did the front end for, app uses Zomato API, Ticketmaster API,
                        Materialize CSS, and some CSS3, jQuery, and vanilla JavaScript
                        </p>
                        <button style={{ backgroundColor: 'slateblue' }} type="button" className="btn btn-primary btn-lg"><a className="button" href="https://akarpisz.github.io/masterproject1/">Rock On!</a></button>
                        <button style={{ backgroundColor: 'slateblue' }} type="button" className="btn btn-primary btn-lg"><a className="button" href="https://github.com/akarpisz/masterproject1">Check Out The Code!</a></button>
                    </div>
                </li>
            </ul>
        </div>

    )
}
export default Card;