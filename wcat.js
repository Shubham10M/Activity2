const { ifError } = require("assert");
let fs = require("fs");
// let readFile = fs.readFileSync('task.txt','utf8');
// console.log(readFile);

// read the  content of the  multiple file
let inputArr = process.argv.slice(2);
//console.log(inputArr);
//let filesArr = inputArr;
let optionsArr = [];
let filesArr = [];
for(let i =0 ;i<inputArr.length; i++){
    let firstChar = inputArr[i].charAt(0);
    if(firstChar == "-"){
     optionsArr.push(inputArr[i]);
    }
    else{
     filesArr.push(inputArr[i]);
    }
}

for(let i = 0; i < filesArr.length;i++){
    let ans = fs.existsSync(filesArr[i]);
    if(ans == false){
        console.log("files doesn't exist");
        return;
    }

}

let content = "";
for(let i = 0; i < filesArr.length;i++){
    content = content + fs.readFileSync(filesArr[i]) + "\r\n";
}
let contentArr = content.split("\r\n");
//console.log(optionsArr);

// -s check
let isSpPresent = optionsArr.includes("-s");
if(isSpPresent){
for(let i = 1 ; i  < contentArr.length; i++){
  if(contentArr[i] == "" && contentArr[i-1] == ""){
      contentArr[i] = null;
  }
  else if(contentArr[i] == "" && contentArr[i-1] == null){
        contentArr[i] = null;
  }
}
let tempArr = [];
for(let i = 0 ; i < contentArr.length; i++){
   if(contentArr[i] != null){
       tempArr.push(contentArr[i]);
   }
}
contentArr = tempArr;
}
console.log(contentArr.join("\n"));