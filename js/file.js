$(document).ready
(
    function ()
    {
        var xhr = new XMLHttpRequest();
		$("#input_file").change
        (
            function(event)
            {
		        var file = event.target.files[0];
			    xhr.open('POST', 'ajax_controller.php', true);
			    xhr.setRequestHeader("X_FILENAME", file.name);
			    xhr.send(file);
            }
        );
	}
);
