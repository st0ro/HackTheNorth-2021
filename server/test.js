const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

let getparams = {
    address: '66 Crowfoot Terrace NW, Calgary, AB T3G 4J8',
    placeName: 'Chapters'
};

let postparams = {
    address: '66 Crowfoot Terrace NW, Calgary, AB T3G 4J8',
    placeName: 'Chapters',
    rating: '5',
    empMasks: '5',
    empDist: '4',
    custMasks: '4',
    custDist: '4',
    maxOcc: 'false',
    handSan: 'true',
    masks: 'true'
};

//getReviews(getparams);
postReview(postparams);

function getReviews(params) {
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(JSON.parse(request.responseText));
            //^change
        }
    }
    let url = "http://108.59.82.223:34343/reviews?" + formatParams(params);
    request.open("GET", url, true);
    request.send();
}

function postReview(params) {
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(request.responseText);
        }
    }
    request.open('POST', "http://108.59.82.223:34343/reviews", true);
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    request.send(formatParams(params));
}

function formatParams(params) {
    return Object.keys(params)
        .map(function (key) {
            return key + "=" + encodeURIComponent(params[key])
        })
        .join("&")
}