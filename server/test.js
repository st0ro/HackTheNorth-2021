const { json } = require('body-parser');
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

let params = {
    address: '66 Crowfoot Terrace NW, Calgary, AB T3G 4J8',
    placeName: 'Chapters'
};

getReviews(params);

function getReviews(params) {
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(JSON.parse(request.responseText));
            //^change
        }
    }
    let url = "http://108.59.82.223:34343/reviews?" + Object.keys(params)
    .map(function (key) {
        return key + "=" + encodeURIComponent(params[key])
    })
    .join("&");
    request.open("GET", url, true);
    request.send();
}