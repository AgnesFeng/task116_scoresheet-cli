let sinon = require("sinon");
let main = require("../lib/main");

describe('输入信息跳转到相应模块', () => {

    it('should display main menu once started', () => {
        sinon.spy(console, 'log');
        main();
        expect(console.log.args.join()).toBe(`1. 添加学生\n` +`2. 生成成绩单\n`+`3. 退出\n`+`请输入你的选择（1～3）：`);
    });

});
