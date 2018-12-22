var region = document.getElementById('region-select'),
    product = document.getElementById('product-select'),
    table = document.getElementById('table-wrapper');

    region.onchange = function() {
        //渲染新的表格(根据select选项获取数据)
        reTable(getDate());
    }

    product.onchange = function() {
        reTable(getDate());
    }

    //根据select选项获取数据
    function getDate() {
        var Select1 = region.selectedIndex,
            Select2 = product.selectedIndex,
            SelectedRegion = region.options[Select1].value,
            SelectedProduct = product.options[Select2].value,
            SelectDate = [];
        for(var i=0;i<sourceData.length;i++) {
            if(sourceData[i].region == SelectedRegion && sourceData[i].product == SelectedProduct) {
                SelectDate.push(sourceData[i]);
            }
        }
        console.log(SelectDate);
        return SelectDate;
    }

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
    }
    