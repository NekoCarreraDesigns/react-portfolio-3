import React from "react";
import "./Card.css"

function Card() {
    return (
        <div>
            <ul className="list-inline">
                <li>
                    <h1 id="signage" className="mt-0 mb-1">Weather Dashboard</h1>
                    <img id="weather-dash" className="img-fluid" src="./assets/WeatherDash.png" alt="palm-trees" />
                    <div className="media-body">
                        <p id="menu"> Weather dashboard lets you view the weather for any city you want to search, want to know how the
                        weather is at moms house, or in your home town, maybe you plan on traveling and don't want to forget to pack
                        a jacket or forget your flip flops, the app uses the Open Weather API, and jQuery to function
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
                        employees can also be removed if needed. The app uses SQL, Node.js, and Express.js
                        </p>
                        <button style={{ backgroundColor: 'slateblue' }} type="button" className="btn btn-primary btn-lg"><a className="button" href="https://drive.google.com/file/d/1zig7CcZptLKOcA2tOe6vp0-Af3fkD2nQ/view">Manage your crew!</a></button>
                        <button style={{ backgroundColor: 'slateblue' }} type="button" className="btn btn-primary btn-lg"><a className="button" href="https://github.com/NekoCarreraDesigns/employee-tracker">Check Out The Code!</a></button>
                    </div>
                </li>
                <li className="list-inline">
                    <h1 id="signage" className="mt-0 mb-1">Hockey Quiz</h1>
                    <img id="hockey-pic" className="img-fluid" src="./assets/hockey quiz pic.png" alt="hockey" />
                    <div className="media-body">
                        <p id="menu">Do you have what it takes to win the Stanley Cup, Neko Carrera a die hard Red Wings fan since getting
                        introduced to hockey by his uncles challenges you! In this fun quiz featuring two of the greatest hockey
                          players to play the game</p>
                        <button style={{ backgroundColor: 'slateblue' }} type="button" className="btn btn-primary btn-lg"><a className="button" href="https://NekoCarreraDesigns.github.io/Hockey-Quiz">Drop The Puck!</a></button>
                        <button style={{ backgroundColor: 'slateblue' }} type="button" className="btn btn-primary btn-lg"><a className="button" href="https://github.com/NekoCarreraDesigns/Hockey-Quiz">Check Out The Code!</a></button>
                    </div>
                </li>
                <li className="list-inline">
                    <h1 id="signage" className="mt-0 mb-1">Team Generator</h1>
                    <img id="team-pic" className="img-fluid" src="./assets/TeamGen.png" alt="team-generator" />
                    <div className="media-body">
                        <p id="menu">The team generator app lets you put together a team for your project, featuring Node.js command
                        line
                        prompts to generate the profile cards, with role specific questions and icons for each team member, with data
                        about the specific team member. the app uses the inquirer npm for the questions, and the command line to
                        generate html content, the app also uses jest for testing purposes.
                        </p>
                        <button style={{ backgroundColor: 'slateblue' }} type="button" className="btn btn-primary btn-lg"><a className="button" href="https://drive.google.com/file/d/1so5yskli4EY3dHFrP0g877eq1efzan0s/view">Squad up!</a></button>
                        <button style={{ backgroundColor: 'slateblue' }} type="button" className="btn btn-primary btn-lg"><a className="button" href="https://github.com/NekoCarreraDesigns/team-profile-generator">Check Out The Code!</a></button>
                    </div>
                </li>
                <li className="list-inline">
                    <h1 id="signage" className="mt-0 mb-1">Fitness Tracker</h1>
                    <img id="fitness-pic" className="img-fluid" src="./assets/FitnessTracker2.png" alt="team-generator" />
                    <div className="media-body">
                        <p id="menu">Fitness Tracker app allows you to track your workouts, with a MongoDB database, express backend, using
                        Semantic UI for the front end, the app also uses Mongoose ORM, I love being fit, and working out this one was fun to make.
                        If I'm not in the gym training Muay Thai, you can find me out in the surf catching some waves
                        </p>
                        <button style={{ backgroundColor: 'slateblue' }} type="button" className="btn btn-primary btn-lg"><a className="button" href="https://obscure-citadel-27419.herokuapp.com/">Do You Even Lift!</a></button>
                        <button style={{ backgroundColor: 'slateblue' }} type="button" className="btn btn-primary btn-lg"><a className="button" href="https://github.com/NekoCarreraDesigns/fitness-tracker">Check Out The Code!</a></button>
                    </div>
                </li>
                <li className="list-inline">
                    <h1 id="signage" className="mt-0 mb-1">Note Taker</h1>
                    <img id="note-pic" className="img-fluid" src="./assets/NoteTaker.png" alt="note-taker" />
                    <div className="media-body">
                        <p id="menu">Note taker app, are you like me? super forgetful? like so forgetful you would lose your own head if
                        it wasn't attached. Well the note taker is here to save the day, have something important you need to remember
                        write it down, the note taker saves it for you.
                        have a pile of old notes? the note taker will delete them for you too. the app uses express.js for the
                        backend.
                       </p>
                        <button style={{ backgroundColor: 'slateblue' }} type="button" className="btn btn-primary btn-lg"><a className="button" href="https://afternoon-sea-03704.herokuapp.com/">What did you forget!</a></button>
                        <button style={{ backgroundColor: 'slateblue' }} type="button" className="btn btn-primary btn-lg"><a className="button" href="https://github.com/NekoCarreraDesigns/note-taker">Check Out The Code!</a></button>
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