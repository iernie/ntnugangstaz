$(document).ready(function() {
	$('#toggleContent').hide();
	$('#toggleButton').click(function() {
		if ($('#toggleButton').html().split(" ")[2] == "show") {
			$('#toggleButton').html("Click to hide videos");
		} else {
			$('#toggleButton').html("Click to show videos");
		}
		$('#toggleContent').slideToggle();
	});
});