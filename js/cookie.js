function showCookieNotice() {
    if (this.window.localStorage.getItem('cCookieHinweis')) {
        document.getElementById("cookiehinweis").style="display:none";
    }
}

function cookieOk() {
    document.getElementById("cookiehinweis").style="display:none";
    window.localStorage.setItem('cCookieHinweis', '1');
}

/* Nach Experiment:
localStorage.removeItem('cCookieHinweis');
*/
