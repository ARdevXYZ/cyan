import logo from "../cyan-logo.svg";
import React from "react";

const siteTitle = "Cyan";
const emailURL = "mailto:andrew.rosinski@gmail.com";
const workURL = "https://github.com/ARdevXYZ/cyan-nyc-work/blob/main/README.md";
const siteURL = "./";
class Nav extends React.Component {

    render() {
        return(
            <div className="main-container">

                <header className="header">

                    <nav className="nav" role="navigation">
                        <a href={emailURL} title="Email Cyan" alt="Email Cyan">Email Cyan</a>
                        <a href={workURL} title="Cyan NYC Work" alt="Cyan NYC Work">Work</a>
                    </nav>

                    <div className="logo-container">
                        <a className="cyan-logo" href={siteURL} title="Cyan" alt="Cyan">
                            <img src={logo} alt={siteTitle} title={siteTitle} className="cyan-logo" width="125px" height="auto" />
                        </a>
                    </div>

                </header>

            </div>

        );
    }
}

export default Nav;