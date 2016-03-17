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


// OpenAM is assumed to be deployed under /openam.
var openam = "/openam";
var restauthn = "/identity/authenticate";
var jsonauthn = "/json/authenticate";  //OpenAM 12+
var openamLogout = "/identity/logout";
var authorize = "/oauth2/authorize";
var access = "/oauth2/access_token";
var info = "/oauth2/userinfo";

// This application's URI, client_id
var openid = "/login";



/** 
SECURITY NOTE!!!
In production sample application would aquire these values from secure means such as from 
a secure connection to a database and then decrypt the values using a FIPS 140-2 algorithm such as AES-256.

How an application bootstraps it's own credentials to communicate to OpenAM is up to the application and it's design.
These hardcoded values are for illustration purposes only!
**/
var client_id = "MyClientID";
//var client_pwd="password";   //password

var enc_client_pwd='{"iv":"k+t+UgFr8CgA47PE3Cqoww==","v":1,"iter":1000,"ks":128,"ts":64,"mode":"ccm","adata":"","cipher":"aes","salt":"5a9NVSXkLjA=","ct":"5MCseaTORZo766t1HrUZmg=="}';

var nonce_key="F8443F7F 6620DEDB 37AF027A 00F01673";
var state_key="D252245C 852AB9E3 A6E4A589 588CA44F";
var application_credentials_key="391B359E 25EE0841 AFD1D35D 201D1B5B";