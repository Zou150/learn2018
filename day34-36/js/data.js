function getDate() {
    //根据select选项获取数据
    // var Select1 = region.selectedIndex,
    //     Select2 = product.selectedIndex,
    //     SelectedRegion = region.options[Select1].value,
    //     SelectedProduct = product.options[Select2].value,
    //     SelectDate = [];
    // for(var i=0;i<sourceData.length;i++) {
    //     if(sourceData[i].region == SelectedRegion && sourceData[i].product == SelectedProduct) {
    //         SelectDate.push(sourceData[i]);
    //     }
    // }

    //根据checkbox选项获取数据   
    var SelectDate = []; 
    var radioCheckbox = document.querySelectorAll('input:checked'),
        list =[];
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

//数据处理这里还有些问题
// 1.select与checkbox重复选项，导致显示重复
// 2.select与checkbox不相关