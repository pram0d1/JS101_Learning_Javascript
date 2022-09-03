var reg_userName = "pramod";
var reg_passWord = "shining star";

var ent_userName ="pramod";
var ent_passWord = "shining star";

if(reg_userName==ent_userName){
  if(reg_passWord== ent_passWord){
    console.log("Logged in successfully");
  }else{
    console.log("Incorrect password ");
  }
}else{
  console.log("Wrong username");
}