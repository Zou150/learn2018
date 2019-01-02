//绘制一个折线图
function drawLine(data) {
    //定义好折线图绘制区域的高度，宽度，轴的高度，宽度
    var w = 550,
        h = 300,
        axisX = 500,
        axisY = 250,
        startX = 25,
        startY = 25;
    //定义好每一个数据点的直径，颜色，线的颜色，宽度    
    var pointW = 6,
        pointC = '#37A2DA',
        lineC = 'black',
        linW = 2;
    //定义好没两个数据点之间的横向间隔距离
    var interval = 40;

    //拿到折线图中的最大值Max
    var Maxdata = Math.max(...data);
    //根据Max和你用来绘制柱状图图像区域的高度，进行一个数据和像素的折算比例
    var percent;
    if(Maxdata > 200) {
        percent = 200 / Maxdata;
    }else {
        percent = 1;
    }
    //绘制横轴及纵轴
    // var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext('2d');
    canvas.setAttribute("width",w);
    canvas.setAttribute("height",h);

    ctx.beginPath();
    ctx.moveTo(startX,startY);
    ctx.lineTo(startX,startY + axisY);
    ctx.lineTo(startX +axisX,startY + axisY);
    ctx.strokeStyle = lineC;
    ctx.stroke();

    //遍历数据
    // ctx.moveTo(70,350 - data[0]);
    for(var i = 0;i < data.length;i++) {
        //绘制多条折线图
        var sale = data[i].sale,
            dataColor = set

        ctx.beginPath();
        //计算将要绘制数据点的坐标
        var x = 15 + interval * (i + 1);
        var y = axisY - data[i] * percent;
        //绘制数据点       
        ctx.arc(x,y,pointW / 2,0,Math.PI * 2);
        // ctx.font = "32px consals";
        // ctx.fillText("Hello World",10,50);
        if(i - 1 >= 0) {//不是第一个点
            //绘制这个数据点和上一个数据点的连线
            ctx.moveTo(x,y);
            var dx = 15 + interval * (i);
            var dy = axisY - data[i - 1] * percent;
            ctx.lineTo(dx, dy);
        }
        ctx.strokeStyle = pointC;
        //记录下当前数据点的数据用于下一个点时绘制连线
        ctx.stroke();
    }

    //x轴上的月份
    var axisTextX = [];
    for(var i = 0; i< 12; i++) {
        axisTextX = 15 + interval * (i+1) - 15 / 2;
        ctx.font = "13px serif";
        ctx.fillText((i+1)+"月",axisTextX,290);
        // ctx.fillText(data[i],axisTextX,axisY - data[i] * percent -10);//标示数据
    }
}