// data from json

//json.parse  ????

import React, { Component } from 'react';
import "./info.css";

class Info extends Component {
	constructor() {
        super();
        this.state = {
			address: '66 Crowfoot Terrace NW, Calgary, AB T3G 4J8',
			placeName: 'Chapters',
			rating: '5',
			empMasks: '5',
			empDist: '4',
			custMasks: '4',
			custDist: '4',
			maxOcc: 'False',
			handSan: 'True',
			masks: 'True'
		};
		this.getInfo = this.getInfo.bind(this);
	  }
	
	getInfo() {
		//if get requests work
	}
	  
    render() {
        return (
            <div id="reviews">
				<div id="reviews-header">
					<div class="reviews-title" dangerouslySetInnerHTML={{__html: `Score for ${this.state.placeName}`}} />
				</div>
				<div class="reviews-overall" dangerouslySetInnerHTML={{__html: `Overall Rating: ${this.state.rating}/5`}} />
				<div id="reviews-content">
					<div dangerouslySetInnerHTML={{__html: `Social Distancing (Employees): ${this.state.empDist}/5`}} />
					<div dangerouslySetInnerHTML={{__html: `Mask Wearing (Employees): ${this.state.empMasks}/5`}} />
					<div dangerouslySetInnerHTML={{__html: `Hand Sanitizer Provided: ${this.state.handSan}`}} />
					<div dangerouslySetInnerHTML={{__html: `Masks Provided: ${this.state.masks}`}} />
					<div dangerouslySetInnerHTML={{__html: `Social Distancing (Customers): ${this.state.custDist}/5`}} />
					<div dangerouslySetInnerHTML={{__html: `Mask Wearing (Customers): ${this.state.custMasks}/5`}} />
					<div dangerouslySetInnerHTML={{__html: `Adheres To Max. Occupancy: ${this.state.maxOcc}`}} />
				</div>
			</div>

        );
    }
}

export default Info;

/*
rating = []
emasks = []
edist = []
masks = []
hsand = []
cmasks = []
cdist = []
maxocc = []

for (i = 0; i < cars.length; i++) {
	alert("Overall rating: " + rating[i])
	alert("Employee compliance with wearing masks: " + emasks[i])
	alert("Employee compliance with social distancing:" + edist[i])
	alert("Masks offered: " + masks[i])
	alert("Hand sanitizer offered: " + hsand[i])
	alert("Customer compliance with wearing masks: " + cmasks[i])
	alert("Customer compliance with social distancing: " + cdist[i])
	alert("Max occupancy: " + maxocc[i])
}
*/

//
// Overall review: 
// Reviews pulled.
// Create a space for it.
// 
// navigate to extensions
// yarn build
// update the folder
// see if it works