var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url,function(err,db){
    if(err) throw err;
    var dbo = db.db("mydb");
    var myobj = {_id:161,name:'Xebia'};

    dbo.collection("products").insertOne(myobj,function(err,res){
        if(err) throw err;
        console.log(res.name);
        db.close();
    });
});