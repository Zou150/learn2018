var region = document.getElementById('region-select'),
    product = document.getElementById('product-select'),
    table = document.getElementById('table-wrapper'),

    regionX = document.getElementById('region-radio-wrapper'),
    productX = document.getElementById('product-radio-wrapper');;

var regionArr = [{
        value: "华东",
        text: "华东"
    },{
        value: '华南',
        text: '华南'
    },{
        value: '华北',
        text: '华北'
    }],

    productArr = [{
        value: '手机',
        text: '手机'
    },{
        value: '笔记本',
        text: '笔记本'
    },{
        value: '智能音箱',
        text: '智能音箱'
    }];

region.onchange = function() {
    //渲染新的表格(根据select选项获取数据)
    reTable(getDate());
}
product.onchange = function() {
    reTable(getDate());
}


//生成两组CheckBox
setCheckBox(regionX,regionArr);
setCheckBox(productX,productArr);
    