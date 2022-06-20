var mysql = require("mysql");
var con =  mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"rahulm"
})

con.connect(function(err){
    if (err) throw err
    console.log("[+] Connected....")
    var sql = "insert into employees values(1,'RahulM',21,1200)"
    con.query(sql,function(err,result){
    if(err) throw err
    console.log("[+] values successfully inserted....")
    })
})