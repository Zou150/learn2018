var regionX = document.getElementById('region-radio-wrapper'),
    productX = document.getElementById('product-radio-wrapper');

    //生成一组CheckBox
    function setCheckBox(obj,data) {
        var input = document.createElement('input');
        input.setAttribute('type','checkbox');
        input.setAttribute('value','全选');
        input.setAttribute('checkbox-type','all');
        var text = document.createTextNode('全选');
        obj.appendChild(input);
        obj.appendChild(text);

        for(var i=0;i<data.length;i++) {
            var child = document.createElement('input');
            child.setAttribute('type','checkbox');
            child.setAttribute('value',data[i].value);
            child.setAttribute('checkbox-type','child');
            // child.setAttribute('class',e);
            obj.appendChild(child);
            var text2 = document.createTextNode(data[i].text);
            obj.appendChild(child);
            obj.appendChild(text2);
        }
        //容器innerHTML = 生成好的html集合  
        console.log(obj);
        console.log(obj.childNodes.length);

        obj.onclick = function(e) {
            var e = e || window.event;
            var target = e.target || e.srcElement;
            // if(target.getAttribute('type') == 'checkbox') {
                var len = obj.childNodes.length;
                var count = 0;
                // if(target.nodeName.toLowerCase() == 'input') {
                    var type = target.getAttribute('checkbox-type');
                    //对于全选的CheckBox的点击事件，要做的事情很简单，让所有的CheckBox全部勾选上
                    if(type == 'all') {
                        for(var i=2;i<len;i+=2) {
                            obj.childNodes[i].checked = true;
                            obj.childNodes[0].checked = true;
                        }
                    }else {
                        for(var i=2;i<len;i+=2) {
                            if(obj.childNodes[i].checked == true) {
                                count ++;
                            }
                        }
                        //在点击之前它是不是唯一一个被勾选的？
                        //如果是的话，阻止这次点击默认事件，或者立马又将其checked状态置为真
                        if (count == 0) {
                            target.checked = true;
                        }        
                        //点击之后，是不是满足了全选状态，并对应修改全选CheckBox的状态
                        //点击最后一个未被选中的单个选项后，全选CheckBox也要置为被勾选状
                        else if(target.checked == true && count == len/2-1) {
                            target.checked = true;
                            obj.childNodes[0].checked = true;
                        }
                        //如果当前是全选状态，取消任何一个子选项，则全选CheckBox也要置为未勾选状态
                        else if(target.checked == false && count !== len/2-1) {
                            target.checked = false;
                            obj.childNodes[0].checked = false;
                        }
                    }
                    reTable(getDate2());
                }
        //     }
        // }
    }

    //生成一组CheckBox
    setCheckBox(regionX,[{
        value: "华东",
        text: "华东"
    },{
        value: '华南',
        text: '华南'
    },{
        value: '华北',
        text: '华北'
    }]);

    setCheckBox(productX,[{
        value: '手机',
        text: '手机'
    },{
        value: '笔记本',
        text: '笔记本'
    },{
        value: '智能音箱',
        text: '智能音箱'
    }]);

    //获取数据
    function getDate2() {
        //根据表单选择进行数据多维度的筛选
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
        console.log(SelectDate);
        return SelectDate;
    }