let menu = require("../lib/menu");
//let addStu = require("../lib/addStu");
//let printStu = require("../lib/printStu");
let getInput = require("../lib/getInput");

class stuInfo{
    constructor(input) {
        this.name = input[0];
        this.num = input[1];
        this.math = input[2];
        this.chinese = input[3];
        this.english = input[4];
    }
}
var allStuInfo = [];//存放所有学生对象的数组
var allStuSum = [];//存放所有学生总分的数组

function main(){
    let number = menu();

    // while(number!=='1'&&number!=='2'&&number!=='3'){
    //     menu();
    // }
    if(number ==='1'){
        //console.log('di 1 uizhong');
        return addStu();
    }
    if(number ==='2'){
        //console.log('di 2 zhong');
        printStu();
    }
    if(number ==='3'){
        console.log('您已离开');
        return 0;
    }
}

module.exports = () =>{
    main();
};

function addStu() {

    console.log('请输入学生信息（格式：姓名，学号， 数学：成绩，语文：成绩， 英语：成绩），按回车提交：');
    let str = getInput();
    let arrStu = str.split(',');
    //stuInfo.name = str[0];
    //创建学生对象
    //let addStuInfo = new StuInfo(arrStu);
    console.log(arrStu);
    let everyStuInfo = new stuInfo(arrStu);
    countEveryStu(everyStuInfo);//计算完总分和平均分之后，加了两个属性
    allStuInfo.push(everyStuInfo);
    allStuSum.push(everyStuInfo.sum);
    console.log('学生' + everyStuInfo.name + '的成绩被添加');
    //console.log(everyStuInfo.name);
    return main();
}

function printStu(){
    //计算班级总分和中位数
    let ob = countAllStu(allStuSum);

    //输入学号,找出匹配的,
    console.log('请输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：\n');
    //console.log(allStuInfo);
    let str = getInput();
    let arrStuNum = str.split(',');
    console.log('成绩单\n' +
        '姓名|数学|语文|英语|平均分|总分 \n' +
        '========================\n');
    for(var i = 0; i<arrStuNum.length; i++){
        for(var j = 0; j<allStuInfo.length; j++){
            if(arrStuNum[i] === allStuInfo[j].num){
                str = allStuInfo[j].name+'|'+allStuInfo[j].math+'|'+ allStuInfo[j].chinese+'|'+ allStuInfo[j].english+'|'+allStuInfo[j].ave+'|'+allStuInfo[j].sum;
                console.log(str+'\n');
            }
        }
    }
    console.log('========================\n' +
        '全班总分平均数：'+ ob.ave +'\n' +
        '全班总分中位数：'+ ob.middle);
    return main();
}

function countEveryStu(stu){
    let sumScore = parseInt(stu.math)+ parseInt(stu.chinese) + parseInt(stu.english);
    let aveScore = (sumScore /3).toFixed(2);
    stu.sum = sumScore;
    stu.ave = aveScore;
    return 0;
}

function countAllStu(allstusum){
    let allStuResult = {ave:0,middle:0};
    allStuResult.ave = ((allstusum.reduce(function (l,r) {
        return l+r;
    }))/allstusum.length).toFixed(2);//班级总分的平均分

    allStuResult.middle = countmiddle(allstusum);
    return allStuResult;
}
function countmiddle(allstusum){
    let num = allstusum.length;
    let middle;
    if(num % 2===0){
        middle= ((allstusum[num/2] + allstusum[num/2+1])/2).toFixed(2);
    }else
        middle = allstusum[(num+1)/2];

    return middle;
}
