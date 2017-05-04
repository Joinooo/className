/**
 * Created by Administrator on 2017/4/2 0002.
 */
(function(){
    function getClass(classname){
        //判断浏览器是否存在这个方法
        if(document.getElementsByClassName){
            return document.getElementsByClassName(classname);
        }
        var arr =[];//储存返回的数组
        var dom = document.getElementsByName("*");//获取所有的dom元素
        for(var i = 0;i<dom.length;i++)//遍历存在的class类
        {
            var textArr = dom[i].className.split(" ");
            for(var j = 0;j<textArr[i].length;j++)//遍历获取的class类
            {
                arr.push(textArr[i]);//添加进数组
            }
        }
        return arr;//返回数组
    }

})()