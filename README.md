jQuery.retryAjax
================

Overload method for $.ajax that provides the ability to try the request over if it fails the first time.

<script type="text/javascript" src="retryAjax-min.js"></script>
<script type="text/javascript">
	$.retryAjax({
		url: DESTINATION,
		timeout: 5000,
		retryLimit: 1,
		success: function() {
			alert("It worked!");
		}
	});
</script>