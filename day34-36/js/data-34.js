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

// 获取对应的td数据
function tdData(event) {
    var tdList = event.target.parentNode.querySelectorAll("td"),
        arr = [];
    for(var i = 0;i<tdList.length;i++) {
        var num = parseInt(tdList[i].innerHTML);
        if(num) {
            arr.push(num);
        }
    }
    return arr;
}