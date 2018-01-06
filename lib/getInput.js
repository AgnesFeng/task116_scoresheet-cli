"use strict";
function getInput() {
    let readlineSync = require('readline-sync');
    let inputInfo = readlineSync.question(``);
    return inputInfo;
}
module.exports = getInput;