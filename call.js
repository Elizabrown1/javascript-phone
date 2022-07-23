

const clickMe=(show)=>{
screenb.value += show;
}
function mise() {
	let k = screenb.value;
    let u = k.slice(0,-1);
	screenb.value = u;
}

let generateISBN=()=>{
       let ISBN = Math.floor(1000000000000000+Math.random()*9000000000000000)
        return ISBN
        }
let buy=()=>{
        let repeat =parseInt(number.value)
   for (var i = 0; i < repeat; i++) {
      
     var obj ={
    amounts: amount.value,
    network:line.value,
    number:generateISBN(),
    value:"unused",
  }
if (!localStorage.hasOwnProperty("mylibrary")) {
       localStorage.setItem("mylibrary",JSON.stringify([]))
   }
  
else{
  let array = JSON.parse(localStorage.getItem("mylibrary"))
    array.push(obj)
    localStorage.setItem("mylibrary",JSON.stringify(array))
}
}
};

let generatecard;


let generate=()=>{
    let row;
  let table = "<table border='2px'solid black><tr>"
  "<tr><td>s/N</td><td>network</td><td>amount</td>"
  generatecard = JSON.parse(localStorage.getItem("mylibrary"))
  
  for (var i = 0; i < generatecard.length; i++) {
    let o = i+1
    let s = generatecard[i].box;
    let p = generatecard[i].network;
    let q = generatecard[i].amounts;
    let r = generatecard [i].number;
    let j = generatecard[i].value;
    
    row = `<tr><td>${o}</td><td>${p}</td><td>${q}</td><td>${r}</td><td>${j}</td></tr>`
    table+=row
  }
  table+="</table>"
  result.innerHTML = table
}

// let a = (num) => {
//   screenb.value += num;
// };
// let del = () => {
//   screenb.value = screenb.value.slice(0, -1);
// };


let balanceValue

let check=()=>{
  let getbalance = JSON.parse(localStorage.getItem("balance"))
  if (screenb.value == "") {
    screenb.value ="input a code"
  }
  else if (screenb.value=="*556#" && line1.value== "MTN") {
   balanceValue = getbalance.find((val,index)=>index==0)
   
     screenb.value="balance : "+"#"+ balanceValue.amount
  }
  else if (screenb.value=="*123#" && line1.value== "AIRTEL") {
    balanceValue = getbalance.find((val,index)=>index==1)
   
     screenb.value="balance : "+"#"+ balanceValue.amount
  }

   else if (screenb.value=="*124#" && line1.value== "GLO") {
    balanceValue = getbalance.find((val,index)=>index==2)
   
     screenb.value="balance : "+ "#"+balanceValue.amount
  }
  else if (screenb.value=="*222#" && line1.value== "ETISALAT") {
    
    balanceValue = getbalance.find((val,index)=>index==3)
   
     screenb.value="balance : "+"#"+ balanceValue.amount
   }
      }
  

 
  

var min = 0
var second = 0
var zeroplaceholder = 0
function countUp(){
  second++
  if (second<10) {
    screenb.value= `0${min}:0${second}`
  }
  else {
    if (second%60==0) {
      min++
      second="0"+1
    }
    screenb.value=`0${min}:${second}`
  }

 
}
// console.log(setInterval(function(){countUp()},1000)   )
// console.log(second);
// console.log(min);


   let timmm

function call() {
  let array1;
let beb;
let collect = JSON.parse(localStorage.mylibrary)
for (var i = 0; i < collect.length; i++) {
 beb=screenb.value
  if(beb.includes(collect[i].number) && line1.value == collect[i].network && collect[i].value=="unused"){
screenb.value=collect[i].network+" "+collect[i].amounts+" "+"loaded"

collect[i].value="used"

//let objOfBalance={network:line1.value, amount:collect[i].amounts}

if (!localStorage.hasOwnProperty("balance")) {
       
       array1= [{network:"MTN", amount:0},{network:"AIRTEL", amount:0}, {network:"GLO", amount:0}, {network:"ETISALAT", amount:0}];

   }
  
else{
   array1 = JSON.parse(localStorage.getItem("balance"))
    
    
}
// array1.push(objOfBalance)
for (var j = 0; j < array1.length; j++) {
  
  
  if (array1[j].network== collect[i].network ) {

   array1[j].amount=Number(array1[j].amount) + Number(collect[i].amounts); 
  }
  
}
localStorage.setItem("balance",JSON.stringify(array1))
  }
  else if(beb.length==11 && beb[0]==0){
    screenb.value="loading..."

  timmm = setInterval(function(){countUp()},1000)
     setTimeout(timmm,10000)

  }
  
  else {
    check()
  }
  
}
localStorage.setItem("mylibrary",JSON.stringify(collect))
}
let check2=()=>{
    let screendata = screenb.value

  if (screendata[2]==":" && screendata.length==5) {
    let balanceData = JSON.parse(localStorage.balance)
    let findNetwork = balanceData.find(val=>val.network==line1.value)
    let data1=screendata.slice(1,2)
    let data2=screendata.slice(3,5)
    let totalTime = (Number(data1)*60)+Number(data2)
    let finalResult =totalTime*0.24
   findNetwork.amount-=finalResult
   screenb.value=`call ended cost : ${finalResult}`
   localStorage.balance=JSON.stringify(balanceData)
   clearInterval(timmm)

 }
 else{
  screenb.value=""
 }
}


    var totalTime;
    let name=()=>{
    var date = new Date()
   totalTime= date.toLocaleTimeString();
  // screenb.innerHTML= totalTime;
  console.log(totalTime);
}
setInterval( name,1000);




