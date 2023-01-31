const fs = require("fs");

// Read file data
// fs.readFile("./cool.txt","utf-8",function(e,data){
//     if(e) {
//         console.log(e);
//     }
//     console.log(data);
// });

// write file data - by create new file
// fs.writeFile("./write.txt","This is a demo file to write",
// function(e) {
//     console.log("completed writing");
// })

// add file data - in existing file
// const quote2 = "\nCreating with nodejs by myself";  
// fs.appendFile("./write.txt", quote2, function(err){
//     console.log("done");
// });

// deleting a file - 10 files.
// fs.unlink("./back.js", function(err) {
//     console.log("deleted");
// })

// for(var i=1)

// To create 10 html files with data "Good morning"
// for(var i=1; i <=10; i++) {
//     fs.writeFile(`./backups/text-${i}.html`,"good morning",function(e) {
//         console.log("completed writing");
//     });
// } 

// To read all files in folder
// fs.readdir("./backups",function(e, files){
//     console.log(files);
// })

// To delete all files in folder
    fs.readdir(`./backups`,function(e,files) {

        files.forEach( (filename) => {
          removeFiles(filename);
        })
        
    });

   function removeFiles(file) {
    fs.unlink(`./backups/${file}`,function(e) {
        console.log(e);
   })
}
 