function dtime_nums(e, b) {
    var a = new Date();
    a.setDate(a.getDate() + e + 1);
    var f = "";
    if (a.getDate() < 10) {
        f = "0"
    }
    f += a.getDate();
    var c = "";
    if (a.getMonth() + 1 < 10) {
        c = "0"
    }
    c += a.getMonth() + 1;
    if (b === !0) {
        document.write(f + "." + c + "." + a.getFullYear())
    } else {
        document.write(c + "." + f + "." + a.getFullYear())
    }
};

window.isShow = 0;
var stateObj = {
    foo: "bar"
};
var curURL = window.location.href;
var curTitle = document.title;
history.pushState(stateObj, curTitle, curURL);
window.onpopstate = function(a) {
    if (isShow === 0) {
        history.pushState(stateObj, curTitle, curURL);
        document.getElementById("comeback").style.display = "block";
        isShow = 1
    }
};
document.onmouseout = function(a) {
    if (a.clientY < 0 && window.isShow == 0) {
        document.getElementById("comeback").style.display = "block";
        isShow = 1
    }
    document.getElementById("comeback").onclick = function(b) {
        if (b.target.id == "comeback") {
            document.getElementById("comeback").style.display = "none"
        }
    }
};


$(document).ready(function(){
	$("a").on("click", function (event) {
		event.preventDefault(); 
		let top = $("#form").offset().top; 
	$('body,html').animate({scrollTop: top}, 800); 
	});
});