import React from "react";
import Fade from "react-reveal/Fade";

import Clients01 from "assets/images/clients-01.svg";
import Clients02 from "assets/images/clients-02.svg";
import Clients03 from "assets/images/clients-03.svg";
import Clients04 from "assets/images/clients-04.svg";
import Clients05 from "assets/images/clients-05.svg";

export default function Client() {
  return (
    <div className="clients">
      <Fade bottom delay={500}>
        <div className="container">
          <div className="clients-inner section-inner has-top-divider has-bottom-divider">
            <ul className="list-reset">
              <li>
                <img src={Clients01} alt="Clients" />
              </li>
              <li>
                <img src={Clients02} alt="Clients" />
              </li>
              <li>
                <img src={Clients03} alt="Clients" />
              </li>
              <li>
                <img src={Clients04} alt="Clients" />
              </li>
              <li>
                <img src={Clients05} alt="Clients" />
              </li>
            </ul>
          </div>
        </div>
      </Fade>
    </div>
  );
}
