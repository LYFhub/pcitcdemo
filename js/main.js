// 取得所有的tab 和 tab content
var allTabsHeader = $('.topcontent ul.nav-tabs li a');
var allTabContent = $('.topcontent div.tabcontent');
// 当点击某一个tab时，判断出当前点击tab的序号，然后将对应序号的tab content 设置为显示，其他的隐藏
function changetab(event) {
	// 阻止a标签的默认行为和冒泡，防止更改url
	event.stopPropagation();
	event.preventDefault();
	for (var i = 0, j = allTabsHeader.length; i < j; i++) {
		if (event.target.className === allTabsHeader[i].className){
			for(k = 0,num = allTabContent.length; k < num; k++) {
				$(allTabContent[k]).css('display','none');
			}
			$(allTabContent[i]).css('display','block');
			drawChart(i-1);// 先显示，然后再画图，否则尺寸会有问题
		}
	}
}

// window.onresize(fucntion () {
// 	event.stopPropagation();
// 	event.preventDefault();
// 	drawChart(0); // 当用户缩放浏览器窗口时，重新绘制chart
// });