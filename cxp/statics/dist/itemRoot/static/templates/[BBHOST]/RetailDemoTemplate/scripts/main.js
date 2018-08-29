var xsrf = (function () {
    var requestHeaderName = 'X-BBXSRF';
    var cookieName = 'BBXSRF';

    return {
        getToken: getToken,
        getRequestHeaderName: getRequestHeaderName,
        getCookieName: getCookieName,
        getFieldName: getCookieName
    };

    function getToken () {
        var value = '; ' + document.cookie,
            parts = '',
            cookie = getCookieName();

        parts = value.split('; ' + cookie + '=');
        if (parts.length == 2) {
            var token = parts.pop().split(';').shift();
            return token;
        }
        return undefined;
    }

    function getCookieName () {
        return cookieName;
    }

    function getRequestHeaderName () {
        return requestHeaderName;
    }
}());

enableXsrfTokenPrefilter();

/**
 * Add a jQuery.ajax prefilter to automatically insert the XSRF token in outgoing requests
 *
 * @param {Function()<string>} xsrfToken - A nullary function that returns the xsrf token
 * @param {Object} xsrfOptions - Configuration containing requestHeader key
 * @return void
 */
function enableXsrfTokenPrefilter() {
    if (!window.jQuery) { return; }

    window.jQuery.ajaxPrefilter(function(xhrOptions, original, xhr) {
        if (xhrOptions.xsrf === false || xhrOptions.type.toUpperCase() === 'GET') {
            return;
        }

        // set xsrf request header
        xhr.setRequestHeader(xsrf.getRequestHeaderName(), xhrOptions.xsrf || xsrf.getToken());
    });
}
