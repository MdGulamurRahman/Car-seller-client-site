import React from 'react';
import './Performance.css'
import car from '../../../images/8.png'
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
const Performance = () => {
    return (
        <div className="mt-5 overflow-hidden performance">
            <div className="row">
                <div className="col-md-7">
                <Fade left>
                    <img className="car" src={car} alt="" />
                 </Fade>
                </div>
                <div className="p-5 col-md-5 p-text">
                  <Bounce right cascade>
                    <h1 className="text-start fw-bold">PERFORMANCE</h1>
                    <h4 className="pb-2 text-start fw-bold all-clr">FAST CHARGING</h4>
                    <p className="text-start text-secondary">We know the difference is in the details and that’s <br/> why our car rental services, in the tourism and business industry,<br/> stand out for their quality and good taste, to offer you an unique experience</p>
                    <hr />
                    <p className="text-start text-info">Great last-minute deals. Best price guarantee!</p>
                    </Bounce>
                </div>
            </div>
            
        </div>
    );
};

export default Performance;