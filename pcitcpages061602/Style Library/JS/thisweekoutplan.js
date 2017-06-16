$(document).ready(function() {
    // $("#thisweekoutplan tbody td:last-child").attr("onclick", "deletetr(this)");
});

// function tdclick(tdobject) {
//     var td = $(tdobject);
//     td.attr("onclick", "");
//     //1,取出当前td中的文本内容保存起来  
//     var text = td.text();
//     //2,清空td里面的内容  
//     td.html(""); //也可以用td.empty();  
//     //3，建立一个文本框，也就是input的元素节点  
//     var input = $("<input>");
//     //4，设置文本框的值是保存起来的文本内容  
//     input.attr("value", text);
//     input.bind("blur", function() {
//         var inputnode = $(this);
//         var inputtext = inputnode.val();
//         var tdNode = inputnode.parent();
//         tdNode.html(inputtext);
//         tdNode.click(tdclick);
//         td.attr("onclick", "tdclick(this)");
//     });
//     // 当按下回车键，无法再输入
//     // input.keyup(function(event) {
//     //     var myEvent = event || window.event;
//     //     var kcode = myEvent.keyCode;
//     //     if (kcode == 13) {
//     //         var inputnode = $(this);
//     //         var inputtext = inputnode.val();
//     //         var tdNode = inputnode.parent();
//     //         tdNode.html(inputtext);
//     //         tdNode.click(tdclick);
//     //     }
//     // });

//     //5，将文本框加入到td中  
//     td.append(input);
//     var t = input.val();
//     input.val("").focus().val(t);

//     //6,清除点击事件  
//     td.unbind("click");
// }

function addtr(btnobject) {
    // var table = $(btnobject).parent().prev();
    var table = $(btnobject).next();
    var tr = $("<tr>" +
        "<td>" + "<input type='text'/>" + "</td>" +
        "<td>" + "<input class='inputdatepicker'/>" + "</td>" +
        "<td>" + "<input class='inputdatepicker'/>" + "</td>" +
        "<td>" + "<input type='text'/>" + "</td>");
    table.append(tr);

    if ($(".inputdatepicker").datetimepicker) {
        $(".inputdatepicker").datetimepicker({
            language: "zh-CN",
            autoclose: true, //选中之后自动隐藏日期选择框
            todayBtn: true, //今日按钮
            todayHighlight: true,
            format: "yyyy-mm-dd hh:ii", //日期格式
        });
    }
}

function addissuetr(btnobject) {
    var table = $(btnobject).next();
    var tr = $("<tr>" +
        "<td>" + "<input type='text'/>" + "</td>" +
        "<td>" + "<input type='text'/>" + "</td>" +
        "<td>" + "<select><option></option><option>非常严重</option><option>严重</option><option>一般</option></select>" + "</td>" +
        "<td>" + "<select><option></option><option>完成</option><option>未完成</option></select>" + "</td>" +
        "<td>" + "<input class='inputdatepicker'/>" + "</td>" +
        "<td>" + "<input class='inputdatepicker'/>" + "</td>" +
        "<td>" + "<input type='text'/>" + "</td>");
    table.append(tr);

    if ($(".inputdatepicker").datetimepicker) {
        $(".inputdatepicker").datetimepicker({
            language: "zh-CN",
            autoclose: true, //选中之后自动隐藏日期选择框
            todayBtn: true, //今日按钮
            todayHighlight: true,
            format: "yyyy-mm-dd hh:ii", //日期格式
        });
    }
}


function addrisktr(btnobject) {
    var table = $(btnobject).next();
    var tr = $("<tr>" +
        "<td>" + "<input type='text'/>" + "</td>" +
        "<td>" + "<input type='text'/>" + "</td>" +
        "<td>" + "<select><option></option><option>大</option><option>中</option><option>小</option></select>" + "</td>" +
        "<td>" + "<select><option></option><option>非常严重</option><option>严重</option><option>一般</option></select>" + "</td>" +
        "<td>" + "<select><option></option><option>完成</option><option>未完成</option></select>" + "</td>" +
        "<td>" + "<input class='inputdatepicker'/>" + "</td>" +
        "<td>" + "<input class='inputdatepicker'/>" + "</td>" +
        "<td>" + "<input type='text'/>" + "</td>");
    table.append(tr);

    if ($(".inputdatepicker").datetimepicker) {
        $(".inputdatepicker").datetimepicker({
            language: "zh-CN",
            autoclose: true, //选中之后自动隐藏日期选择框
            todayBtn: true, //今日按钮
            todayHighlight: true,
            format: "yyyy-mm-dd hh:ii", //日期格式
        });
    }
}

// function deletetr(tdobject) {
//     var td = $(tdobject);
//     td.parents("tr").remove();
// }

function edittr(btnobject) {
    // $(btnobject).parent().prev().find("td").attr("onclick", "tdclick(this)");
    // $(btnobject).parent().prev().find("td:last-child").attr("onclick", "deletetr(this)");
}

function savetable(btnobject) {
    console.log("send data to backend")
    // $(btnobject).parent().prev().find("td").removeAttr("onclick");
    // $(btnobject).parent().prev().find("td:last-child").attr("onclick", "deletetr(this)");
}