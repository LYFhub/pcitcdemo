$(document).ready(function() {

	var data = [{
		"num": "20170602001",
		"title": "中国石化智能工厂提升项目需求(燕山)设计设备全生命周期管理1",
		"businessline": "生产管控一体化",
		"result": "拒绝",
		"status": "待可行性研究",
		"name": "智能供应链提升",
		"position": "李明宇",
		"salary": "85%",
		"start_date": "2011/04/25",
		"office": "85%",
		"extn": "5421",
		"source": "中石化信息部",
		"company": "燕山",
		"companypeople": "王海波",
		"designpeople": "王芳",
		"excutepeople": "李晨",
		"requirepeople": "郑小凡",
		"relatedrequire": "中国石化智能工厂提升项目需求"
	}, {
		"num": "20170602011",
		"title": "中国石化智能工厂提升项目需求(总部)设计设备全生命周期管理1",
		"businessline": "全流程一体化优化",
		"result": "同意",
		"status": "审批未通过",
		"name": "低温热核算优化",
		"position": "任延静",
		"salary": "85%",
		"start_date": "2011/07/25",
		"office": "85%",
		"extn": "8422",
		"source": "中石化信息部",
		"company": "燕山",
		"companypeople": "王海波",
		"designpeople": "王芳",
		"excutepeople": "李晨",
		"requirepeople": "郑小凡",
		"relatedrequire": "中国石化智能工厂提升项目需求"
	}, {
		"num": "20170602002",
		"title": "中国石化智能工厂提升项目需求(镇海)设计设备全生命周期管理1",
		"businessline": "全生命周期一体化资产管理",
		"result": "同意",
		"status": "待审批",
		"name": "智能供应链提升",
		"position": "段传涛",
		"salary": "85%",
		"start_date": "2011/07/25",
		"office": "85%",
		"extn": "8422",
		"source": "中石化信息部",
		"company": "燕山",
		"companypeople": "王海波",
		"designpeople": "王芳",
		"excutepeople": "李晨",
		"requirepeople": "郑小凡",
		"relatedrequire": "中国石化智能工厂提升项目需求"
	}, {
		"num": "20170602002",
		"title": "中国石化智能工厂提升项目需求(镇海)设计设备全生命周期管理1",
		"businessline": "全生命周期一体化资产管理",
		"result": "拒绝",
		"status": "待审批",
		"name": "标准化",
		"position": "李明宇",
		"salary": "85%",
		"start_date": "2011/07/25",
		"office": "85%",
		"extn": "8422",
		"source": "中石化信息部",
		"company": "燕山",
		"companypeople": "王海波",
		"designpeople": "王芳",
		"excutepeople": "李晨",
		"requirepeople": "郑小凡",
		"relatedrequire": "中国石化智能工厂提升项目需求"
	}, {
		"num": "20170602002",
		"title": "中国石化智能工厂提升项目需求(镇海)设计设备全生命周期管理1",
		"businessline": "全生命周期一体化资产管理",
		"result": "同意",
		"status": "待审批",
		"name": "智能供应链提升",
		"position": "段传涛",
		"salary": "85%",
		"start_date": "2011/07/25",
		"office": "85%",
		"extn": "8422",
		"source": "中石化信息部",
		"company": "燕山",
		"companypeople": "王海波",
		"designpeople": "王芳",
		"excutepeople": "李晨",
		"requirepeople": "郑小凡",
		"relatedrequire": "中国石化智能工厂提升项目需求"
	}, {
		"num": "20170602002",
		"title": "中国石化智能工厂提升项目需求(镇海)设计设备全生命周期管理1",
		"businessline": "全生命周期一体化资产管理",
		"result": "同意",
		"status": "待审批",
		"name": "智能供应链提升",
		"position": "段传涛",
		"salary": "85%",
		"start_date": "2011/07/25",
		"office": "85%",
		"extn": "8422",
		"source": "中石化信息部",
		"company": "燕山",
		"companypeople": "王海波",
		"designpeople": "王芳",
		"excutepeople": "李晨",
		"requirepeople": "郑小凡",
		"relatedrequire": "中国石化智能工厂提升项目需求"
	}, {
		"num": "20170602002",
		"title": "中国石化智能工厂提升项目需求(镇海)设计设备全生命周期管理1",
		"businessline": "全生命周期一体化资产管理",
		"result": "同意",
		"status": "待审批",
		"name": "智能供应链提升",
		"position": "段传涛",
		"salary": "85%",
		"start_date": "2011/07/25",
		"office": "85%",
		"extn": "8422",
		"source": "中石化信息部",
		"company": "燕山",
		"companypeople": "王海波",
		"designpeople": "王芳",
		"excutepeople": "李晨",
		"requirepeople": "郑小凡",
		"relatedrequire": "中国石化智能工厂提升项目需求"
	}, {
		"num": "20170602002",
		"title": "中国石化智能工厂提升项目需求(镇海)设计设备全生命周期管理1",
		"businessline": "全生命周期一体化资产管理",
		"result": "同意",
		"status": "待审批",
		"name": "智能供应链提升",
		"position": "段传涛",
		"salary": "85%",
		"start_date": "2011/07/25",
		"office": "85%",
		"extn": "8422",
		"source": "中石化信息部",
		"company": "燕山",
		"companypeople": "王海波",
		"designpeople": "王芳",
		"excutepeople": "李晨",
		"requirepeople": "郑小凡",
		"relatedrequire": "中国石化智能工厂提升项目需求"
	}, {
		"num": "20170602002",
		"title": "中国石化智能工厂提升项目需求(镇海)设计设备全生命周期管理1",
		"businessline": "全生命周期一体化资产管理",
		"result": "同意",
		"status": "待审批",
		"name": "智能供应链提升",
		"position": "段传涛",
		"salary": "85%",
		"start_date": "2011/07/25",
		"office": "85%",
		"extn": "8422",
		"source": "中石化信息部",
		"company": "燕山",
		"companypeople": "王海波",
		"designpeople": "王芳",
		"excutepeople": "李晨",
		"requirepeople": "郑小凡",
		"relatedrequire": "中国石化智能工厂提升项目需求"
	}];

	// 首页
	$('#checktableleft').dataTable({
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
		columns: [{
			data: 'name'
		}, {
			data: 'position'
		}, {
			data: 'salary'
		}]
	});
	$('#checktablecenter').dataTable({
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
		columns: [{
			data: 'name'
		}, {
			data: 'position'
		}, {
			data: 'salary'
		}]
	});
	$('#checktableright').dataTable({
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
		columns: [{
			data: 'name'
		}, {
			data: 'position'
		}, {
			data: 'salary'
		}]
	});

	// 范围管理
	$('#mysubmittable').dataTable({
		bInfo: false, // 去掉左下角的每页显示多少行的信息
		iDisplayLength: 6, // 控制每页显示的行数
		bFilter: true, // 过滤
		bLengthChange: false, // 去掉可以更改显示行数的dropdown list
		bSort: false, // 去掉排序功能和按钮
		data: data, // 从data数组中获取数据
		oLanguage: {
			sProcessing: "正在加载中......",
			sEmptyTable: "表中无数据存在！",
			sZeroRecords: "没有检索到数据",
			sSearchPlaceholder: "视图内搜索",
			sSearch: "",
			oPaginate: {
				sPrevious: '<',
				sNext: '>'
			}
		},
		columns: [{
			data: 'num'
		}, {
			data: 'title'
		}, {
			data: 'businessline'
		}, {
			data: 'result'
		}, {
			data: 'status'
		}, {
			data: 'start_date'
		}]
	});

	$('#allrequiretable').dataTable({
		bInfo: false, // 去掉左下角的每页显示多少行的信息
		iDisplayLength: 6, // 控制每页显示的行数
		bFilter: true, // 过滤
		bLengthChange: false, // 去掉可以更改显示行数的dropdown list
		bSort: false, // 去掉排序功能和按钮
		data: data, // 从data数组中获取数据
		oLanguage: {
			sProcessing: "正在加载中......",
			sEmptyTable: "表中无数据存在！",
			sZeroRecords: "没有检索到数据",
			sSearchPlaceholder: "视图内搜索",
			sSearch: "",
			oPaginate: {
				sPrevious: '<',
				sNext: '>'
			}
		},
		columns: [{
			data: 'num'
		}, {
			data: 'title'
		}, {
			data: 'businessline'
		}, {
			data: 'result'
		}, {
			data: 'status'
		}, {
			data: 'start_date'
		}]
	});

	$('#feasibilityrequiretable').dataTable({
		bInfo: false, // 去掉左下角的每页显示多少行的信息
		iDisplayLength: 6, // 控制每页显示的行数
		bFilter: true, // 过滤
		bLengthChange: false, // 去掉可以更改显示行数的dropdown list
		bSort: false, // 去掉排序功能和按钮
		data: data, // 从data数组中获取数据
		oLanguage: {
			sProcessing: "正在加载中......",
			sEmptyTable: "表中无数据存在！",
			sZeroRecords: "没有检索到数据",
			sSearchPlaceholder: "视图内搜索",
			sSearch: "",
			oPaginate: {
				sPrevious: '<',
				sNext: '>'
			}
		},
		columns: [{
			data: 'num'
		}, {
			data: 'title'
		}, {
			data: 'status'
		}, {
			data: 'requirepeople'
		}, {
			data: 'start_date'
		}]
	});

	$('#approvalrequiretable').dataTable({
		bInfo: false, // 去掉左下角的每页显示多少行的信息
		iDisplayLength: 6, // 控制每页显示的行数
		bFilter: true, // 过滤
		bLengthChange: false, // 去掉可以更改显示行数的dropdown list
		bSort: false, // 去掉排序功能和按钮
		data: data, // 从data数组中获取数据
		oLanguage: {
			sProcessing: "正在加载中......",
			sEmptyTable: "表中无数据存在！",
			sZeroRecords: "没有检索到数据",
			sSearchPlaceholder: "视图内搜索",
			sSearch: "",
			oPaginate: {
				sPrevious: '<',
				sNext: '>'
			}
		},
		columns: [{
			data: 'num'
		}, {
			data: 'title'
		}, {
			data: 'source'
		}, {
			data: 'company'
		}, {
			data: 'status'
		}, {
			data: 'start_date'
		}]
	});

	$('#needresearchrequiretable').dataTable({
		bInfo: false, // 去掉左下角的每页显示多少行的信息
		iDisplayLength: 6, // 控制每页显示的行数
		bFilter: true, // 过滤
		bLengthChange: false, // 去掉可以更改显示行数的dropdown list
		bSort: false, // 去掉排序功能和按钮
		data: data, // 从data数组中获取数据
		oLanguage: {
			sProcessing: "正在加载中......",
			sEmptyTable: "表中无数据存在！",
			sZeroRecords: "没有检索到数据",
			sSearchPlaceholder: "视图内搜索",
			sSearch: "",
			oPaginate: {
				sPrevious: '<',
				sNext: '>'
			}
		},
		columns: [{
			data: 'num'
		}, {
			data: 'title'
		}, {
			data: 'company'
		}, {
			data: 'companypeople'
		}, {
			data: 'designpeople'
		}, {
			data: 'excutepeople'
		}, {
			data: 'requirepeople'
		}, {
			data: 'start_date'
		}]
	});

	$('#specsrequiretable').dataTable({
		bInfo: false, // 去掉左下角的每页显示多少行的信息
		iDisplayLength: 6, // 控制每页显示的行数
		bFilter: true, // 过滤
		bLengthChange: false, // 去掉可以更改显示行数的dropdown list
		bSort: false, // 去掉排序功能和按钮
		data: data, // 从data数组中获取数据
		oLanguage: {
			sProcessing: "正在加载中......",
			sEmptyTable: "表中无数据存在！",
			sZeroRecords: "没有检索到数据",
			sSearchPlaceholder: "视图内搜索",
			sSearch: "",
			oPaginate: {
				sPrevious: '<',
				sNext: '>'
			}
		},
		columns: [{
			data: 'title'
		}, {
			data: 'relatedrequire'
		}, {
			data: 'requirepeople'
		}, {
			data: 'start_date'
		}]
	});

	$('#surerequiretable').dataTable({
		bInfo: false, // 去掉左下角的每页显示多少行的信息
		iDisplayLength: 6, // 控制每页显示的行数
		bFilter: true, // 过滤
		bLengthChange: false, // 去掉可以更改显示行数的dropdown list
		bSort: false, // 去掉排序功能和按钮
		data: data, // 从data数组中获取数据
		oLanguage: {
			sProcessing: "正在加载中......",
			sEmptyTable: "表中无数据存在！",
			sZeroRecords: "没有检索到数据",
			sSearchPlaceholder: "视图内搜索",
			sSearch: "",
			oPaginate: {
				sPrevious: '<',
				sNext: '>'
			}
		},
		columns: [{
			data: 'num'
		}, {
			data: 'title'
		}, {
			data: 'source'
		}, {
			data: 'company'
		}, {
			data: 'status'
		}, {
			data: 'requirepeople'
		}, {
			data: 'start_date'
		}]
	});
});