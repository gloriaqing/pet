var express=require("express");
var app=express();
app.get("/api/list1",function(req,res){
	res.json({"code":"0",data:[
	  {img:"../img/03index_2_02.jpg",info:"妮妮"},
      {img:"../img/03index_2_05.jpg",info:"小虎"},
      {img:"../img/04index_06.jpg",info:"小狐"},
       {img:"../img/04index_07.jpg",info:"小萌"},
      {img:"../img/03index_2_05.jpg",info:"小虎"},
      {img:"../img/04index_06.jpg",info:"小狐"}
		]})
})

app.get("/api/list2",function(req,res){
	res.json({"code":"0",data:[
	  
	{img:"../img/03index_1_02.jpg",info:"小淙淙"},
      {img:"../img/03index_1_04.jpg",info:"小狼狼"},
      {img:"../img/03index_1_07.jpg",info:"小刚刚"},
      {img:"../img/03index_1_08.jpg",info:"小丸丸"},
      {img:"../img/03index_1_07.jpg",info:"小刚刚"},
      {img:"../img/03index_1_08.jpg",info:"小丸丸"}
		]})
})
app.listen("8090")