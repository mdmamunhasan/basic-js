var btnGetData = document.getElementById('js-get-data');
var btnSendData = document.getElementById('js-send-data');

/*var sendRequest = function (method, url, data) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.responseType = 'json'
    xhr.send(data);

    xhr.onload = function () {
        console.log(xhr.response)
        // console.log(JSON.parse(xhr.response))
    }
}

var getData = function () {
    sendRequest('GET', 'https://jsonplaceholder.typicode.com/todos/1');
}

var sendData = function () {
    var data = JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    });
    sendRequest('POST', 'https://jsonplaceholder.typicode.com/posts', data);
}

*/

var sendRequest = function (method, url, data) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.responseType = 'json'
        xhr.send(data);

        xhr.onload = function () {
            if (xhr.status < 400) {
                resolve(xhr.response)
            } else {
                reject(xhr.response)
            }
        }

        xhr.onerror = function () {
            reject("Something is wrong")
        }
    });
}

var getData = function () {
    sendRequest('GET', 'https://jsonplaceholder.typicode.com/todos/1')
        .then(console.log).catch(console.log);
}

var sendData = function () {
    var data = JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    });
    sendRequest('POST', 'https://jsonplaceholder.typicode.com/posts', data)
        .then(console.log).catch(console.log);

}

btnGetData.addEventListener('click', getData);
btnSendData.addEventListener('click', sendData);

