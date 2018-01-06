let menu = require("../lib/menu");
let addStu = require("../lib/addStu");
let printStu = require("../lib/printStu");
class stuInfo{
    constructor(input) {
        this.name = input[0];
        this.num = input[1];
        this.math = input[2];
        this.chinese = input[3];
        this.english = input[4];
    }
}

function main(){
    let number = menu();

    while(number!=='1'&&number!=='2'&&number!=='3'){
        menu();
    }
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
