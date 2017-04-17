import React from "react";
// import { connect } from "react-redux";
// import {Link} from "react-router-dom"

import "./Nav.css";
import signalLogo from "../../assets/signal.png";

export default function Nav( {props} )  {
  return (
    <nav>
      <div className="nav-wrapper red accent-4">
        <img alt="signal logo" className="brand-logo" src={ signalLogo }/>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="sass.html">Home</a></li>
          <li><a href="sass.html">Events</a></li>
          <li><a href="sass.html">Contact</a></li>
          <li><a href="badges.html">About</a></li>
          <li><a href="collapsible.html">Login/Join</a></li>
        </ul>
      </div>
    </nav>

  );
}

// export default connect(Nav);
