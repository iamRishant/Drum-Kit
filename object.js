//creating object

var bellboy2={
    name:"xyz",
    age:"10",
    workpermit:true,
    language:["hindi","english"],
    fxn: function(){
        // jo bhi ho
    }
}
//first letter is capital then it is a construction funcion

function BellBoy(name,age,workpermit,language){
    this.name=name;
    this.age=age;
    this.workpermit=workpermit;
    this.language=language;
    // we can also add function/method here
    // this.functioName=function(){..}
}
//creating object
var bellboy1= new BellBoy("abc","19",true,["hindi","english"]);