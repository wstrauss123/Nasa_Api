function displayNasaImage(xhr) {
    response = xhr.response;
    let nasaObject = JSON.parse(response);
    console.log(nasaObject.url);
    $("#space2").append("<img src='" + nasaObject.url + "'></img></a>");
    $("#space").append("<div class='dynostyle size'>" + nasaObject.title + "</div>");
    $("#space").append("<div class='dynostyle'>" + nasaObject.explanation + "</div>");
}

let baseUrl = 'https://api.nasa.gov/planetary/apod?api_key=IUABdnUJEP0Fmr2KwpxWQShXfr8NVfV1NRzOYkMN';

function sendAjaxGet(url, func) {
    let xhr = new XMLHttpRequest() || new ActiveXObject("Microsoft.HTTPRequest");
    xhr.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            func(this);
        }
    }
    xhr.open("GET", url);
    xhr.send();
}

sendAjaxGet(baseUrl, displayNasaImage);