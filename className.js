/**
 * Created by Administrator on 2017/4/2 0002.
 */
(function(){
    function getClass(classname){
        //�ж�������Ƿ�����������
        if(document.getElementsByClassName){
            return document.getElementsByClassName(classname);
        }
        var arr =[];//���淵�ص�����
        var dom = document.getElementsByName("*");//��ȡ���е�domԪ��
        for(var i = 0;i<dom.length;i++)//�������ڵ�class��
        {
            var textArr = dom[i].className.split(" ");
            for(var j = 0;j<textArr[i].length;j++)//������ȡ��class��
            {
                arr.push(textArr[i]);//��ӽ�����
            }
        }
        return arr;//��������
    }

})()