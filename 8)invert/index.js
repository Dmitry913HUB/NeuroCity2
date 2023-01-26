"use strict"
let fs = require('fs');
fs.readFile('input.txt', 'utf8', function(error, fileContent){
   if(error) throw error;

   let toWrite = invers(fileContent);

   fs.writeFile('output.txt', toWrite, function(error){
      if(error) throw error;
      console.log('Данные успешно записаны в файл');
   });
});

function invers(str){
    return str.split("").reverse().join("");
}