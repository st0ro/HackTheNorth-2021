let getparams = {
    address: '66 Crowfoot Terrace NW, Calgary, AB T3G 4J8',
    placeName: 'Chapters'
};

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

function formatParams(params) {
    return Object.keys(params)
        .map(function (key) {
            return key + "=" + encodeURIComponent(params[key])
        })
        .join("&")
}

//--------------------------------------------------------------------------------------------------

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

function postReview(params) {
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(request.responseText);
        }
    }
    request.open('POST', "http://108.59.82.223:34343/reviews", true);
    request.setRequestHeader('Content-type', 'multipart/form-data');
    let form = new FormData();
    form.append('address', params.address);
    form.append('placeName', params.placeName);
    form.append('rating', params.rating);
    form.append('empMasks', params.empMasks);
    form.append('empDist', params.empDist);
    form.append('custMasks', params.custMasks);
    form.append('custDist', params.custDist);
    form.append('maxOcc', params.maxOcc);
    form.append('handSan', params.handSan);
    form.append('masks', params.masks);
    request.send(form);
}