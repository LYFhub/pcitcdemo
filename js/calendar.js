$(document).ready(function() {
	$('#calendar').fullCalendar({
		header: {
			left: 'prev,next today',
			center: 'title',
			right: 'month,agendaWeek,agendaDay'
		},
		defaultDate: '2017-05-12',
		navLinks: true, // can click day/week names to navigate views
		selectable: true,
		selectHelper: true,
		select: function(start, end) {
			var title = prompt('Event Title:');
			var eventData;
			if (title) {
				eventData = {
					title: title,
					start: start,
					end: end
				};
				$('#calendar').fullCalendar('renderEvent', eventData, true); // stick? = true
			}
			$('#calendar').fullCalendar('unselect');
		},
		editable: true,
		eventLimit: true, // allow "more" link when too many events
		events: [
			{
				title: '项目A',
				start: '2017-05-01'
			},
			{
				title: '项目A',
				start: '2017-05-07',
				end: '2017-05-10'
			},
			{
				id: 999,
				title: '项目A',
				start: '2017-05-09T16:00:00'
			},
			{
				id: 999,
				title: '项目A',
				start: '2017-05-16T16:00:00'
			},
			{
				title: '项目B',
				start: '2017-05-11',
				end: '2017-05-13'
			},
			{
				title: '项目B',
				start: '2017-05-12T10:30:00',
				end: '2017-05-12T12:30:00'
			},
			{
				title: '项目B',
				start: '2017-05-12T12:00:00'
			},
			{
				title: '项目C',
				start: '2017-05-12T14:30:00'
			},
			{
				title: '项目C',
				start: '2017-05-12T17:30:00'
			},
			{
				title: '项目C',
				start: '2017-05-12T20:00:00'
			},
			{
				title: '项目C',
				start: '2017-05-13T07:00:00'
			},
			{
				title: '项目C',
				url: 'http://baidu.com/',
				start: '2017-05-28'
			}
		]
	});
	
});