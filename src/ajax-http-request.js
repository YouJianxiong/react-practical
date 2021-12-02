var xhttp;


export const get = function(url, isAsync, callback?) {
    if (window.XMLHttpRequest)
    {// IE7+, Firefox, Chrome, Opera, Safari
        xhttp=new XMLHttpRequest();
    }
    else
    {// IE6, IE5
        // eslint-disable-next-line no-undef
        xhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }

    // allow CORS
    xhttp.withCredentials = true;

    xhttp.onreadystatechange = callback;
    xhttp.open("GET", url, isAsync);
    xhttp.send();
}

export const post = function (url, params, isAsync, response?, callback?) {
    if (window.XMLHttpRequest)
    {// IE7+, Firefox, Chrome, Opera, Safari
        xhttp=new XMLHttpRequest();
    }
    else
    {// IE6, IE5
        // eslint-disable-next-line no-undef
        xhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }

    // allow CORS
    xhttp.withCredentials = true;

    xhttp.onload = response;
    xhttp.onreadystatechange = callback;
    xhttp.open("POST", url, isAsync);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(params);
}