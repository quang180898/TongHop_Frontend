import { CONTENT_TYPE, ERROR_SERVER, MNV_ENCODE, MNV_LANGUAGE } from '../contant.js';
import { showNotification } from './Utils.js';

var pako = require('pako');


function Encode(data) {
    var text = JSON.stringify(data);
    var buff = new TextEncoder("utf-8").encode(text);
    var compressed = pako.deflate(buff);
    return compressed;
}

function Decode(base64Data) {
    var decompressed = pako.inflate(base64Data);
    var code = handleCodePoints(decompressed)
    var text = decodeURIComponent(escape(code))
    var data = JSON.parse(text);
    return data;
}

function getUrl(url, data = {}) {

    var strUrl = url;
    var first = true;
    for (var key in data) {
        if (data[key] != null && data[key] != undefined && data[key] !== '') {
            strUrl = strUrl + (first ? '?' : '&') + (key + '=' + data[key]);
            first = false;
        }
    }
    return strUrl;
}

function getHeader(content_type = CONTENT_TYPE) {
    let headers;
        headers = {
            'MNV-encode': MNV_ENCODE,
            'MNV-LANGUAGE': MNV_LANGUAGE,
        }

    headers['Content-Type'] = content_type;
    return headers;
}

function handleResponseBuffer(response) {
    // fail 
    if (!response.ok) {
        var content = response.status + ' ' + response.statusText;
        if (response.status > 500 || response.status === 500) {
            showNotification({
                type: 'error',
                message: 'Đã xảy ra lỗi',
                title: 'Error' + ' ' + response.status
            })
            return (Promise.reject(ERROR_SERVER));
        } else {
            showNotification({
                type: 'error',
                message: response.statusText,
                title: response.status
            })
        }
        return (Promise.reject(content));
    }

    // success 
    return response.arrayBuffer().then(buffer => {
        return Decode(buffer)
    });
}

function handleResponseText(response) {

    // fail 
    if (!response.ok) {
        var content = response.status + ' ' + response.statusText;
        if (response.status >= 500) {
            showNotification({
                type: 'error',
                message:'Đã xảy ra lỗi',
                title: 'Error' + ' ' + response.status
            })
            return (Promise.reject(ERROR_SERVER));
        } else {
            showNotification({
                type: 'error',
                message: response.statusText,
                title: response.status,
                duration: 80000000000
            })
        }
        return (Promise.reject(content));
    }

    // success 
    return response.json().then(data => {
        // nếu token INVALID_TOKEN thì yêu cầu login lại
        if (data && data.success === false && data.code === "INVALID_TOKEN") {
            window.localStorage.clear();
            window.location.replace('/login')
        } else {
            return data
        }

    }).catch(e => console.log(e));
}

function handleRequest(url, options) {

    options['url'] = url;
    if (options.hasOwnProperty("body")) {
        if (MNV_ENCODE === 1) {
            options['body'] = Encode(options['body']);
        }
        else {
            options['body'] = JSON.stringify(options['body'])
        }
    }

    if (MNV_ENCODE === 1) {
        return fetch(url, options).then(handleResponseBuffer);
    }
    return fetch(url, options).then(handleResponseText);
}

function postWithFormData(data, url, onProgress) {
    return new Promise(function (resolve, reject) {
        const dataKeys = Object.keys(data);
        const formData = new FormData();
        for (let i in dataKeys) {
            let valueItem = data[dataKeys[i]]
            Array.isArray(valueItem)
                ? formData.append(dataKeys[i], JSON.stringify(valueItem))
                : formData.append(dataKeys[i], valueItem);
        }
        let request = new XMLHttpRequest();
        request.open("POST", url);
        onProgress && request.upload.addEventListener("progress", onProgress);
        request.setRequestHeader('MNV-ENCODE', MNV_ENCODE)
        request.send(formData);
        request.onreadystatechange = function () {
            if (request.readyState === XMLHttpRequest.DONE) {
                try {
                    let response = JSON.parse(request.responseText)
                    return resolve(response)
                }
                catch (e) {
                    return resolve(e.message);
                }
            }
        }
    });
}

export {
    getUrl,
    getHeader,
    handleRequest,
    postWithFormData //for resquest form-data
}
