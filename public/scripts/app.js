console.log("Sanity Check: JS is working!");
var template;
var allCakes = [];
$(document).ready(function(){

	var source = $('#cake-li-template').html();
			template = Handlebars.compile(source);


	$.ajax({
        method: 'GET',
        url: '/api/cakes',
				data: $(this).serializeArray(),
        success: handleSuccess,
        // error: handleError
    });

	$('#newCakeForm').on('submit', function(e) {
	    e.preventDefault();
	    console.log('new cake serialized', $(this).serializeArray());
	    $.ajax({
	      method: 'POST',
	      url: '/api/cakes',
	      data: $(this).serializeArray(),
	      success: newCakeSuccess,
	      // error: newCakeError
	    });
	  });
		function render() {
			$('#cake-list').empty();

			for (var i = 0; i < allCakes.length; i++) {
				var cakesHtml = template({
					name : allCakes[i].name,
					cake : allCakes[i].cake,
					frosting : allCakes[i].frosting,
					description : allCakes[i].description
				})

				$('#cake-list').append(cakesHtml)
		}
	}

	function handleSuccess(json) {
			allCakes = json;
			render();
			}


	function newCakeSuccess(cake) {
		allCakes.push(cake);
		render();
		$('#newCakeForm')[0].reset()
	}

});
