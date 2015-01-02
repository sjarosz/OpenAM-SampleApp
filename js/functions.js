


function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location.search);
    if (results == null)
        return "";
    else
        return decodeURIComponent(results[1].replace(/\+/g, " "));
}

function getBaseURL() {
    var protocol = window.location.protocol;
    var hostname = window.location.hostname;
    var port = window.location.port;
    return protocol + "//" + hostname + ":" + port;
}


function encodeQueryData(data) {
    var ret = [];
    for (var d in data) {
        ret.push(encodeURIComponent(d) + "="
            + encodeURIComponent(data[d]));
    }
    return ret.join("&");
}

function parseQueryString() {
    var query = {};
    var args = document.location.search.substring(1).split('&');
    for (var arg in args)
    {
        var m = args[arg].split('=');
        query[decodeURIComponent(m[0])] = decodeURIComponent(m[1]);
    }
    return query;
}


function toggleDisp(id)
{
    var elem = document.getElementById(id);
    if (elem.style.display == 'none')
        elem.style.display = '';
    else
        elem.style.display = 'none';
}

function basicAuth(user, password) {
    var tok = user + ':' + password;
    var hash = btoa(tok); // sample format: bXlDbGllbnRJRDpwYXNzd29yZA==
    return "Basic " + hash;
}

function getSessionHandle(){return (document.cookie.match('(^|; )iPlanetDirectoryPro=([^;]*)')||0)[2];}

function performLogin(options){
    var redir = window.location;    
    var loginurl=getBaseURL()+"/openam/UI/Login?goto="+encodeURIComponent(redir)+"&"+options;
    window.location.replace(loginurl);
}


function AuthNUrl(options){    
    return getBaseURL()+"/openam/UI/Login?"+options+"&goto="+encodeURIComponent(window.location);
}
