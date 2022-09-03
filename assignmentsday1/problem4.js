const { EILSEQ } = require("constants");


var name = "Pramod kumar";
var age = 24;
var section = "Alpha Section";
var subjects = ["Maths","English","Telugu"];
var rollNo = 20;
var marks = [85,90,75];
var grade = marks[0]+marks[1]+marks[2];
function total(){
if (grade >=200){
  console.log("Grade =   A");
}else {
  console.log("Grade =   B");
}
}

console.log("                                                ");
console.log("********* REPORT CARD OF THE STUDENT ***********");
console.log("                                   ,");
console.log("                   |'.            ,");
console.log("                   |  '-._       / )");
console.log( "                 .'  .._  ',    /_'-,");
console.log( "                '   /  _'.'_\   /._)')");
console.log( "               :   /  '_' '_' /  _.'");
console.log( "             |E |   |Q| |Q|  /  /");
console.log(  "             .'  _\  '-' '-'    /");
console.log( "           .'--.(S     ,__` ) /");
console.log(  "                '-.     _.'  /");
console.log( "              __.--'----(   /");
console.log( "           _.-'     :   __\ /");
console.log("          (      __.' :'  :Y");
console.log("           '.   '._,  :   :|");
console.log( "             '.     ) :.__:|");
console.log( "               \    \______/");
console.log( "                '._L/_H____]");
console.log( "                 /_        /");
console.log(  "               /  '-.__.-')");
console.log( "               :      /   /");
console.log( "               :     /   /");
console.log( "             ,/_____/----;");
console.log( "            '._____)----'");
console.log( "            /     /   /");
console.log( "           /     /   / " );
console.log(  "         .'     /    \ ");
console.log("        (______(-.____)");

console.log("------------------------------------------------" ); 
console.log("                                                  ");
console.log(`NAME     = ${name} `);
console.log(`AGE      = ${age} `);
console.log(`SECTION  = ${section}`);
console.log(`ROLL NO  = ${rollNo}`);
console.log("      SUBJECTS                  ")
console.log(`${subjects[0]}    =    ${marks[0]}`);
console.log(`${subjects[1]}  =    ${marks[1]}`);
console.log(`${subjects[2]}   =    ${marks[2]}`);
console.log("--------------------");
console.log(`${total(grade)}`);