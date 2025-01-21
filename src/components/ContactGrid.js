import React from "react";

const emailURL = "mailto:andrew.rosinski@gmail.com"

class ContactGrid extends React.Component {

    render() {
        return(
            <div className="main-container">

                <div className="content-container">
                
                    <section className="contact-grid">
                        <a className="email-text" alt="Email Cyan" title="Email Cyan" href={emailURL}>Email Cyan</a>

                        <a className="email-text" alt="Email Cyan" title="Email Cyan" href={emailURL}>Email Cyan</a>

                        <a className="email-text" alt="Email Cyan" title="Email Cyan" href={emailURL}>Email Cyan</a>
                    </section>

                </div>

            </div>

        );
    }
}

export default ContactGrid;