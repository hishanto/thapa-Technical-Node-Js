
//asynchronous
const fs  = require("fs");
fs.writeFile("read.txt", "today is an awesome day\n", (err) =>  //call back function
{
    console.log("file is created");
    console.log(err);
});

fs.appendFile("read.txt", "Lets do coding with full focus\n", (err) =>  //call back function
{
    console.log("file is append\n");
    console.log(err);
});
// why we need call back function

fs.readFile("read.txt","UTF-8", (err, data) =>  //call back function
{
    console.log("file is being read\n");
    console.log(data);
    console.log(err);
});