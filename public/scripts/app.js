console.log("Sanity Check: JS is working!");

$(document).ready(function(){

	$('#newCakeForm').on('submit', function(e) {
	    e.preventDefault();
	    console.log('new book serialized', $(this).serializeArray());
	    $.ajax({
	      method: 'POST',
	      url: '/api/cakes',
	      data: $(this).serializeArray(),
	      success: newCakeSuccess,
	      // error: newCakeError
	    });
	  });

	function newCakeSuccess(cake) {
		console.log(cake);
		$('#newCakeForm')[0].reset()
	}

});
