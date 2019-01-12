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

//把数据保存到LocalStroage
function savedLocalStroage() {
    // var strData = JSON.stringify(data);
    // localStorage.removeItem("table");
    // localStorage.setItem("table",strData);
    var storage = window.localStorage;
    var inputAll = table.querySelectorAll("input");
    for(var i = 0; i<inputAll.length; i++) {
        storage.getItem("",)
    }
}