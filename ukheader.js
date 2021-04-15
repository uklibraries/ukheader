window.onload = function () {

var ukDiv = document.createElement("div");

ukDiv.id = 'ukheader';

ukDiv.innerHTML = "<style>#ukimg {height:43px;} #ukheader {font-family: \"AvenirNextLT\", sans-serif; background-color: #041E42;position: relative;top: 0;left: 0;z-index: 999;width: 100%;height: 53px;color:white;}#logo{float:right;padding-right:15px;padding-top:7px;}#logo > a{color:white;}#logo > a:hover {color:#B1C9E8;text-decoration:none;}</style><span id=\"logo\"><a href=\"https://www.uky.edu/\"><img id=\"ukimg\" src=\"https://ukylib-exhibit-test.org/uk-lockup--white.png\"/></a></span>";

document.body.insertBefore(ukDiv, document.body.firstChild);

};
