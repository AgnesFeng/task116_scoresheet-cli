let getInput = require("../lib/getInput");
let addStu = require("../lib/addStu");
let printStu = require("../lib/printStu");

function menu(){
    let number;
    console.log(`1. 添加学生\n` +`2. 生成成绩单\n`+`3. 退出\n`+`请输入你的选择（1～3）：`);
    number = getInput();
    return number;
}

module.exports = menu;