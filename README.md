jQuery.retryAjax
================

Overload method for $.ajax that provides the ability to automatically try the request over if it fails the first time.

## Usage

```html
<script type="text/javascript" src="dist/jquery.retryAjax.min.js"></script>
<script type="text/javascript">
	// Implments everything in $.ajax 
	// Overrides complete method, so be sure not to use that...
	$.retryAjax({
		url: DESTINATION,
		timeout: 5000,
		retryLimit: 1,
		success: function() {
			alert("It worked!");
		}, 
		error: function() {
			// fires after the last try is unsuccessful
		}
	});
</script>
```