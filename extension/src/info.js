// data from json

//json.parse  ????

import React, { Component } from 'react';
import "./info.css";

class Info extends Component {
    render() {
        return (
            <div id="reviews">
				<div id="reviews-header">
					<div class="reviews-title" dangerouslySetInnerHTML={{__html: `Score for ${"placeholder"}`}} />
				</div>
				<div class="reviews-overall" dangerouslySetInnerHTML={{__html: `Overall Rating: ${"placeholder"}/5`}} />
				<div id="reviews-content">
					<div dangerouslySetInnerHTML={{__html: `Social Distancing (Employees): ${"placeholder"}/5`}} />
					<div dangerouslySetInnerHTML={{__html: `Mask Wearing (Employees): ${"placeholder"}/5`}} />
					<div dangerouslySetInnerHTML={{__html: `Hand Sanitizer Provided: ${"placeholder"}`}} />
					<div dangerouslySetInnerHTML={{__html: `Masks Provided: ${"placeholder"}`}} />
					<div dangerouslySetInnerHTML={{__html: `Social Distancing (Customers): ${"placeholder"}/5`}} />
					<div dangerouslySetInnerHTML={{__html: `Mask Wearing (Customers): ${"placeholder"}/5`}} />
					<div dangerouslySetInnerHTML={{__html: `Adheres To Max. Occupancy: ${"placeholder"}`}} />
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