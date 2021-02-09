var msg = 'Hello World';
console.log(msg);

// Node.js program to demonstrate the 
// fs.unlinkSync() method 

// Import the filesystem module 
const fs = require('fs'); 

// Get the files in current diectory 
// before deletion 
getFilesInDirectory(); 

// Delete readme.md 
fs.unlink("just.txt",(err)=>{
    if(err){
        console.log('error in deleting the file' +err);
    }
    else
    {
        console.log('file deletion sucessful');
    }
}); 
console.log("\nFile readme.md is deleted"); 

// Get the files in current diectory 
// after deletion 
getFilesInDirectory(); 

// Function to get current filenames 
// in directory with specific extension 
function getFilesInDirectory() { 
console.log("\nFiles present in directory:"); 
let files = fs.readdirSync(__dirname); 
files.forEach(file => { 
	console.log(file); 
}); 
} 
