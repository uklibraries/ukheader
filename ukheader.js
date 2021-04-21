// Universal Header for University of Kentucky Libraries websites
// Author: Eric Weig, University of Kentucky Libraries
// 2021

/*jslint browser:true */
/*jslint long:true */

window.addEventListener('load', function() {    
    var ukDiv = document.createElement("div");
    ukDiv.id = "ukheader";
    ukDiv.innerHTML = "<style>#ukimg{height:40px;}#ukheader{font-family:\"Mercury Display A\", \"Mercury Display B\", serif; background-color:#041E42;position:relative;top:0;left:0;z-index:999;width:100%;height:40px;color:white;}#logo{float:right;padding-right:15px;padding-top:7px;}#logo > a{color:white;font-size:18px;}#logo > a:hover{color:#B1C9E8;text-decoration:none;margin-left:3px;}#arrow{color:rgb(24, 151, 212);font-size:20px;vertical-align:initial;}sub{position:relative;left: -.05rem;font-size:8px;}</style><span id=\"logo\"><span id=\"arrow\">&#9666;</span>&nbsp;&nbsp;<a href=\"https://www.uky.edu/\">University of Kentucky<sub>&#174;</sub></a></span>";
    document.body.insertBefore(ukDiv, document.body.firstChild);
});
