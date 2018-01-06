let menu = require("../lib/menu");
let main = require("../lib/main");
let getInput = require("../lib/getInput");
function addStu() {

    console.log('请输入学生信息（格式：姓名，学号， 语文：成绩，数学：成绩， 英语：成绩），按回车提交：');
    str = getInput();
    arrStu = str.split(',');
    //stuInfo.name = str[0];
    //创建学生对象
    //let addStuInfo = new StuInfo(arrStu);

    console.log(arrStu);
    console.log('学生'+ str[0] + '的成绩被添加');
    main();
}
module.exports = addStu;