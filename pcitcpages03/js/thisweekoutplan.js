$(document).ready(function() {
    var data = [{
        "name": "智能供应链提升",
        "position": "李明宇",
        "salary": "85%",
        "start_date": "2011/04/25",
        "office": "85%",
        "extn": "5421"
    }, {
        "name": "低温热核算优化",
        "position": "任延静",
        "salary": "85%",
        "start_date": "2011/07/25",
        "office": "85%",
        "extn": "8422"
    }, {
        "name": "智能供应链提升",
        "position": "段传涛",
        "salary": "85%",
        "start_date": "2011/07/25",
        "office": "85%",
        "extn": "8422"
    }, {
        "name": "标准化",
        "position": "李明宇",
        "salary": "85%",
        "start_date": "2011/07/25",
        "office": "85%",
        "extn": "8422"
    }, {
        "name": "智能供应链提升",
        "position": "段传涛",
        "salary": "85%",
        "start_date": "2011/07/25",
        "office": "85%",
        "extn": "8422"
    }, {
        "name": "智能供应链提升",
        "position": "段传涛",
        "salary": "85%",
        "start_date": "2011/07/25",
        "office": "85%",
        "extn": "8422"
    }, {
        "name": "智能供应链提升",
        "position": "段传涛",
        "salary": "85%",
        "start_date": "2011/07/25",
        "office": "85%",
        "extn": "8422"
    }, {
        "name": "智能供应链提升",
        "position": "段传涛",
        "salary": "85%",
        "start_date": "2011/07/25",
        "office": "85%",
        "extn": "8422"
    }, {
        "name": "智能供应链提升",
        "position": "段传涛",
        "salary": "85%",
        "start_date": "2011/07/25",
        "office": "85%",
        "extn": "8422"
    }];
    // 先用datatable生成table
    $('#thisweekoutplan').dataTable({
        bInfo: false, // 去掉左下角的每页显示多少行的信息
        //iDisplayLength: 6, // 控制每页显示的行数
        bFilter: false, // 去掉过滤
        bLengthChange: false, // 去掉可以更改显示行数的dropdown list
        bSort: false, // 去掉排序功能和按钮
        data: data, // 从data数组中获取数据
        paging: false, // 禁止分页
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
        }, {
            data: 'office'
        }, {
            data: 'extn'
        }]
    });
    // Example #1
    $('#thisweekoutplan').Tabledit({
        url: '../js/server.php',
        columns: {
            identifier: [0, 'id'],
            editable: [
                [0, 'name'],
                [1, 'position'],
                [2, 'salary'],
                [3, 'office'],
                [4, 'extn'],
            ]
        }
    });

    $(".tabledit-save-button").on("click", function() {
        alert('update data');
    });

    $(".tabledit-confirm-button").on("click", function(event) {
        alert('delete data');
        $(event.target).parent().parent().parent().remove();
    });

    $(".newrowbtn button").on("click", function(event, tabledata) {
        alert('add row');
        $("#thisweekoutplan tbody tr").remove();
        $('#thisweekoutplan').dataTable({
            bInfo: false, // 去掉左下角的每页显示多少行的信息
            //iDisplayLength: 6, // 控制每页显示的行数
            bFilter: false, // 去掉过滤
            bLengthChange: false, // 去掉可以更改显示行数的dropdown list
            bSort: false, // 去掉排序功能和按钮
            data: tabledata, // 从data数组中获取数据
            paging: false, // 禁止分页
            oLanguage: {
                sProcessing: "正在加载中......",
                sEmptyTable: "表中无数据存在！",
                oPaginate: {
                    sPrevious: '<',
                    sNext: '>'
                }
            },
            destroy: true,
            columns: [{
                data: 'name'
            }, {
                data: 'position'
            }, {
                data: 'salary'
            }, {
                data: 'office'
            }, {
                data: 'extn'
            }]
        });
        $("#thisweekoutplan tbody").append("<tr><td></td><td></td><td></td><td></td><td></td></tr>");
        $('#thisweekoutplan').Tabledit({
            url: '../js/server.php',
            columns: {
                identifier: [0, 'id'],
                editable: [
                    [0, '任务名称'],
                    [1, '实际开始时间'],
                    [2, '实际完成时间'],
                    [3, '已完成'],
                    [4, '负责人'],
                ]
            }
        });

    });

    // // Example #2
    // $('#example2').Tabledit({
    //     url: 'example.php',
    //     eventType: 'dblclick',
    //     editButton: false,
    //     columns: {
    //         identifier: [0, 'id'],
    //         editable: [
    //             [1, 'car'],
    //             [2, 'color', '{"1": "Red", "2": "Green", "3": "Blue"}']
    //         ]
    //     }
    // });

    // // Example #3
    // $('#example3').Tabledit({
    //     url: 'example.php',
    //     editButton: false,
    //     deleteButton: false,
    //     hideIdentifier: true,
    //     columns: {
    //         identifier: [0, 'id'],
    //         editable: [
    //             [2, 'firstname'],
    //             [3, 'lastname']
    //         ]
    //     }
    // });

    // // Example #4
    // $('#example4').Tabledit({
    //     url: 'example.php',
    //     deleteButton: false,
    //     saveButton: false,
    //     autoFocus: false,
    //     buttons: {
    //         edit: {
    //             class: 'btn btn-sm btn-primary',
    //             html: '<span class="glyphicon glyphicon-pencil"></span> &nbsp; EDIT',
    //             action: 'edit'
    //         }
    //     },
    //     columns: {
    //         identifier: [0, 'id'],
    //         editable: [
    //             [1, 'car'],
    //             [2, 'color']
    //         ]
    //     }
    // });

    // // Example #5
    // $('#example5').Tabledit({
    //     url: 'example.php',
    //     rowIdentifier: 'data-id',
    //     editButton: false,
    //     restoreButton: false,
    //     buttons: {
    //         delete: {
    //             class: 'btn btn-sm btn-danger',
    //             html: '<span class="glyphicon glyphicon-trash"></span> &nbsp; DELETE',
    //             action: 'delete'
    //         },
    //         confirm: {
    //             class: 'btn btn-sm btn-default',
    //             html: 'Are you sure?'
    //         }
    //     },
    //     columns: {
    //         identifier: [0, 'id'],
    //         editable: [
    //             [1, 'nickname'],
    //             [2, 'firstname'],
    //             [3, 'lastname']
    //         ]
    //     }
    // });

    // // Example #6
    // $('#example6').Tabledit({
    //     url: 'example.php',
    //     columns: {
    //         identifier: [0, 'id'],
    //         editable: [
    //             [1, 'username'],
    //             [2, 'email'],
    //             [3, 'avatar', '{"1": "Black Widow", "2": "Captain America", "3": "Iron Man"}']
    //         ]
    //     },
    //     onDraw: function() {
    //         console.log('onDraw()');
    //     },
    //     onSuccess: function(data, textStatus, jqXHR) {
    //         console.log('onSuccess(data, textStatus, jqXHR)');
    //         console.log(data);
    //         console.log(textStatus);
    //         console.log(jqXHR);
    //     },
    //     onFail: function(jqXHR, textStatus, errorThrown) {
    //         console.log('onFail(jqXHR, textStatus, errorThrown)');
    //         console.log(jqXHR);
    //         console.log(textStatus);
    //         console.log(errorThrown);
    //     },
    //     onAlways: function() {
    //         console.log('onAlways()');
    //     },
    //     onAjax: function(action, serialize) {
    //         console.log('onAjax(action, serialize)');
    //         console.log(action);
    //         console.log(serialize);
    //     }
    // });

    //prettyPrint();

});