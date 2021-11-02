const fs = require('fs');
// Creates employees.json file and adds some data into file
fs.writeFile('employees.json',
'{"name" : "Employee 1 Name","salary" : 2000}',
'utf8', (err) => {
  if(err) console.log(err);
});

//Reads employees.json file
fs.readFile('employees.json', 'utf8', (err,data)=>{
  if(err){
    console.log(err)
  }else {
    console.log(data);
  }
});

//Appends some data into employees.json
fs.appendFile('employees.json', ' \n{"status" : "Güncellendi"}','utf8',(err) => {
  if(err){
    console.log(err);
  }
});

//Deletes employees.json file
fs.unlink('employees.json', (err) => {
  if(err){
    console.log(err);
  }
});

fs.readFile('employees.json', 'utf8', (err,data)=>{
  if(err){
    console.log(err)
  }else {
    console.log(data);
  }
});
