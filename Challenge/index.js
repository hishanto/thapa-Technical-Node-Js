
// challange 2
const fs = require("fs");

fs.mkdir("shanto", (err)=>{
    console.log("Folder has been created");
});

fs.writeFile("./shanto/bio.txt","My name is Husain Imam Shanto. ", (err)=>{
    console.log("file has been created");
});

fs.appendFile("./shanto/bio.txt","I am a student of TUC", (err)=>{
    console.log("file has been appended");
});

fs.readFile("./shanto/bio.txt","UTF-8", (err,data)=>{
    console.log("file is being read");
    console.log(data);
});

