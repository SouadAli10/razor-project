import React from 'react';
import Divider from "./divider.js"
export default () =>
    <div id="Active">
        <div className="container">
            <div className="section-title text-center center">
                <h2>Active Partnerships</h2>
                <Divider />
            </div>
            <div className="row">
                <div className="ActivePartners">
                    <div className ="Active_img">
                        <img src="../img/RNW Logo.png" className="img-responsive" />
                    </div>
                    <div>
                        <div className="ActivePartnerships">
                        <p className= "ActivePartnerships-Prompt"> 
                        Razor New World is a strategic partnership between New World Capital Advisors ('NWC') and Razor Capital.
                        </p>
                            <p>
                                NWC is a regulated merchant banking firm based out of London. NWC's track record with large private & institutional investors has proved to be a strong value add to Razor's vision. The complimentary relationship between both firms enables Razor New World to undertake a mission in targeting unique opportunities in the Monsoon region.       
                            </p>                       
                            <p>
                                This partnership will originate, structure, invest, help execute, and ultimately advise in carefully curated venture capital and private equity transactions in the geography of focus with fintech, consumer businesses, and renewable energy constituting a part of our core mandate.

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>