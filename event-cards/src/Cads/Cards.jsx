import React, { Component } from 'react';
import Card from './cardUI';

import img1 from "../assests/blockchain.jpg";
import img2 from "../assests/cloud.jpg";
import img3 from "../assests/cp.jpg";
import img4 from "../assests/ux design.jpg";
import img5 from "../assests/VR.jpg";
import img6 from "../assests/Webdev.jpg";



class Cards extends Component {
    
    render() { 
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Card imgsrc={img1} title='BLOCKCHAIN TECHNOLOGY'/>

                    </div>
                    <br>
                    </br>
                    <div className="col-md-4">
                        <Card imgsrc={img2} title='CLOUD COMPUTING'/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img3} title='CODE BLOODED'/> 
                    </div>
                    <br>
                    </br>
                    <div className="col-md-4">
                        <Card imgsrc={img4} title='DESIGN IT!'/>  
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img5} title='VIRTUALLY REAL'/> 
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img6} title='INTRO TO WEB DEV'/>
                    </div>
                </div>
            </div>

        );
    }
}
 
export default Cards;