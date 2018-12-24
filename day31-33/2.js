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
    