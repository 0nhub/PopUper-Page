// Old Existing Functions

// Method for popping window from url given by user
function myFun(){
	var url = document.getElementById('Url');
	var urltext = url.value;

	if(urltext.startsWith('https://')){
		window.open(urltext, '_blank', 'location=yes,height=970,width=1000,scrollbars=yes,status=yes');
	}else{
    	var newurl = "https://"+urltext;
    	window.open(newurl, '_blank', 'location=yes,height=970,width=1000,scrollbars=yes,status=yes');
	}
	url.value = "";
}

// Method for popping window on buttons created under the URL Box
function myFunButton(callingUrl){
	var urltext = ""+callingUrl;

	if(urltext.startsWith('https://')){
		window.open(urltext, '_blank', 'location=yes,height=970,width=1000,scrollbars=yes,status=yes');
	}else{
	    var newurl = "https://"+urltext;
	    window.open(newurl, '_blank', 'location=yes,height=970,width=1000,scrollbars=yes,status=yes');
	}
}

// Old Existing Functions END

// Detect Device Function (Detect Mobile)
function detect_device(){
	// if(window.innerWidth <= 600) {
	// 	// window.location.replace("url.html");
	// }
}
detect_device();


// Footer Notifications function

// Load notifications function
function load_notificatons(img_src, label, label_url){
	setTimeout(function(){
		document.querySelector("#bottom_notifications .n_img img").setAttribute("src", img_src);
		document.querySelector("#bottom_notifications .n_label").innerHTML=label;
		document.querySelector("#bottom_notifications .n_label").setAttribute("onclick", "window.open('"+label_url+"', 'popup', 'width=880,height=760,scrollbars=no, toolbar=no,status=no,   resizable=yes,menubar=no,location=no,directories=no,top=10,left=10');close_notifications();");
		document.querySelector("#bottom_notifications").style.right="0";
		setTimeout(function(){
			document.querySelector("#bottom_notifications").parentNode.style.overflow="visible";
		}, 300)
	}, 500)
}

// Close notifications function
function close_notifications(){
	document.querySelector("#bottom_notifications").parentNode.style.overflow="hidden";
	setTimeout(function(){
		document.querySelector("#bottom_notifications").style.right="-300px";
	}, 50)
}

// Get browser name Function
var nVer = navigator.appVersion;
var nAgt = navigator.userAgent;
var browserName  = navigator.appName;
var fullVersion  = ''+parseFloat(navigator.appVersion); 
var majorVersion = parseInt(navigator.appVersion,10);
var nameOffset,verOffset,ix;

// In Opera 15+, the true version is after "OPR/" 
if ((verOffset=nAgt.indexOf("OPR/"))!=-1) {
 browserName = "Opera";
 var img_src = "img/opera-logo.png";
 var label = "Opera Extensions";
 var label_url = "";
 fullVersion = nAgt.substring(verOffset+4);
}
// In older Opera, the true version is after "Opera" or after "Version"
else if ((verOffset=nAgt.indexOf("Opera"))!=-1) {
 browserName = "Opera";
 var img_src = "img/opera-logo.png";
 var label = "Opera Extensions";
 var label_url = "";
 fullVersion = nAgt.substring(verOffset+6);
 if ((verOffset=nAgt.indexOf("Version"))!=-1) 
   fullVersion = nAgt.substring(verOffset+8);
}
// In MSIE, the true version is after "MSIE" in userAgent
else if ((verOffset=nAgt.indexOf("MSIE"))!=-1) {
 browserName = "Microsoft Internet Explorer";
 var img_src = "img/ms-ie-logo.png";
 var label = "Microsoft Internet Explorer Extensions";
 var label_url = "";
 fullVersion = nAgt.substring(verOffset+5);
}
// In Chrome, the true version is after "Chrome" 
else if ((verOffset=nAgt.indexOf("Chrome"))!=-1) {
 browserName = "Chrome";
 var img_src = "img/chrome-store-logo.png";
 var label = "Chrome Extensions";
 var label_url = "";
 fullVersion = nAgt.substring(verOffset+7);
}
// In Safari, the true version is after "Safari" or after "Version" 
else if ((verOffset=nAgt.indexOf("Safari"))!=-1) {
 browserName = "Safari";
 var img_src = "img/safari-logo.png";
 var label = "Safari Extensions";
 var label_url = "";
 fullVersion = nAgt.substring(verOffset+7);
 if ((verOffset=nAgt.indexOf("Version"))!=-1) 
   fullVersion = nAgt.substring(verOffset+8);
}
// In Firefox, the true version is after "Firefox" 
else if ((verOffset=nAgt.indexOf("Firefox"))!=-1) {
 browserName = "Firefox";
 var img_src = "img/firefox-logo.png";
 var label = "Firefox Extensions";
 var label_url = "";
 fullVersion = nAgt.substring(verOffset+8);
}
// In most other browsers, "name/version" is at the end of userAgent 
else if ( (nameOffset=nAgt.lastIndexOf(' ')+1) < 
          (verOffset=nAgt.lastIndexOf('/')) ) 
{
 browserName = nAgt.substring(nameOffset,verOffset);
 fullVersion = nAgt.substring(verOffset+1);
 if (browserName.toLowerCase()==browserName.toUpperCase()) {
  browserName = navigator.appName;
 }
}
// trim the fullVersion string at semicolon/space if present
if ((ix=fullVersion.indexOf(";"))!=-1)
   fullVersion=fullVersion.substring(0,ix);
if ((ix=fullVersion.indexOf(" "))!=-1)
   fullVersion=fullVersion.substring(0,ix);

majorVersion = parseInt(''+fullVersion,10);
if (isNaN(majorVersion)) {
 fullVersion  = ''+parseFloat(navigator.appVersion); 
 majorVersion = parseInt(navigator.appVersion,10);
}

// document.write(''
//  +'Browser name  = '+browserName+'<br>'
//  +'Full version  = '+fullVersion+'<br>'
//  +'Major version = '+majorVersion+'<br>'
//  +'navigator.appName = '+navigator.appName+'<br>'
//  +'navigator.userAgent = '+navigator.userAgent);

// Footer Notifications function END


// Menu toggle function
!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1398)}({1398:function(e,t,r){e.exports=r(1399)},1399:function(e,t){var r=function(e,t){var r=t?"block":"none";if(e||window.throwError("element for toggle() not defined: ".concat(e)),e.length>0)for(var n=0;n<e.length;n++){var o=e[n];o||window.throwError("element for toggle() not defined: ".concat(o)),o.style.display=r}else e.style.display=r};window.addEventListener("load",function(){for(var e=document.querySelector("#hamburger-button"),t=document.querySelector("#hamburger-drawer"),n=document.querySelector("#close-drawer-button"),o=document.querySelector("#dark-overlay"),u=!0,l=[e,n],c=0;c<l.length;c++){l[c].addEventListener("click",function(){r([t,o],u),u=!u})}o.addEventListener("click",function(){r([t,o],!1),u=!0})})}});