let sinon = require("sinon");
let main = require("../lib/main");

describe('输入信息跳转到相应模块', () => {

    it('should display main menu once started', () => {
        sinon.spy(console, 'log');
        main();
        expect(console.log.args.join()).toBe(`1. 添加学生\n` +`2. 生成成绩单\n`+`3. 退出\n`+`请输入你的选择（1～3）：`);
    });

});

describe('打印', () => {

    it('should display main menu once started', () => {
        sinon.spy(console, 'log');
        main();
        expect(console.log.args.join()).toBe(`成绩单
姓名|数学|语文|英语|平均分|总分
========================

zhangsan|89|98|79|88.67|266

lisi|56|78|89|74.33|223

fhdiuf|56|78|89|74.33|223

========================
全班总分平均数：237.33
全班总分中位数：223
`);
    });

});

//zhangsan,10001,89,98,79   lisi,10002,56,78,89      fhdiuf,10003,56,78,89
