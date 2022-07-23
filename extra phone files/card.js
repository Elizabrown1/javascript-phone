// 	    var mtn100= []
// 		var mtn200=[]
// 		var mtn500=[]
// 		var mtn1000=[]
// 		var airtel100=[]
// 		var airtel200=[]
// 		var airtel500=[]
// 		var airtel1000=[]
// // 		var obj ={
// // 	network:line.value,
// // 	amount:amount.value,
// // 	number:generateISBN()
// // };
// 	let generate=()=>{
// 		if (line.value=="mtn") {
// 			if (!localStorage.hasOwnProperty("mylibary")) {
//                   localStorage.setItem("mylibary",JSON.stringify([]))
//               }
//               var myresult=JSON.parse(localStorage.getItem("mylibary"));
//            let i = number.value;
// 		let l = 0
// 		while(i>l){
// 		let y=Math.random();
// 		let obj=Math.floor(y*12300000000000000)
// 		myresult.push(obj)
// 		l++;
// 		localStorage.setItem("mylibrary", JSON.stringify(myresult))
// 	}

// 		}else if (line.value=="airtel") {
// 			if (!localStorage.hasOwnProperty("mylibary")) {
//                   localStorage.setItem("mylibary",JSON.stringify([]))
//               }
//               var myresult=JSON.parse(localStorage.getItem("mylibary"));
// 		let i = number.value;
// 		let l=0
// 		while(i>l){
// 		let y=Math.random();
// 		let obj=Math.floor(y*1230000000000000)
// 		myresult.push(obj)
// 		l++;
// 		}
// 		localStorage.setItem("mylibrary", JSON.stringify(myresult));

// 	}
// 	if (number.value !="" && line.value=="mtn" && amount.value ==100){
// 		let i = number.value
// 		let l=0
// 		while(i>l){
// 		let y=Math.random();
// 		let obj=Math.floor(y*1230000000000000)
// 		// mtn100.push(obj)
// 		l++;
// 		// localStorage.setItem("mylibrary", JSON.stringify(myresult));
// 		}
// 		alert("mtn #100 recharge successful");
// 		result.innerHTML=myresult;

// 	}else if(number.value !="" && line.value=="mtn" && amount.value ==200){
// 		let i = number.value
// 		let l=0
// 		while(i>l){
// 		let y=Math.random();
// 		let obj=Math.floor(y*1230000000000000)
// 		// mtn200.push(obj)
// 		l++;
// 	}
// 		alert("mtn #200 recharge successful");
// 		result.innerHTML=myresult;

// 	}else if(number.value !="" && line.value=="mtn" && amount.value ==500){
// 		let i = number.value
// 		let l=0
// 		while(i>l){
// 		let y=Math.random();
// 		let obj=Math.floor(y*1230000000000000)
// 		// mtn500.push(obj)
// 		l++;
// 	}
// 		alert("mtn #500 recharge successful");
// 		result.innerHTML=myresult;

// 	}else if(number.value !="" && line.value=="mtn" && amount.value ==1000){
// 		let i = number.value
// 		let l=0
// 		while(i>l){
// 		let y=Math.random();
// 		let obj=Math.floor(y*1230000000000000)
// 		// mtn1000.push(obj)
// 		l++;
// 	}
// 		alert("mtn #1000 recharge successful");
// 		result.innerHTML=myresult;

// }else if (number.value !="" && line.value=="airtel" && amount.value ==100){
// 		let i = number.value
// 		let l=0
// 		while(i>l){
// 		let y=Math.random();
// 		let obj=Math.floor(y*1230000000000000)
// 		// airtel100.push(obj)
// 		l++;
// 		}
// 		alert("airtel100 recharge successful");
// 		result.innerHTML=myresult;

// 	}else if(number.value !="" && line.value=="airtel" && amount.value ==200){
// 		let i = number.value;
// 		let l=0
// 		while(i>l){
// 		let y=Math.random();
// 		let obj=Math.floor(y*1230000000000000)
// 		// airtel200.push(obj)
// 		l++;
// 	}
// 		alert("airtel200 recharge successful");
// 		result.innerHTML=myresult;

// 	}else if(number.value !="" && line.value=="airtel" && amount.value ==500){
// 		let i = number.value;
// 		let l=0
// 		while(i>l){
// 		let y=Math.random();
// 		let obj=Math.floor(y*1230000000000000)
// 		// airtel500.push(obj)
// 		l++;
// 	}
// 		alert("airtel500 recharge successful");
// 		result.innerHTML=myresult;

// 	}else if(number.value !="" && line.value=="airtel" && amount.value ==1000){
// 		let i = number.value
// 		let l=0
// 		while(i>l){
// 		let y=Math.random();
// 		let obj=Math.floor(y*1230000000000000)
// 		// airtel1000.push(obj)
// 		l++;
// 	}
// 		alert("airtel1000 recharge successful");
// 		result.innerHTML=myresult;

// 	}else{
// 		alert("wrong input")
// 		// }
// let a =(num)=>{}

// 		screen.value += num
// 	}
// 	let del=()=>{
// 		screen.value= screen.value.slice(0,1);
// 	}
let a = (num) => {
  screenb.value += num;
};
let del = () => {
  screenb.value = screenb.value.slice(0, -1);
};

var count;
  var b = [];
var bal = 0;
var tea = [];
var leem = [];

function save() {
  var ball = JSON.stringify(b);
  localStorage.setItem("mylibrary", ball);
  var ba = JSON.stringify(bal);
  localStorage.setItem("balance", ba);
}
function check() {
  if (screenb.value == "*556#") {
    alert(bal);
  }
}
// console.log(b)
function buy() {
	console.log(b)
  var gen = numb.value;

  if (gen != "" && gen > 0) {
    for (i = 0; i < gen; i++) {
      var c = "";
      count = 1;
      // var d = "network : mtn";
      // var r = 200;
      for (var j = 0; j < 15; j++) {
        c += Math.round(Math.random() * 8);
        if (count == 4) {
          c += "-";
          count = 0;
        }
        count++;
      }
      console.log(b);

      b[i] = [ c, "New <br>"];
      result.innerHTML += b[i];
    }
  } else {
    alert("Please input the value to generate");
    result.innerHTML = "";
    number.focus();
  }
}

function call() {
  var cd = b.find((e) => {
    return screenb.value == e[0];
  });
  if(!cd){
  	return alert('input a card')
  }

  if (cd && cd[1] === "New <br>") {
    alert("You have been credited with N200");
    bal += 200;
    cd[1] = "used <br>";
  } else if (cd && cd[1] === "used <br>") {
    alert("This card has been used by you");
  }
}
function ne() {
  b = JSON.parse(localStorage.getItem("mylibrary"));
  bal = JSON.parse(localStorage.getItem("balance"));

  // bal=JSON.parse(localStorage.clearItem("arr"))
}

function generate() {
  // console.log(b)
  result.innerHTML = b + "<br>";
}
