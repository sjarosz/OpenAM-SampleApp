/*
DISCLAIMER: The sample code described herein is provided on an "as is" basis, without 
warranty of any kind, to the fullest extent permitted by law. ForgeRock does not warrant 
or guarantee the individual success developers may have in implementing the sample code on 
their development platforms or in production configurations.
ForgeRock does not warrant, guarantee or make any representations regarding the 
use, results of use, accuracy, timeliness or completeness of any data or information relating to the sample code. 
ForgeRock disclaims all warranties, expressed or implied, and in particular, disclaims all warranties of merchantability, 
and warranties related to the code, or any service or software related thereto.
ForgeRock shall not be liable for any direct, indirect or consequential damages or costs of any type arising 
out of any action taken by you or others related to the sample code.

 *
 */


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



function AuthNUrl(options){    
    return getBaseURL()+"/openam/UI/Login?"+options+"&goto="+encodeURIComponent(window.location);
}
