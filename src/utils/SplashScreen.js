import React from "react";
import $ from "jquery";
import cyanSplashLogo from "../lib/images/cyan-logo-light.svg";

const siteTitle = "Cyan";

function initSplash() {
  var myVar;
  // eslint-disable-next-line
  myVar = setInterval(hideSplash, 3000);
}
 
function hideSplash() {
  $("#splashId").fadeOut();
}

window.onload = (event) => {
  console.log(
    ` 

    ▄▀▄▄▄▄   ▄▀▀▄ ▀▀▄  ▄▀▀█▄   ▄▀▀▄ ▀▄ 
    █ █    ▌ █   ▀▄ ▄▀ ▐ ▄▀ ▀▄ █  █ █ █ 
    ▐ █      ▐     █     █▄▄▄█ ▐  █  ▀█ 
      █            █    ▄▀   █   █   █  
     ▄▀▄▄▄▄▀     ▄▀    █   ▄▀  ▄▀   █   
    █     ▐      █     ▐   ▐   █    ▐   
    ▐            ▐             ▐        
      
      `
    );
    initSplash();

  console.log('splash init');

  
};

class SplashScreen extends React.Component {

    render() {
        return(

        <div id="splashId" className="splash">
          <img src={cyanSplashLogo} alt={siteTitle} title={siteTitle} className="splash-logo" />
        </div>

        );
    }
}

export default SplashScreen;