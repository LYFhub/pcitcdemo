$(document).ready(function() {
	var initialLocaleCode = 'zh-cn';
	$('#calendar').fullCalendar({
		height: 450,
		buttonText: {
			today: '今天',
			month: '月',
			week: '周',
			day: '日'
		},
		allDayText: "全天",
		locale: initialLocaleCode,

		header: {
			left: '',
			center: 'title',
			right: 'prev,next'
		},
		defaultDate: '2017-06-05',
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
				$('#calendar').fullCalendar('clientEvents');
			}
			$('#calendar').fullCalendar('unselect');
		},
		editable: true,
		eventLimit: true, // allow "more" link when too many events
		events: [{
			title: '项目A',
			start: '2017-05-01'
		}, {
			title: '项目A',
			start: '2017-05-07'
		}, {
			id: 999,
			title: '项目A',
			start: '2017-05-09'
		}, {
			id: 999,
			title: '项目A',
			start: '2017-05-16'
		}, {
			title: '项目B',
			start: '2017-05-11'
		}, {
			title: '项目B',
			start: '2017-05-12'
		}, {
			title: '项目B',
			start: '2017-05-12'
		}, {
			title: '项目C',
			start: '2017-05-12'
		}, {
			title: '项目C',
			start: '2017-05-13'
		}, {
			title: '项目C',
			url: 'http://baidu.com/',
			start: '2017-05-28'
		}],
		eventColor: "#4674c7"
	});

});