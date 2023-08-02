// to declare file system
const fs  = require("fs");
// create directory
// fs.mkdirSync("NodeCh");       
//create and add info to the file
fs.writeFileSync( "My name is Husain Imam Shanto");
// append to existing file
fs.appendFileSync("NodeCh/bio.txt"," I am a Student of Techniocal University of Chemnitz");
