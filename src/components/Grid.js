import React from "react";
import gridTile from "../lib/images/grid.svg";

const siteTitle = "Cyan";
const gridStyle = {
    background: `url(${gridTile})`
};

class Grid extends React.Component {

    render() {
        return(
            <div className="main-container">

                <div class="content-container">
                
                    <section className="grid-area" style={gridStyle} role="main">

                        <div className="grid-child">
                            <h2 title="cyan nyc" alt="cyan nyc" title="cyan" className="grid-header">{siteTitle} is<br />dreaming of <br />the internet</h2>
                        </div>
                        <div className="grid-child">
                            <h3 className="rotate-text" role="contentinfo">
                                Cyan is an independent digital creative studio based in Brooklyn, New York, specialized in web and app development services, web animation, WordPress development and CMS solutions, and technical and creative consulting.
                            </h3>
                        </div>

                    </section>

                </div>

            </div>

        );
    }
}

export default Grid;