document.addEventListener("DOMContentLoaded", function() {
    var cookieBanner = document.getElementById("cookieBanner");
    var cookieConsent = document.getElementById("cookieConsent");

    if (!getCookie("cookieConsent")) {
        cookieBanner.style.display = "block";
    }

    cookieConsent.addEventListener("click", function() {
        setCookie("cookieConsent", true, 365);
        cookieBanner.style.display = "none";
    });
});

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1, cookie.length);
        }
        if (cookie.indexOf(nameEQ) === 0) {
            return cookie.substring(nameEQ.length, cookie.length);
        }
    }
    return null;
}

document.addEventListener("DOMContentLoaded", function() {
const cookieBanner = document.getElementById("cookieBanner");
const cookieOverlay = document.getElementById("cookieOverlay");
const cookieConsentButton = document.getElementById("cookieConsent");

cookieConsentButton.addEventListener("click", function() {
cookieBanner.style.display = "none";
cookieOverlay.style.display = "none";
});
});
