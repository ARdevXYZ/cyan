import React from "react";

const emailURL = "mailto:cyan@cyan.nyc";

class Services extends React.Component {

    render() {
        return(
            <div className="main-container">

                <div className="content-container">
                
                    <section className="features">
                        <div className="feature-area feature-area-border" role="list">
                            <span className="list-item" role="listitem">javascript</span>
                            <span className="list-item" role="listitem">php</span>
                            <span className="list-item" role="listitem">react</span>
                            <span className="list-item" role="listitem">jsxx</span>
                            <span className="list-item" role="listitem">python</span>
                            <span className="list-item" role="listitem">more‼️</span>
                        </div>
                        <div className="feature-area">
                            <h3 className="rotate-text">Languages Spoken</h3>
                        </div>
                        <div className="feature-area">
                            <h3 className="rotate-text">Things Dug</h3>
                            
                        </div>
                        <div className="feature-area feature-area-border" role="list">
                            <span className="list-item" role="listitem">minor threat</span>
                            <span className="list-item" role="listitem">miho nakayama</span>
                            <span className="list-item" role="listitem">destiny's child</span>
                            <span className="list-item" role="listitem">tom waits?</span>
                            <span className="list-item" role="listitem">fugazi ??</span>
                            <span className="list-item" role="listitem">WNYC</span>
                            <span className="list-item" role="listitem">NPR</span>
                        </div>
                        <div className="feature-area feature-area-border" role="list">
                            <span className="list-item" role="listitem">websites</span>
                            <span className="list-item" role="listitem">microsites</span>
                            <span className="list-item" role="listitem">applications</span>
                            <span className="list-item" role="listitem">web animation</span>
                            <span className="list-item" role="listitem">automation</span>
                            <span className="list-item" role="listitem">advanced analytics</span>
                            <span className="list-item" role="listitem">e-commerce</span>
                            <span className="list-item" role="listitem">wordpress theme development</span>
                            <span className="list-item" role="listitem">content management systems (CMS)</span>
                            <span className="list-item" role="listitem">creative consulting</span>
                            <span className="list-item" role="listitem">tech consulting</span>
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