addEventListener('DOMContentLoaded', function () {
	pickmeup('.range', {
		flat : true,
		mode : 'range'
	});
	var plus_5_days = new Date;
	plus_5_days.setDate(plus_5_days.getDate() + 5);
	pickmeup('input', {
		position       : 'right',
		hide_on_select : false
	});

	alert(pickmeup.get_date());

});
