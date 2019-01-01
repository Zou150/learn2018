//渲染新的表格
    function reTable(date) {
        var Tcol = 14,//输出表头：商品、地区、1月、2月、…… 12月
            string = "<table border=\'1\'><thead><tr><th>商品</th><th>地区</th>";
        for(var i =0;i<Tcol -2;i++) {//遍历数据
            string = string.concat('<th>' + (i+1) + '月' + '</th>');//输出每一行的表格HTML内容
        }
        string = string.concat('</thead>');
        string = string.concat('<tbody>');
            for(var i=0;i<date.length;i++) {
                string = string.concat('<tr>');
                string = string.concat('<td>' + date[i].product + '</td>');
                string = string.concat('<td>' + date[i].region + '</td>');
                for(var j=0;j<Tcol -2;j++) {
                    string = string.concat('<td>' + date[i].sale[j] + '</td>');
                }
                string = string.concat('</tr>');
            }
        string = string.concat('</tbody>');
        //把生成的HTML内容赋给table-wrapper
        table.innerHTML = string;
        changeTd();
        mergeCell(1,0);
    }

    //选择谁做第几列
    function changeTd() {
        var regionCheckbox = regionX.querySelectorAll('input:checked'),
            productCheckbox = productX.querySelectorAll('input:checked'),
            table = document.querySelector('table');
            if (regionCheckbox.length == 1 && productCheckbox.length !== 1) {
                for (var i=0;i<table.rows.length;i++) {
                    var temp = table.rows[i].cells[0].innerHTML;
                    table.rows[i].cells[0].innerHTML = table.rows[i].cells[1].innerHTML;
                    table.rows[i].cells[1].innerHTML = temp;
                }
            }
    }

    //合并单元格
    function mergeCell(startrow,col) {
        var tab = document.querySelector('table');
        for (var i=startrow;i <tab.rows.length -1;i++) {
            if(tab.rows[startrow].cells[col].innerHTML == tab.rows[i+1].cells[col].innerHTML) {
                tab.rows[i+1].cells[col].style.display = 'none';
                tab.rows[startrow].cells[col].rowSpan += 1;
            }else {
                mergeCell(i +1,0);
            }
        }
    }
    