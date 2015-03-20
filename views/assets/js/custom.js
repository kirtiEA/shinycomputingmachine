/* Custom Javascript */

$(document).ready( function () {

	/* Reassign Function */

	$('.reassign_task').on('click', function () {
		console.log(this.id);
		$('#modalSlideUp').removeClass('.hide');
		$('#modalSlideUp').modal('show');
	});

	/* Reassign Function Ends */
});