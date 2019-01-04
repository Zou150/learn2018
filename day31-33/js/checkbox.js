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
            obj.appendChild(child);
            var text2 = document.createTextNode(data[i].text);
            obj.appendChild(child);
            obj.appendChild(text2);
        }
        //容器innerHTML = 生成好的html集合  
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
                    reTable(getDate());
                }
        //     }
        // }
    }