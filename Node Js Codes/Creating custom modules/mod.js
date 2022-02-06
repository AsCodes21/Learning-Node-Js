console.log("This is mod.js")
//Lets make some function which we will export to index.js.
Sum = (num1,num2)=>{
    console.log(num1+num2)
}
Product = (num1,num2)=>{
    console.log(num1*num2)
}
module.exports = {
    Sum:Sum,
    Product:Product,
    Name:"Anmol"
} 
