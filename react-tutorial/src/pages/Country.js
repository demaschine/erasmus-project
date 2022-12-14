import React from "react";

import flag1 from "./flags/flag_s.png"
import flag2 from "./flags/flag_p.jpg"
import flag3 from "./flags/flag_d.jpg"
import flag4 from "./flags/flag_r.png"
import flag5 from "./flags/flag_t.png"
import flag6 from "./flags/flag_eu.png"

import flags1 from "./flags/flag_s_s.png"
import flags2 from "./flags/flag_ds.jpg"
import flags3 from "./flags/flag_ps.jpg"
import flags4 from "./flags/flag_rs.jpg"
import flags5 from "./flags/flag_ts.jpg"
import flags6 from "./flags/flag_eus.jpg"


class Country extends React.Component {
    render () {
        return (
            <div>

                <div class="w3-top">
                    <div class="w3-bar w3-theme1" id="myNavbar">
                    <a href="/" class="w3-bar-item w3-text-white w3-button w3-red">Logout</a>
                    <a href="/impress" class="w3-bar-item w3-button w3-text-white w3-right">Legal notice</a>
                    </div>
                </div>

                    <div class="w3-container w3-xlarge w3-green w3-shadow w3-hide-small w3-margin-top">

                        <br/>
                        <div class="w3-center"><h1>Choose a country recipe page</h1></div>

                    </div>

                    <div class="w3-container w3-xlarge w3-green w3-shadow w3-hide-large w3-margin-top">

                        <br/>
                        <div class="w3-center"><h5>Choose a Recipe Country</h5></div>

                    </div>

                    <div id="projects" class="w3-hide-medium w3-hide-small">

                        <ul>
                        <li><a href="/"><img src={flag1} alt=""/></a></li>
                        <li><a href="/"><img src={flag2} alt=""/></a></li>
                        <li><a href="/"><img src={flag3} alt=""/></a></li>
                        <li><a href="/"><img src={flag4} alt=""/></a></li>
                        <li><a href="/"><img src={flag5} alt=""/></a></li>
                        <li><a href="/"><img src={flag6} alt=""/></a></li>
                        </ul>

                    </div>

                    <div id="projects" class="w3-hide-large w3-center w3-margin-right ">

                        <ul>
                        <br/>
                        <li><a href="/"><img src={flags1} alt=""/></a></li>
                        <br/>
                        <li><a href="/"><img src={flags2} alt=""/></a></li>
                        <br/>
                        <li><a href="/"><img src={flags3} alt=""/></a></li>
                        <br/>
                        <li><a href="/"><img src={flags6} alt=""/></a></li>
                        <br/>
                        <li><a href="/"><img src={flags4} alt=""/></a></li>
                        <br/>
                        <li><a href="/"><img src={flags5} alt=""/></a></li>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        </ul>

                    </div>

                    <div class="footer">

                    <br/>
                    <a href="/editp" class="w3-button w3-light-blue">View your Profile</a>
                    <p>&copy; 2019 | 2022 HEMS | Erasmus+ Demo </p>

                    </div>

            </div> 
        ); 
    }
}

export default Country;