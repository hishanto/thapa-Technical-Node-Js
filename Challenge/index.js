
//asynchronous
const fs  = require("fs");
fs.writeFile("read.txt", "today is an awesome day\n", (err) =>  //call back function
{
    console.log("file is created");
    console.log(err);
});

fs.appendFile("read.txt", "Lets do coding with full focus", (err) =>  //call back function
{
    console.log("file is append");
    console.log(err);
});
// why we need call back function
//