function showCookieNotice() {
    if (this.window.localStorage.getItem('hasSeenCookieHinweis')) {
        document.getElementById("cookiehinweis").style="display:none";
    }
}

function cookieOk() {
    document.getElementById("cookiehinweis").style="display:none";
    window.localStorage.setItem('hasSeenCookieHinweis', '1');
}

/* Nach Experiment:
localStorage.removeItem('hasSeenCookieHinweis');
*/
