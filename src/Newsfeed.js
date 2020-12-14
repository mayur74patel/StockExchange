import React from 'react'
import './Newsfeed.css'
import Linegraph from './Linegraph'
import TimeLine from './Timeline'
function Newsfeed() {
    return (
        <div className="newsfeed">
            <div className="newsfeed__container">
                <div className="newsfeed__chartSection">
                    <div className="newsfeed__portfolio">
                        <h1>$114,000</h1>
                        <p>+$44.63 (+0.04) Today</p>
                    </div>
                    <div className="newsfeed_chart">
                        <Linegraph/>
                        <TimeLine/>
                    </div>
                    <div className="newsfeed_buing_section">
                        <h2>Buying Power</h2>
                        <h2>$4.11</h2>
                    </div>
                    <div className="newsfeed__market__section">
                        <div className="newsfeed__market__box">
                            <p>Market Closed</p>
                            <h1>Happy Thanks </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsfeed
