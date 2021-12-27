import React from "react";

const emailURL = "mailto:cyan@cyan.nyc";

class Services extends React.Component {

    render() {
        return(
            <div className="main-container">

                <div className="content-container">
                
                    <section className="features">
                        <div className="feature-area feature-area-border">
                            <span className="list-item">javascript</span>
                            <span className="list-item">php</span>
                            <span className="list-item">react</span>
                            <span className="list-item">jsxx</span>
                            <span className="list-item">python</span>
                            <span className="list-item">more‼️</span>
                            <div className="rates">Let's work</div>
                        </div>
                        <div className="feature-area">
                            <h3 className="rotate-text">Languages Spoken</h3>
                        </div>
                        <div className="feature-area">
                            <h3 className="rotate-text">Things Dug</h3>
                            
                        </div>
                        <div className="feature-area feature-area-border">
                            <span className="list-item">minor threat</span>
                            <span className="list-item">miho nakayama</span>
                            <span className="list-item">destiny's child</span>
                            <span className="list-item">tom waits?</span>
                            <span className="list-item">fugazi ??</span>
                            <span className="list-item">WNYC</span>
                            <span className="list-item">NPR</span>
                        </div>
                        <div className="feature-area feature-area-border">
                            <span className="list-item">websites</span>
                            <span className="list-item">microsites</span>
                            <span className="list-item">applications</span>
                            <span className="list-item">web animation</span>
                            <span className="list-item">automation</span>
                            <span className="list-item">advanced analytics</span>
                            <span className="list-item">wordpress theme development</span>
                            <span className="list-item">content management systems (CMS)</span>
                            <span className="list-item">creative consulting</span>
                            <span className="list-item">tech consulting</span>
                            <div className="rates"><a href={emailURL} alt="Email Us" title="Email Us">Email us</a></div>
                        </div>
                        <div className="feature-area">
                            <h3 className="rotate-text">Capable Of</h3>
                        </div>
                        
                    </section>

                </div>

            </div>

        );
    }
}

export default Services;