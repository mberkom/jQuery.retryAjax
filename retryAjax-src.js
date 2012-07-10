jQuery.retryAjax = function (ajaxParams) {
    if (!ajaxParams.timeout) ajaxParams.timeout = 10000;
    if (!ajaxParams.tryCount) ajaxParams.tryCount = 0;
    if (!ajaxParams.retryLimit) ajaxParams.retryLimit = 2;

    ajaxParams.complete = function (jqXHR, textStatus) {

        if ($.inArray(textStatus, ['timeout', 'abort', 'error']) > -1) {
            this.tryCount++;
            if (this.tryCount <= this.retryLimit) {
                //try again
                $.ajax(this);
                return true;
            }
            alert('There was a server error.  Please refresh the page.  If the issue persists, give us a call. Thanks!');
            return true;
        }
    };

    $.ajax(ajaxParams);
};