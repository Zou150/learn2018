function getDate() {
    //根据checkbox选项获取数据  
    var radioCheckbox = document.querySelectorAll('input:checked'),
        list =[],  
        SelectDate = [];
    for(var i =0;i<radioCheckbox.length;i++) {
        if(radioCheckbox[i].value !== '全选') {
            list.push(radioCheckbox[i].value);
        }
    }
    for(var i=0;i<sourceData.length;i++) {
        if(list.indexOf(sourceData[i].region) !== -1 && list.indexOf(sourceData[i].product) !== -1) {
            SelectDate.push(sourceData[i]); 
        }
    }
    return SelectDate;
}

// 在绘制表格的时候，给对应的td或者tr添加一个自定义属性，这一格数据属于哪个商品哪个区域
function tdData() {
    var tdList = table.getElementsByTagName("td");
    for(var i = 0;i<tdList.length;i++) {
        tdList[i].onmouseover = function() {
            var data = [],
                arr = [];
            arr = this.parentNode.getElementsByTagName("td");
            for(var j = 2;j<arr.length;j++) {
                data.push(arr[j].innerHTML);
            }
            // var bar = document.getElementById('svg-warpper');
            bar.innerHTML = drawHistogram(data);
            drawLine(data);
            tdData();
        }
    }
}

setInterval("tdData()",100);