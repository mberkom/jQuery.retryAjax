/*globals jQuery, window */
(function($) {
    $.retryAjax = function (ajaxParams) {
        var errorCallback;
        ajaxParams.tryCount = (!ajaxParams.tryCount) ? 0 : ajaxParams.tryCount;
        ajaxParams.retryLimit = (!ajaxParams.retryLimit) ? 2 : ajaxParams.retryLimit;
        ajaxParams.suppressErrors = true;
        ajaxParams.retryDelay = (!ajaxParams.retryDelay)? 0 : ajaxParams.retryDelay;

        if (ajaxParams.error) {
            errorCallback = ajaxParams.error;
            delete ajaxParams.error;
        } else {
            errorCallback = function () {

            };
        }

        ajaxParams.complete = function (jqXHR, textStatus) {
            if ($.inArray(textStatus, ['timeout', 'abort', 'error']) > -1) {
                this.tryCount++;
                if (this.tryCount <= this.retryLimit) {

                    // fire error handling on the last try
                    if (this.tryCount === this.retryLimit) {
                        this.error = errorCallback;
                        delete this.suppressErrors;
                    }

                    //try again
                    setTimeout($.ajax, ajaxParams.retryDelay, this)
                    return true;
                }

                
                return true;
            }
        };

        $.ajax(ajaxParams);
    };
}(jQuery));
