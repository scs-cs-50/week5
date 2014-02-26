$.ajax({
	type: "POST",
	    url: "https://theserver.org/my/codeonservertocall",
	    cache: false,
	    data: formData,
	    success: function(data) {
	    $('#selector').html(data);
	    var my_variable = $("#theselector:selected").text();
	    alert('Updated to ' + myvariable + '.');
	    $('#selector').selectmenu("refresh");
	}
    });
});