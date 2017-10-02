// top navigation toggle button for mobile devices
var toggleNav = function () {
    var navMenuClasses = document.getElementById("navbar-collapse").classList;
    if (navMenuClasses.contains('collapse')) {
        navMenuClasses.remove("collapse");
    }
    else {
        navMenuClasses.add("collapse");
    }
};
var navbarButton = document.getElementById("navbar-button");
navbarButton.addEventListener("click", toggleNav, false);
//google analytics
(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments);
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m);
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
ga('create', 'UA-92769796-1', 'auto');
ga('send', 'pageview');
