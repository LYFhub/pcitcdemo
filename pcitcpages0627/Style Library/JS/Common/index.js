$(document).ready(function() {
	if ($('.barchart').length != 0 && $('.piechart').length != 0 && $('.linechart').length != 0) {
		drawChart(0);
	}
	// if (location.href.toLowerCase().indexOf("index") > 0) {
	// 	$('header .pic_navbar .navbar-nav li').removeClass('active');
	// 	$('.homepage').addClass("active");
	// } else {
	// 	$('header .pic_navbar .navbar-nav li').removeClass('active');
	// 	$('.' + localStorage.getItem("clickitem")).addClass('active');
	// }

});
if (location.href.toLowerCase().indexOf("index") > 0) {
		$('header .pic_navbar .navbar-nav li').removeClass('active');
		$('.homepage').addClass("active");
	} else {
		$('header .pic_navbar .navbar-nav li').removeClass('active');
		$('.' + localStorage.getItem("clickitem")).addClass('active');
	}

// 通过localstorage保存点击的菜单信息，然后添加active效果
function addActive(event) {
	//$('header .pic_navbar .navbar-nav li').click(function(event) {
		event.stopPropagation();
		$('header .pic_navbar .navbar-nav li').removeClass('active');
		localStorage.setItem("clickitem", event.currentTarget.className);
	//});
}


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
	$('.rightcontent .topcontent .nav-tabs li a').removeClass('active');
	$(event.target).addClass('active'); // 添加active效果

	for (var i = 0, j = allTabsHeader.length; i < j; i++) {
		if (event.target.className === allTabsHeader[i].className) {
			for (k = 0, num = allTabContent.length; k < num; k++) {
				$(allTabContent[k]).css('display', 'none');
			}
			$(allTabContent[i]).css('display', 'block'); // 先显示，然后再画图，否则尺寸会有问题
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

function goleft(btn) {
	console.log("right more");
	var ulleft = parseInt($(event.target).next().css("left"));
	if (ulleft > -470) {
		$(event.target).next().animate({
			left: "-=470px"
		}, 300);
	} else {
		console.log("右边没有更多tab");
		return;
	}
}

function goright(btn) {
	console.log("left more");
	var ulleft = parseInt($(event.target).prev().css("left"));
	if (ulleft >= -470 && ulleft < 0) {
		$(event.target).prev().animate({
			left: "+=470px"
		}, 300);
	} else {
		console.log("左边没有更多tab");
		return;
	}
}

function shownextdiv(event) {
	event.stopPropagation();
	console.log("show next div");
	$(event.target).nextAll("div").css({
		"display": "block"
	});
}

$('body').click(function(event) {
	$('.userinfo >div >div >div').css({
		"display": "none"
	});
});

// 添加“回到顶部”按钮
$(window).scroll(function() {
	var a = $(this).scrollTop(); //现在滚动条距离顶端的距离
	if (a >= 300) {
		$(".backtotop").fadeIn();
	} else {
		$(".backtotop").fadeOut();
	}
});