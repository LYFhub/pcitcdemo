$(document).ready(function() {
	$('header .pic_navbar .nav-tabs li').click(function(event) {
		event.stopPropagation();
		$('header .pic_navbar .nav-tabs li').removeClass('active');
		$(event.currentTarget).addClass('active');
		// 现在加不上，是因为每个页面都有自己的nav，点击添加之后立刻跳转到了新页面
	});
	if ($('.barchart').length != 0 && $('.piechart').length != 0 && $('.linechart').length != 0) {
		drawChart(0);
	}
});

// 初始化datepicker
if ($(".inputdatepicker").datetimepicker) {
	$(".inputdatepicker").datetimepicker({
		language: "zh-CN",
		autoclose: true, //选中之后自动隐藏日期选择框
		todayBtn: true, //今日按钮
		todayHighlight: true,
		format: "yyyy-mm-dd hh:ii", //日期格式
	});
}

// 当点击某一个tab时，判断出当前点击tab的序号，然后将对应序号的tab content 设置为显示，其他的隐藏
function changetab(event) {
	// 阻止a标签的默认行为和冒泡，防止更改url
	event.stopPropagation();
	event.preventDefault();

	// 取得所有的tab 和 tab content
	var allTabsHeader = $('.topcontent ul.nav-tabs li a');
	var allTabContent = $('.topcontent div.tabcontent');

	for (var i = 0, j = allTabsHeader.length; i < j; i++) {
		if (event.target.className === allTabsHeader[i].className) {
			for (k = 0, num = allTabContent.length; k < num; k++) {
				$(allTabContent[k]).css('display', 'none');
			}
			$(allTabContent[i]).css('display', 'block');  // 先显示，然后再画图，否则尺寸会有问题
			if (i == 0) {
				drawChart(i);
			} else {
				drawChart(i - 1); 
			}
			
		}
	}
}

function nextPage(event) {
	alert('下一页');
}

function prevPage(event) {
	alert('上一页');
}