import React from "react";
import "./Header.css";

function Header(props) {
    return (
        <div>
            <h1 className="page-head container-fluid">
                <img className="page-head img-fluid" alt="computer-code" src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"></img>
                Welcome to Neko Carrera Designs
            </h1>

        </div>
    )
}

export default Header;