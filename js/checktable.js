$(document).ready(function(){

    var data = [
	    {
	        "name":       "Tiger Nixon",
	        "position":   "System Architect",
	        "salary":     "$3,120",
	        "start_date": "2011/04/25",
	        "office":     "Edinburgh",
	        "extn":       "5421"
	    },
	    {
	        "name":       "Garrett Winters",
	        "position":   "Director",
	        "salary":     "$5,300",
	        "start_date": "2011/07/25",
	        "office":     "Edinburgh",
	        "extn":       "8422"
	    },
	    {
	        "name":       "Garrett Winters",
	        "position":   "Director",
	        "salary":     "$5,300",
	        "start_date": "2011/07/25",
	        "office":     "Edinburgh",
	        "extn":       "8422"
	    },
	    {
	        "name":       "Garrett Winters",
	        "position":   "Director",
	        "salary":     "$5,300",
	        "start_date": "2011/07/25",
	        "office":     "Edinburgh",
	        "extn":       "8422"
	    },
	    {
	        "name":       "Garrett Winters",
	        "position":   "Director",
	        "salary":     "$5,300",
	        "start_date": "2011/07/25",
	        "office":     "Edinburgh",
	        "extn":       "8422"
	    },
	    {
	        "name":       "Garrett Winters",
	        "position":   "Director",
	        "salary":     "$5,300",
	        "start_date": "2011/07/25",
	        "office":     "Edinburgh",
	        "extn":       "8422"
	    },
	    {
	        "name":       "Garrett Winters",
	        "position":   "Director",
	        "salary":     "$5,300",
	        "start_date": "2011/07/25",
	        "office":     "Edinburgh",
	        "extn":       "8422"
	    },
	    {
	        "name":       "bbb",
	        "position":   "Director",
	        "salary":     "$5,300",
	        "start_date": "2011/07/25",
	        "office":     "Edinburgh",
	        "extn":       "8422"
	    },
	    {
	        "name":       "bbb",
	        "position":   "Director",
	        "salary":     "$5,300",
	        "start_date": "2011/07/25",
	        "office":     "Edinburgh",
	        "extn":       "8422"
	    }
	];

	$('#checktableleft').dataTable( {
		bInfo: false, // 去掉左下角的每页显示多少行的信息
		iDisplayLength: 6, // 控制每页显示的行数
		bFilter: false, // 去掉过滤
		bLengthChange: false, // 去掉可以更改显示行数的dropdown list
		bSort: false, // 去掉排序功能和按钮
	    data: data, // 从data数组中获取数据
	    oLanguage: {
	    	sProcessing: "正在加载中......",
	    	sEmptyTable: "表中无数据存在！",
	    	oPaginate: {
	    		sPrevious: '<',
	    		sNext: '>'
	    	}
	    },
	    columns: [
	        { data: 'name' },
	        { data: 'position' },
	        { data: 'salary' },
	        { data: 'office' }
	    ]
	} );
	$('#checktablecenter').dataTable( {
		bInfo: false, // 去掉左下角的每页显示多少行的信息
		iDisplayLength: 6, // 控制每页显示的行数
		bFilter: false, // 去掉过滤
		bLengthChange: false, // 去掉可以更改显示行数的dropdown list
		bSort: false, // 去掉排序功能和按钮
	    data: data, // 从data数组中获取数据
	    oLanguage: {
	    	sProcessing: "正在加载中......",
	    	sEmptyTable: "表中无数据存在！",
	    	oPaginate: {
	    		sPrevious: '<',
	    		sNext: '>'
	    	}
	    },
	    columns: [
	        { data: 'name' },
	        { data: 'position' },
	        { data: 'salary' },
	        { data: 'office' }
	    ]
	} );
	$('#checktableright').dataTable( {
		bInfo: false, // 去掉左下角的每页显示多少行的信息
		iDisplayLength: 6, // 控制每页显示的行数
		bFilter: false, // 去掉过滤
		bLengthChange: false, // 去掉可以更改显示行数的dropdown list
		bSort: false, // 去掉排序功能和按钮
	    data: data, // 从data数组中获取数据
	    oLanguage: {
	    	sProcessing: "正在加载中......",
	    	sEmptyTable: "表中无数据存在！",
	    	oPaginate: {
	    		sPrevious: '<',
	    		sNext: '>'
	    	}
	    },
	    columns: [
	        { data: 'name' },
	        { data: 'position' },
	        { data: 'salary' },
	        { data: 'office' }
	    ]
	} );
});