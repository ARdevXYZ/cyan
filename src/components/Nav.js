import logo from "../cyan-logo.svg";
import React from "react";

const siteTitle = "Cyan";
const emailURL = "mailto:cyan@cyan.nyc";
const workURL = "https://github.com/ARdevXYZ/cyan-nyc-work/blob/100539f2b3be62def00a7d700466a384b0339206/README.md#cyan";
const siteURL = "./";
class Nav extends React.Component {

    render() {
        return(
            <div className="main-container">

                <header className="header">

                    <nav className="nav" role="navigation">
                        <a href={emailURL} title="Email Cyan" alt="Email Cyan">Email Cyan</a>
                        <a href={workURL} title="Cyan NYC Work" alt="Cyan NYC Work" target="_blank" rel="noopener">Work</a>
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