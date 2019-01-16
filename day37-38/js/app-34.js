var table = document.getElementById('table-wrapper'),

    regionX = document.getElementById('region-radio-wrapper'),
    productX = document.getElementById('product-radio-wrapper'),
    svg = document.getElementById('svg-wrapper'),
    // bar2 = document.getElementById("canvas-wrapper"),
    canvas = document.getElementById("canvas"),
    ctx = canvas.getContext('2d');

var barColors = ["#F49AC1","#FED5A3","#D19D8D","#C3E8F2","#4F96E8","#91FF8B","#65180D", "#E8C573", "#9C5CA1"];

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

//生成两组CheckBox
setCheckBox(regionX,regionArr);
setCheckBox(productX,productArr);

//生成表格
var newData = JSON.parse(localStorage.getItem("table")) || sourceData;
reTable(newData);

var inputAll = table.querySelectorAll("input");

for(var i = 0;i<inputAll.length;i++) {

    inputAll[i].onfocus = function(ev) {
        ev = ev || window.event;
        let target = event.target || ev.srcElement;
        yuanData = target.value;
        console.log(yuanData);
    }

    inputAll[i].onblur = function(ev) {
        // console.log(inputAll[i].value)
//         var inValue = inputAll[i].value;
        ev = ev || window.event;
        let target = event.target || ev.srcElement;
        if(typeof(target.value) !== "number") {
            alert("请输入数字！");
            target.value = yuanData;
        }
    }
}
console.log(i)